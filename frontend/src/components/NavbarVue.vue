<template>
    <div>
        <Navbar class="navbar navbar-expand-lg" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <form class="d-flex" role="search">
                        <i class="bi bi-search" style="margin-top:0.5rem;color:white;"><span style="margin-left:1.3rem;color:white;"><input type="text" placeholder="SEARCH " style="background-color:black; color: white"></span></i>
                    </form>
                    </ul>
                <img src="https://i.postimg.cc/KjZXvPqZ/Screenshot-2023-08-21-124610.png" style="width:10rem;" alt="logo">
                </div>
        </Navbar>

        <nav class="navbar navbar-expand-lg" id="nav1">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link"><span style="color:black;">HOME</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/about" class="nav-link"><span style="margin-left:0.3rem;color:black;">ABOUT</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/products" class="nav-link"><span style="margin-left:1.3rem;color:black;">PRODUCTS</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/contact" class="nav-link"><span style="margin-left:1.3rem;color:black;">CONTACT</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/admin" class="nav-link"><span style="margin-left:1.3rem;color:black;">ADMIN</span></router-link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
    
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#navbar{
    background-color: black;
}
h1{
    font-family: 'Merriweather', serif;}
li{
font-family: 'Merriweather', serif;
}

.nav-item{
    text-align: center;

}
::placeholder{
    color: white;
    
}

.nav-link {
    text-decoration: none;
}


#nav1{
    background-color: white;
    font-family: 'Merriweather', serif;

}

p{
    color: red;
}

</style>