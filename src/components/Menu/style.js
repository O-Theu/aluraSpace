import styled from "styled-components";

export const NavBar = styled.nav`
    width: 20%;
`;

export const Lista = styled.ul`
    padding-left: 1rem;
    margin: 0;
    height: 276px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Item = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
 
    &:first-child {
        a {
        font-weight: 700;
        color: #7b78e5;
        }
    }

    & img {
        margin-right: 0.5rem;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
 
    & a {
        text-decoration: none;
        font-size: 1.125rem;
        color: #d9d9d9;
    }
`;


