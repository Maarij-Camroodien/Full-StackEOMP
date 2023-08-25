<template>
    <div>
        <div>
         <h1><span style="color: black;">PRODUCTS</span></h1>
        </div>
        <div class="my-5 container" >
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" style="width: 10rem" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Filter Products
                </button>
                <div class="dropdown-menu" style="background-color:black;">
                  <div class="pricesortbtn">
                    <button class="btn" style="width: 100%" id="pricesortbtn">Sort by Name</button>
                    </div>
                    <div class="namesortbtn">
                        <button class="btn" style="width: 100%; margin-top: 1rem" id="namesortbtn">Sort by Category</button>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 3rem;font-family: 'Merriweather', serif;" v-if="products">
      <div class="car col-12 col-sm-6 col-md-4 p-2" v-for="product in products" :key="product.prodID">
                  <img :src="product.prodUrl" :alt="product.prodName" style="width:9rem;height:9rem;" loading="lazy">
                  <div class="card-body">
                      <br>
                      <h5 class="card-title">{{ product.prodName }}</h5>
                      <h5 class="card-title">{{ product.Category }}</h5>
                      <br>
                      <p class="card-text">R {{ product.amount }}</p>
                      <p class="card-text">Qty: {{ product.quantity }}</p>
                      <router-link :to=
                      "{name: 'single',
                      params: {id: product.prodID},
                      query: {
                          prodName: product.prodName,
                          Category: product.Category,
                          img: product.prodUrl,
                          amount: product.amount,
                          quantity: product.quantity
                        }
                    }" class="btn">View More</router-link>
                </div>
            </div>
        </div>
        <div class="else" v-else>
           <SpinnerVue/>
        </div>   
            </div>
        </div>   
    
</template>

<script>
import SpinnerVue from '@/components/SpinnerVue.vue';
    export default {
        components: {
       SpinnerVue
     },
        computed: {
            products(){
                return this.$store.state.products
            },
            filtercategory(){
                return this.$store.state.filtercategory
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
            this.$store.dispatch('filtercategory')
        }
        
    }
</script>

<style scoped>
* {
    color: black;
}
h1{
    font-family: 'Merriweather', serif;
    font-size: 20px;
}
h5{
    font-family: 'Merriweather', serif;
    font-size: 20px;
}
.car{
    border: 3px solid black;
    background-color: white;
}

.btn {
    color: white ;
    background: black;
}

.btn:hover {
    color: #c11111;
    background-color: white;
    border: black solid 2px;
  }

.card-text {
    display: flex;
    justify-content: center;
    align-items: center;
}

.car:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  }
.car {
    border-radius: 4px;
    box-shadow: 0 6px 10px rgba(119, 34, 34, 0.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    padding: 14px 80px 18px 36px;
    cursor: pointer;
  }


</style>