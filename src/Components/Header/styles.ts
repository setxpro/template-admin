import styled from 'styled-components';

import { HiBars3 } from 'react-icons/hi2'
import { AiOutlineMail } from 'react-icons/ai'
import { BsCheck2Square, BsChatLeft } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'
import { MdNightlight, MdLightMode } from 'react-icons/md'

export const DarkIcon = styled(MdNightlight)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const LightIcon = styled(MdLightMode)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const MailIcon = styled(AiOutlineMail)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 1.5rem;
    cursor: pointer;
`;
export const BarsIcon = styled(HiBars3)`
    color: #999;
    font-size: 2rem;
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
    align-items: center;
    gap: 1rem;
`;
export const RightArea = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export const AreaToggleTheme = styled.div`
   display: flex;
   align-items: center;
`;
export const ContentAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;
export const AreaName = styled.div`
    h3,h4 {
        color: ${props => props.theme.colors.text};
        transition: all 1s ease;
        text-align: end;
    }

    h3 {
        font-size: 1em;
        font-weight: 500;
    }
    h4 {
        font-size: .8em;
        font-weight: 500;
    }
`;

export const AreaAvatar = styled.div`
    .area-avatar {

        position: relative;

        img {
            width: 50px;
            border-radius: 50%;
            border: 2px solid #AAA;
            padding: 2px;

            
        }

        ::after {
                content: '';
                width: 15px;
                height: 15px;
                background: var(--color-online);
                border-radius: 50%;

                position: absolute;
                right: 5px;
                bottom: 2px;
                transition: all 1s ease;
                border: 2px solid ${props => props.theme.colors.header};
            }
    }
`;
