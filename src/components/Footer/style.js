import styled from "styled-components";

export const Container = styled.footer`
    background-color: #04244f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.25) 25px 0px, rgba(0, 0, 0, 0.12) 32px 0px 30px, rgba(0, 0, 0, 0.12) 30px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    p {
        margin: 0;
        color: #d9d9d9;
    }
`;

export const Icons = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;