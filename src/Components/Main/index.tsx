import React from 'react';
import DashboardExpenses from '../Dashboard/Expenses';
import DashboardRevenue from '../Dashboard/Revenue';
import TwoLeaveChart from '../Dashboard/TwoLeaveChart';
import * as C from './styles';

const Main: React.FC = () => {
  return (
      <C.Container>
        <C.Content>
          <C.Area>
            <div className='congratulations'></div>
             
            <div className='subscribers-gained'>
              <DashboardExpenses/>
            </div>
            <div className='orders-received'>
              <DashboardRevenue/>
            </div>
          </C.Area>
          <C.Area>
            <div className='avg-sessions'>
            <TwoLeaveChart/>

            </div>
            {/* <div className='support-tracker'>
            </div> */}
          </C.Area>
          <C.Area>
            <div className='table-clients'>

            </div>
          </C.Area>
        </C.Content>
      </C.Container>
  );
}

export default Main;