import React from "react";
import useSidebar from "../../Hooks/useSidebar";
import * as C from "./styles";

const Sidebar = () => {
  const { openSidebar, wrapperSidebar } = useSidebar();
  return (
    <React.Fragment>
      <C.SidebarArea openSidebar={openSidebar}>
        <C.TopSidebar>
        <h1>Zend Logo</h1>
        <C.CloseIcon onClick={wrapperSidebar}/>
        </C.TopSidebar>
      </C.SidebarArea>
      <C.Container openSidebar={openSidebar}  onClick={wrapperSidebar}></C.Container>
    </React.Fragment>
  );
};

export default Sidebar;
