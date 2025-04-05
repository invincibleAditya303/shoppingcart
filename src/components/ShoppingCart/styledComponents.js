import styled  from "styled-components";

export const ShoppingBgContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #9a9c9a;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ShoppingCartHeading = styled.h1`
    font-size: 32px;
    font-family: "Roboto";
    font-weight: bold;
`

export const ProductsContainer = styled.div`
    height: 24vh;
    width: 80%;
`

export const ProductsHeading = styled.p`
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 500;
`

export const ProductsListContainer = styled.ul`
    height: 22vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 0px;
`

export const CartSummaryContainer = styled.div`
    height: ${props => props.totalPercentage >= 100 ? '15vh' : '30vh'};
    width: 80%;
    margin-bottom: 20px;
    margin-top: 60px;
    border-radius: 10px;
`

export const CartSummaryHeading = styled.p`
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 500;
`

export const CartSummaryTextContainer = styled.div`
    height: ${props => props.totalPercentage>=100 ? '13vh' : '28vh'};
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
`

export const CartSummaryTotalContainer = styled.div`
    height: 5vh;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000000;
    margin-bottom: 10px;
`

export const SubtotalText = styled.p`
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 200;
`

export const Subtotal = styled.p`
    font-size: 22px;
    font-family: "Roboto";
    font-weight: 500;
`

export const FreeGiftContainer = styled.div`
    height: 20vh;
    width: 95%;
    background-color: #98baf5;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FreeGiftText = styled.p`
    font-size: 14px;
    font-family: "Roboto";
    padding-left: 2.5%;
    align-self: flex-start;
`

export const TotalThresholdContainer = styled.div`
    height: 2vh;
    width: 95%;
    background-color: #9a9c9a;
    border-radius: 20px;
`

export const PercentageCompletion = styled.div`
    height: 100%;
    width: ${props => props.totalPercentage}%;
    background-color: #306acf;
`

export const CartItemContainer = styled.div`
    width: 80%;
    margin-top: 140px;
`

export const CartItemText = styled.p`
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 500;
`

export const CartListContainer = styled.ul`
    width: 100%;
    padding-left: 0px;
`

export const CartEmptyContainer = styled.div`
    height: 15vh;
    width: 80%;
    background-color: #ffffff;
    border-radius: 10px;
    margin-top: 60px;
`

export const CartEmptyTitle = styled.p`
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 400;
    text-align: center;
`

export const CartEmptyText = styled.p`
    font-size: 14px;
    font-family: "Roboto";
    text-align: center;
`