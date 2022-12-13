import styled from "styled-components";

export const Container = styled.div`
    width: 65vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #d9d9d9;
    font-size: 16px;

  p {
    font-size: 1.25rem;
  }
`;

export const Lista = styled.ul`
    list-style: none;
    width: 380px;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

export const Item =  styled.li`
    background-color: rgba(148, 163, 184,0.3);
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
`; 