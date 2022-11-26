import styled from 'styled-components';

import { HiBars3 } from 'react-icons/hi2'
import { AiOutlineMail } from 'react-icons/ai'
import { BsCheck2Square, BsChatLeft } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'

export const MailIcon = styled(AiOutlineMail)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const BarsIcon = styled(HiBars3)`
    color: #999;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const CheckIcon = styled(BsCheck2Square)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const ChatIcon = styled(BsChatLeft)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const CalendarIcon = styled(FiCalendar)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const Container = styled.div`
    height: 90px;

    display: flex;
    flex-direction: column;
    padding: 0 10px;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;

   
`;

export const Blur = styled.div<{disappearBlur: boolean}>`
    width: 100%;
    height: 100%;
    flex: 1;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  /* Full height */
    transition: all 1s ease;
    background: ${props => props.disappearBlur ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
    box-shadow: 0px 1px 49px 9px rgba(0,0,0,0.74);

    z-index: 999;
`;
export const AreaNavigate = styled.div`
    width: 100%;
    height: 60px;
    margin: auto;
    z-index: 9999;
    transition: all 1s ease;
    background: ${props => props.theme.colors.header};
    border-radius: 1rem;
    box-shadow: 0px 1px 9px rgba(0,0,0,0.74);

    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LeftArea = styled.div`
    display: flex;
    gap: 1rem;
`;
export const RightArea = styled.div``;
