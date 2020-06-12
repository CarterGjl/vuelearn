<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <p>库存：{{product.inventory}}</p>
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ProductList',
  computed: mapState({products: state => state.products.all}),
  methods: mapActions('cart', ['addProductToCart']),
  created () {
    debugger
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>

<style scoped>

</style>
