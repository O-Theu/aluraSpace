import styled from "styled-components";

export const Main = styled.main`
    margin: 0 24px;
`;

export const Principal = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`;

export const Banner = styled.div`
    width: 80%;
    position: relative;

    img {
        width: 100%;
        height: 288px;
    }

    h1 {
        position: absolute;
        z-index: 1;
        color: #d9d9d9;
        font-size: 2.5rem;
        font-weight: 700;
        width: 401px;
        height: 144px;
        top: 75px;
        left: 44px;
    }
`;

export const ContainerGallery= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 21%;
    margin-top: 1.5rem;
`;