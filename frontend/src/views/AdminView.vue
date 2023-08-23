<template>
    
    <h1>Admin</h1>
<div>
 <h2>Products</h2>
 
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
                <td><button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Edit</button></td>
                <td><button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Delete</button></td>   
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form @submit.prevent="addForm">
                              <li><input type="text" v-model="prodData.prodID" name="" id=""></li>
                              <li><input type="text" v-model="prodData.prodName" name="" id=""></li>
                              <li><input type="text" v-model="prodData.quantity" name="" id=""></li>
                              <li><input type="text" v-model="prodData.amount" name="" id=""></li>
                              <li><input type="text" v-model="prodData.Category" name="" id=""></li>
                              <button type="submit">Add</button>
                             </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send message</button>
                          </div>
                        </div>
                      </div>
                    </div>
                   </tr>
          </tbody>
        </table>
      </div>
</div>
<h2>Users</h2>
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
          <td><button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Edit</button></td>
          <td><button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Delete</button></td>   
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">Recipient:</label>
                          <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                          <label for="message-text" class="col-form-label">Message:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Send message</button>
                    </div>
                  </div>
                </div>
              </div>
             </tr>
    </tbody>
  </table>
</div>
</template>

<script>

export default {
  data(){
    return{
      prodData:{
        prodID: "",
        prodName: "",
        quantity: "",
        amount: "",
        Category: ""
      }
    }
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
        methods:{
          async addForm(){
            this.$store.dispatch('addProduct', this.prodData)
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