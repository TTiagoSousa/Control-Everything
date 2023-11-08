import { BadGatewayException } from "@nestjs/common";
import { createSavingTransition_dto } from "../dto/create.savings.transition.dto";
import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";

export async function CreateSavingTransition (
  dto: createSavingTransition_dto,
  userId: string,
) {

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();
  const { transitiontype, data, platform, amount, hour, currencyType } = dto;

  const count = await SavingsTransitionRepository.countByUserId(userId)

  const nextNumber = count + 1;
  const lastTransitionID = `ST${String(nextNumber).padStart(2, '0')}`

  let transitionAmount = amount;

  if (transitiontype === 'Deposit') {
    transitionAmount = Math.abs(amount); // Torna o valor positivo
  } else if (transitiontype === 'Withdraw') {
    transitionAmount = -amount; // Torna o valor negativo
  }

  if (
    transitiontype !== 'Deposit' &&
    transitiontype !== 'Withdraw' &&
    transitiontype !== 'Transfer'
  ) {
    throw new BadGatewayException('Invalid transition type');
  }

  const savingTransition = await SavingsTransitionRepository.create({
    transitionID: lastTransitionID,
    transitiontype,
    data,
    hour,
    platform,
    amount: transitionAmount,
    currencyType,
    createdById: userId,
    isActive: true,   
  })
  return { message: 'Transição criada com sucesso', savingTransition };
}