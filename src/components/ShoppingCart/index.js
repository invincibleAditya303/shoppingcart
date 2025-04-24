import { useState, useEffect } from 'react'

import {ShoppingBgContainer, ShoppingCartHeading, ProductsContainer, ProductsHeading, ProductsListContainer, CartSummaryContainer, CartSummaryHeading, CartSummaryTextContainer, CartSummaryTotalContainer, SubtotalText, Subtotal, FreeGiftContainer, FreeGiftText, TotalThresholdContainer, PercentageCompletion, CartItemContainer, CartItemText, CartListContainer, CartEmptyContainer, CartEmptyTitle, CartEmptyText} from './styledComponents'

import ProductListItem from '../ProductListItem'

import CartListItem from '../CartListItem'

const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
  ]

const giftItem = {id: 5, name: 'Wireless Mouse', price:0}

const ShoppingCart = () => {
    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const onClickAddButton = productId => {
        const currentProduct = cartList.find(eachItem => eachItem.id === productId)

        if (currentProduct === undefined) {
            const addProduct = products.find(eachItem => eachItem.id === productId)

            setCartList((prevCartList => [...prevCartList, {...addProduct, quantity: 1}]))
        } else {
            setCartList((prevCartList => {
                const existingItemIndex = prevCartList.findIndex(eachItem => eachItem.id === productId)

                return prevCartList.map((cartItem, index) =>
                    index === existingItemIndex ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
                )
            }))
        }
    }
    const onClickIncrement = productId => {
        setCartList((prevCartList => {
            const existingItemIndex = prevCartList.findIndex(eachItem => eachItem.id === productId)

            return prevCartList.map((cartItem, index) =>
                index === existingItemIndex ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
            )
        }))
    }

    const onClickDecrement = productId => {
        setCartList((prevCartList => {
            const existingItemIndex = prevCartList.findIndex(eachItem => eachItem.id === productId)

            if (prevCartList[existingItemIndex].quantity === 1) {
                return prevCartList.filter(eachItem => eachItem.id !== productId)
            }
            else {
                return prevCartList.map((cartItem, index) =>
                    index === existingItemIndex ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
                )
            }
        }))
    }

    let total = 0
    cartList.map(eachItem => total += (eachItem.quantity * eachItem.price))


    const updateCart = () => {
        setTotalPrice(total)

        if (totalPrice >= 1000) {
            if (!cartList.some(item => item.name === giftItem.name)) {
                setCartList((prevCartList => [...prevCartList, {...giftItem, quantity: 1}]))
            }
        } else {
            setCartList(prevCartList => prevCartList.filter(item => item.name !== giftItem.name))
        }
    }

    useEffect(() => {
        updateCart()
    })


    const totalPercentage = (totalPrice/1000) * 100
    console.log(totalPercentage)


    return (
        <ShoppingBgContainer>
            <ShoppingCartHeading>Shopping Cart</ShoppingCartHeading>
            <ProductsContainer>
                <ProductsHeading>Products</ProductsHeading>
                <ProductsListContainer>
                    {products.map(eachProduct => 
                        <ProductListItem productDetails={eachProduct} onClickAddButton={onClickAddButton} key={eachProduct.id} />
                    )}
                </ProductsListContainer>
            </ProductsContainer>
            <CartSummaryContainer totalPercentage={totalPercentage}>
                <CartSummaryHeading>Cart Summary</CartSummaryHeading>
                <CartSummaryTextContainer totalPercentage={totalPercentage}>
                    <CartSummaryTotalContainer>
                        <SubtotalText>Subtotal</SubtotalText>
                        <Subtotal>${totalPrice}</Subtotal>
                    </CartSummaryTotalContainer>
                    {totalPercentage<100 && <FreeGiftContainer>
                        <FreeGiftText>Add ${1000-totalPrice} more to get a FREE Wireless Mouse</FreeGiftText>
                        <TotalThresholdContainer>
                            <PercentageCompletion totalPercentage={totalPercentage}></PercentageCompletion>
                        </TotalThresholdContainer>
                    </FreeGiftContainer>}
                    {totalPercentage>100 && <FreeGiftText>You got a free Wireless Mouse</FreeGiftText>}
                </CartSummaryTextContainer>
            </CartSummaryContainer>
            {cartList.length !==0 && <CartItemContainer>
                <CartItemText>Cart Items</CartItemText>
                <CartListContainer>
                    {cartList.map(eachItem => 
                        <CartListItem cartItemDetails={eachItem} onClickIncrement={onClickIncrement} onClickDecrement={onClickDecrement} key={eachItem.is} />
                    )}
                </CartListContainer>
            </CartItemContainer>}
            {cartList.length === 0 && <CartEmptyContainer>
                    <CartEmptyTitle>Your cart is empty</CartEmptyTitle>
                    <CartEmptyText>Add some products to see them here!</CartEmptyText>
                </CartEmptyContainer>}
        </ShoppingBgContainer>
    )
}

export default ShoppingCart