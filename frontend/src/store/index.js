import { createStore } from 'vuex'
import axios from 'axios'
const spiceUrl= "https://full-stackeomp-36qq.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    filtername: null,
    filtercategory: null,
    addContent: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    filtername(state, filtername) {
      state.filtername = filtername
    },
    filtercategory(state, filtercategory) {
      state.filtercategory = filtercategory
    },
    addContent(state, data) {
      state.addContent = data
    }

  },
  actions: {
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${spiceUrl}users`)
        context.commit("setUsers", data.results)
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${spiceUrl}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async filtercategory(context) {
      try{
        const {data} = await axios.get(`${spiceUrl}filterCategory`)
        context.commit("filtercategory", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    },
    async addProduct(context, prodData){
      try {
        const response = await axios.post(`${spiceUrl}product`, prodData)
        context.commit('addContent', response.data)
      } catch (error) {
        console.log(error);
      }
    }

  },  
  modules: {
  }
})
