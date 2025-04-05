import {CartListItemContainer, CartProductContainer, CartProductTitle, CartProductTotal, CartButtonsContainer, CartRemoveButton, CartItemCount, CartAddButton} from './styledComponents'

const CartListItem = props => {
    const {cartItemDetails, onClickIncrement, onClickDecrement} = props
    const {id, name,price, quantity} = cartItemDetails
    const totalProductPrice = price * quantity

    const onClickPlus = () => onClickIncrement(id)
    const onClickMinus = () => onClickDecrement(id)

    return (
        <CartListItemContainer>
            <CartProductContainer>
                <CartProductTitle>{name}</CartProductTitle>
                <CartProductTotal>${price}x{quantity}=${totalProductPrice}</CartProductTotal>
            </CartProductContainer>
            <CartButtonsContainer>
                <CartRemoveButton type='button' onClick={onClickMinus}>-</CartRemoveButton>
                <CartItemCount >{quantity}</CartItemCount>
                <CartAddButton type='button' onClick={onClickPlus}>+</CartAddButton>
            </CartButtonsContainer>
        </CartListItemContainer>
    )
}

export default CartListItem