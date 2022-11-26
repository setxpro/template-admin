import React from 'react';
import * as C from './styles';


const Main: React.FC = () => {
  return (
      <C.Container>
        <C.Content>
          <C.Area>
            <div className='congratulations'></div>
            <div className='subscribers-gained'></div>
            <div className='orders-received'></div>
          </C.Area>
          <C.Area>
            <div className='avg-sessions'></div>
            <div className='support-tracker'></div>
          </C.Area>
          <C.Area>
            
            <div className='table-clients'></div>
          </C.Area>
        </C.Content>
      </C.Container>
  );
}

export default Main;