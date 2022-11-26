import React from 'react';
import Header from '../Header';
import Main from '../Main';
import * as C from './styles';


const Layout: React.FC = () => {
  return (
      <C.Container>
          <Header/>
          <Main/>
      </C.Container>
  );
}

export default Layout;