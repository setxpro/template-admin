import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    transition: all 1s ease;
    background: ${props => props.theme.colors.background};
`;
