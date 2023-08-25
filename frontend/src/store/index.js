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
    addContent: null,
    addUsers: null,
    setUpdateProd: null
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
    },
    addUsers(state, data) {
      state.addUsers = data
    },
    setDeleteP(state, data){
      state.products = data
    },
    setDeleteU(state, data){
      state.users = data
    },
    setUpdateProd(state, data){
      state.product = data
    },

  },
  actions: {
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${spiceUrl}users`)
        context.commit("setUsers", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${spiceUrl}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async fetchProduct(context, prodID) {
      try{
        const {data} = await axios.get(`${spiceUrl}product/${prodID}`)
        context.commit("setProduct", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async filtercategory(context) {
      try{
        const {data} = await axios.get(`${spiceUrl}filterCategory`)
        context.commit("filtercategory", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async addProduct(context, prodData){
      try {
        const response = await axios.post(`${spiceUrl}product`, prodData)
        context.commit('addContent', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async addUser(context, userData){
      try {
        const response = await axios.post(`${spiceUrl}user`, userData)
        context.commit('addUsers', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUserFUNC(context, userID){
      try {
        const response = await axios.delete(`${spiceUrl}user/${userID}`)
        context.commit('setDeleteU', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProductFUNC(context, prodID){
      try {
        const response = await axios.delete(`${spiceUrl}product/${prodID}`)
        context.commit('setDeleteP', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async editProduct(context, prodData){
      try {
        const response = await axios.patch(`${spiceUrl}product/${prodData}`)
        context.commit('setUpdateProd', response.data)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },

  },  
  modules: {
  }
})
