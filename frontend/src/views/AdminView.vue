<template>
    
    <h1>Admin</h1>
<div>
 <h2>Products</h2>
 <button class="btn"><AddProduct/></button>
    <div class="table-responsive" style="margin-top: 1rem">
        <table  class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="tableContent" v-for="product in products" :key="product.productID">
            <tr>
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.Category }}</td>
                <td><img :src="product.prodUrl" :alt="product.prodName" style="width: 5rem; height:6rem" loading="lazy"></td>
                <td></td>
                <td><button class="btn btn-dark" @click="deleteProdcut(product.prodID)">Delete</button></td>    
                   </tr>
          </tbody>
        </table>
      </div>
</div>
<h2>Users</h2>
<button class="btn"><AddUser/></button>
<div class="table-responsive" style="margin-top: 1rem">
  <table  class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Gender</th>
        <th>User Role</th>
        <th>Email</th>
        <th>Password</th>
        <th>Image</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody id="tableContent" v-for="user in users" :key="user.userID">
      <tr>
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userPass }}</td>
          <td><img :src="user.userProfile" :alt="user.userName" style="width: 5rem; height:6rem" loading="lazy"></td>
          <td></td>
          <td><button class="btn btn-dark" @click="deleteUser(user.userID)">Delete</button></td>
             </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
import AddUser from '@/components/AddUser.vue'
export default {
  components: {
    AddProduct,
    AddUser
  },
  
        computed: {
            products(){
                return this.$store.state.products
            },
            users() {
                return this.$store.state.users
            },
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
            this.$store.dispatch('fetchUsers')
        },
        methods: {
          deleteUser(userID) {
            this.$store.dispatch('deleteUserFUNC', userID)
          },
          deleteProdcut(prodID) {
            this.$store.dispatch('deleteProductFUNC', prodID)
          }
        }
        
    }

</script>

<style scoped>
h2 {
    margin-top: 2rem;
}
h1 {
  margin-top: 2rem;
}




</style>