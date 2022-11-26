import styled from 'styled-components';

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

export const Blur = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  /* Full height */
    background: rgba(0, 0, 0, 0.6);
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
    justify-content: end;
`;