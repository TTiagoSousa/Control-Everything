import React, { useState, createContext, useContext, useEffect } from 'react';

const Navs = createContext({});

const NavsContext = ({ children }) => {

  // Alert  
    const [ alert, setAlert ] = useState({
      open: false, // Alert Close
      message: "", // Alert message
      type: "", // type of alert
    })
  // Alert

  // Choose navigation type
    const [typeOfNavifation, setTypeOfNavifation] = useState(
      localStorage.getItem("sidebarPosition") || "Sidebar_Home"
    );

    useEffect(() => {
      localStorage.setItem("sidebarPosition", typeOfNavifation);
    }, [typeOfNavifation]);

    function handleTypeofPositionChange(e) {
      const position = e.target.value;
      switch (position) {
        case "Sidebar_Home":
        case "Mobile_Menu":
          setTypeOfNavifation(position);
          break;
        default:
          console.log("Invalid position");
      }
    }

    useEffect(() => {
      function handleResize() {
        const isMobile = window.innerWidth < 1200;
        if (isMobile) {
          setTypeOfNavifation("Mobile_Menu");
        }
    }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  // Choose navigation type

  // Open SideBarHome
    const [ mobile_Sidebar_Home, set_Mobile_Sidebar_Home ] = useState(false);
    const show_Mobile_Sidebar_Home = () => set_Mobile_Sidebar_Home(!mobile_Sidebar_Home);
  // Open SideBarHome

  // Customize Sidebar
    const [ customize_Sidebar, setCustomize_Sidebar ] = useState(false);
    const showCustomize_Sidebar = () => setCustomize_Sidebar(!customize_Sidebar);
  // Customize Sidebar

  return (
    <Navs.Provider 
      value={{ 
        alert, setAlert,
        typeOfNavifation, setTypeOfNavifation,
        mobile_Sidebar_Home, set_Mobile_Sidebar_Home, show_Mobile_Sidebar_Home,
        customize_Sidebar, setCustomize_Sidebar, showCustomize_Sidebar,
      }}
    >
      {children}
    </Navs.Provider>
  )

};

export default NavsContext;

export const NavsState = () => {
  return useContext(Navs);
};