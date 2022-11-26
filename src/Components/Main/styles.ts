import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding-bottom: 1rem;
`;
export const Content = styled.div`
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const Area = styled.div`
    display: flex;
    gap: 1rem;

    .congratulations {
        flex:2; 
        border-radius: 1rem;
        height: 300px;
        width: 50%;
        transition: all 1s ease;
        background: ${props => props.theme.colors.sidebar};
    }
    .subscribers-gained {
        flex:1; 
        border-radius: 1rem;
        height: 300px;
        width: 50%;
        transition: all 1s ease;
        background: ${props => props.theme.colors.sidebar};
    }
    .orders-received {
        flex:1; 
        border-radius: 1rem;
        height: 300px;
        width: 50%;
        transition: all 1s ease;
        background: ${props => props.theme.colors.sidebar};
    }
    .avg-sessions {
        width: 50%;
        border-radius: 1rem;
        flex:2;
        height: 400px;
        width: 50%;
        transition: all 1s ease;
        background: ${props => props.theme.colors.sidebar};
    }
    .support-tracker{ 
        width: 50%;
        border-radius: 1rem;
        height: 400px;
        width: 50%;
        transition: all 1s ease;
        background: ${props => props.theme.colors.sidebar};
    }
    .table-clients{ 
        width: 100%;
        border-radius: 1rem;
        height: 500px;
        transition: all 1s ease;
        background: ${props => props.theme.colors.sidebar};
    }
`;
