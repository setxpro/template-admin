import { useEffect, useState } from "react";
import useSidebar from "../../Hooks/useSidebar";
import * as C from "./styles";

interface Props {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: Props) => {

  const { wrapperSidebar} = useSidebar()
  const [disappearHeader, setDisappearHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2) {
        setDisappearHeader(true);
      } else {
        setDisappearHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <C.Container>
      <C.Blur disappearBlur={disappearHeader}></C.Blur>
      <C.AreaNavigate>
        <C.LeftArea>
          <C.BarsIcon onClick={wrapperSidebar}/>
          <C.MailIcon />
          <C.CheckIcon />
          <C.ChatIcon />
          <C.CalendarIcon />
        </C.LeftArea>
        <C.RightArea>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </C.RightArea>
      </C.AreaNavigate>
    </C.Container>
  );
};

export default Header;
