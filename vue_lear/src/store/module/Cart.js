import shop from '../../api/Shop'
// eslint-disable-next-line no-unused-vars
const state = () => (
  {
    items: [],
    checkoutStatus: false
  }
)
// eslint-disable-next-line no-unused-vars
const getters = {
  cartProducts: (state, getters, rootState) => {
    debugger
    return state.items.map(({id, quantity}) => {
      debugger
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}
// eslint-disable-next-line no-unused-vars
const actions = {
  checkout ({commit, state}, products) {
    const savedCartItems = [...state.items]
    console.log('savedCartItems', savedCartItems)
    commit('setCheckoutStatus', false)
    commit('setCartItems', {items: []})
    shop.buyProducts(products, () => commit('setCheckoutStatus', 'successful'), () => {
      commit('setCheckoutStatus', 'failed')
      commit('setCartItems', {items: savedCartItems})
    })
  },
  addProductToCart ({state, commit}, product) {
    commit('setCheckoutStatus', false)
    debugger
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      debugger
      if (!cartItem) {
        commit('pushProductToCart', {id: product.id})
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('products/decrementProductInventory', {id: product.id}, {root: true})
    }
  }
}
// eslint-disable-next-line no-unused-vars
const mutations = {
  pushProductToCart (state, {id}) {
    state.items.push({id, quantity: 1})
  },
  incrementItemQuantity (state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  setCartItems (state, {items}) {
    state.items = items
  },
  setCheckoutStatus (state, {status}) {
    state.checkoutStatus = status
  }
}
export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
