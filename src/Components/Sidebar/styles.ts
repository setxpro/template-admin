import styled from 'styled-components';

import { IoClose } from 'react-icons/io5'

export const Container = styled.div<{openSidebar: boolean}>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    cursor: pointer;
    display: ${props => props.openSidebar ? 'inline' : 'none'};
`;
export const SidebarArea = styled.div<{openSidebar: boolean}>`
    width: ${props => props.openSidebar ? '285px' : '0'};
    transition: all .8s ease;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: ${props => props.theme.colors.sidebar};
    z-index: 9999;

    overflow: hidden;
`;
export const TopSidebar = styled.div`
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    h1 {
        white-space: nowrap;
        flex: 1;
        text-align: center
    }
`;

export const CloseIcon = styled(IoClose)`
    color: ${props => props.theme.colors.text};
    transition: 1s all ease;
    font-size: 2rem;
    cursor: pointer;
`;