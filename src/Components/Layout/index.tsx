import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import * as C from './styles';

interface Props {
    toggleTheme: () => void;
}
const Layout = ({toggleTheme}: Props) => {
  return (
      <C.Container>
          <Sidebar/>
          <Header toggleTheme={toggleTheme}/>
          <Main/>
      </C.Container>
  );
}

export default Layout;