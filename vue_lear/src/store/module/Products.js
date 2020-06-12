import shop from '../../api/Shop.js'
// eslint-disable-next-line no-unused-vars
const state = () => (
  {
    all: []
  }
)
// eslint-disable-next-line no-unused-vars
const getters = {}
// eslint-disable-next-line no-unused-vars
const actions = {
  getAllProducts ({commit}) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}
// eslint-disable-next-line no-unused-vars
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  decrementProductInventory (state, {id}) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
