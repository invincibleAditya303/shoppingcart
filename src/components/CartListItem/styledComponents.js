import styled from "styled-components";

export const CartListItemContainer = styled.li`
    height: 15vh;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type :none;
    margin-bottom: 10px;
`

export const CartProductContainer = styled.div`
    height: 100%;
    width: 20%;
    margin-left: 10px;
`

export const CartProductTitle = styled.p`
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 500;
`

export const CartProductTotal = styled.p`
    font-size: 14px;
    font-family: "Roboto";
`

export const CartButtonsContainer = styled.div`
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
`

export const CartRemoveButton = styled.button`
    heoght: 4vh;
    width: 2vw;
    background-color: #e6230e;
    color: #ffffff;
    font-size: 14px;
    font-family: "Roboto";
    border-width: 0px;
    padding: 5px;
    cursor: pointer;
    outline: none;
`

export const CartItemCount = styled.p`
    font-size: 14px;
    font-family: "Roboto";
    font-weight: 200;
`

export const CartAddButton = styled(CartRemoveButton)`
    background-color: #1bcc1b;
`