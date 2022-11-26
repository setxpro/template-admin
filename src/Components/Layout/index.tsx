import { DefaultTheme } from 'styled-components';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import * as C from './styles';

interface Props {
    toggleTheme: () => void;
    theme: DefaultTheme;
}
const Layout = ({toggleTheme, theme}: Props) => {
  return (
      <C.Container>
          <Sidebar/>
          <Header toggleTheme={toggleTheme} theme={theme}/>
          <Main/>
      </C.Container>
  );
}

export default Layout;