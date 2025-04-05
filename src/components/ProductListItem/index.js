import {ProductListItemContainer, ProductText, AddToCartButton} from './styledComponents'

const ProductListItem = props => {
    const {productDetails, onClickAddButton} = props
    const {id, name, price} = productDetails
    const onCickAdd = () => onClickAddButton(id)

    return (
        <ProductListItemContainer>
            <ProductText>{name}</ProductText>
            <ProductText>{price}</ProductText>
            <AddToCartButton type='button' onClick={onCickAdd}>Add to cart</AddToCartButton>
        </ProductListItemContainer>
    )
}

export default ProductListItem