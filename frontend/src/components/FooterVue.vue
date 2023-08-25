<template>
    <div>
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-muted"> <span style="color:black;">© 2023 Company, Rabia & Ma'arij </span></p>
            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
              <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <ul class="nav col-md-4 justify-content-end">
             <span style="margin-left:1.3rem;color:black;">
                <li class="nav-item"><router-link to="/" class="nav-item">Home</router-link></li>
              </span>
               <span style="margin-left:1.3rem;color:black;">
                <li class="nav-item"><router-link to="about" class="nav-item">About</router-link></li>
              </span>
               <span style="margin-left:1.3rem;color:black;">
                <li class="nav-item"><router-link to="/products" class="nav-item">Products</router-link></li>
              </span>
               <span style="margin-left:1.3rem;color:black;">
                <li class="nav-item"><router-link to="/contact" class="nav-item">Contact</router-link></li>
              </span>
               <span style="margin-left:1.3rem;color:black;">
                <li class="nav-item"><router-link to="/admin" class="nav-item">Admin</router-link></li>
              </span>
            </ul>
          </footer>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-item {
    text-decoration: none;
    color:black;
}
p{
    color:black;
}

</style>