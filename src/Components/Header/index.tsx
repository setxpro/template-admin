import React from 'react';
import * as C from './styles';

interface Props {
  toggleTheme: () => void;
}

const Header = ( { toggleTheme } : Props) => {
  return (
      <C.Container>
        <C.Blur></C.Blur>
          <C.AreaNavigate>
              <button onClick={toggleTheme}>Toggle Theme</button>
          </C.AreaNavigate>
      </C.Container>
  );
}

export default Header;