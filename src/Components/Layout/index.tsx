import React from 'react';
import Header from '../Header';
import Main from '../Main';
import * as C from './styles';

interface Props {
    toggleTheme: () => void;
}
const Layout = ({toggleTheme}: Props) => {
  return (
      <C.Container>
          <Header toggleTheme={toggleTheme}/>
          <Main/>
      </C.Container>
  );
}

export default Layout;