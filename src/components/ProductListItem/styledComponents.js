import styled from "styled-components";

export const ProductListItemContainer = styled.li`
    height: 25vh;
    width: 18vw;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    list-style-type: none;
    margin-right: 15px;

    @media (width < 776px) {
        height: 20vh;
    }
`

export const ProductText = styled.p`
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 500;
    align-self: flex-start;
    padding-left: 5px;

    @media (width < 776px) {
        font-size: 10px;
    }
`

export const AddToCartButton = styled.button`
    height: 36px;
    width: 16vw;
    background-color: #306acf;
    color: #ffffff;
    font-size: 14px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 5px;
    border-width: 0px;
    margin-bottom: 5px;
    cursor: pointer;
    outline: none;

    @media (width < 776px) {
        height: 24px;
        width: 15vw;
        font-size: 10px;
    }
`