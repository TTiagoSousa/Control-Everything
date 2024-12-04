import * as Icon from '../../Imports/icons';
import { Link } from 'react-router-dom';

export const navItems = [     
    {
        label: 'Dashboard',
        icon: 'pi pi-link',
        template: (item, options) => (
            <Link to={item.url} className={options.className}>
                <i className={item.icon}></i>
                <span>{item.label}</span>
            </Link>
        ),
        url: '/CE/Dashboard'
    },
    {
        label: 'Assets',
        icon: 'pi pi-wallet',
        items: [
            {
                label: 'Savings',
                url: 'CE/Dashboard'
            },
            {
                label: 'Crypto',
                template: (item, options) => (
                    <Link to={item.url} className={options.className}>
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </Link>
                ),
                url: '/CE/Assets/Crypto'
            }
        ]
    },
];