import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import useSidebar from "../../Hooks/useSidebar";
import * as C from "./styles";

interface Props {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

const Header = ({ toggleTheme, theme }: Props) => {
  const { wrapperSidebar } = useSidebar();
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
          <C.BarsIcon onClick={wrapperSidebar} />
          <C.MailIcon />
          <C.CheckIcon />
          <C.ChatIcon />
          <C.CalendarIcon />
        </C.LeftArea>
        <C.RightArea>
          <C.AreaToggleTheme onClick={toggleTheme}>
            {theme.title === "dark" && <C.LightIcon/>}
            {theme.title === "light" && <C.DarkIcon/>}
          </C.AreaToggleTheme>
          <C.ContentAvatar>
            <C.AreaName>
              <h3>Patrick Anjos</h3>
              <h4>Software Engineer</h4>
            </C.AreaName>
            <C.AreaAvatar>
              <div className="area-avatar">
                <img src="https://github.com/setxpro.png" alt="av" />
              </div>
            </C.AreaAvatar>
          </C.ContentAvatar>
        </C.RightArea>
      </C.AreaNavigate>
    </C.Container>
  );
};

export default Header;
