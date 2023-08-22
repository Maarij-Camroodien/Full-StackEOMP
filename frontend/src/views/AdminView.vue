<template>
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
        computed: {
            products(){
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        }
        
    }

</script>

<style scoped>

</style>