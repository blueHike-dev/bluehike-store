import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../state/actions/products'

const Products = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const loadProducts = async () => {
    dispatch(setProducts(filterProducts))
  }

  const fetchProducts = async () => {
    const response =
  }

  const filterProducts = (products) => {
    return products.filter(
      (product) => 
      product.category === `men's clothing` || 
      product.category === `women's clothing`
    )
  }
  return (
    <div>Products</div>
  )
}

export default Products