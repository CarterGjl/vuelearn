<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'

export default {
  name: 'Shopping',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style scoped>

</style>
