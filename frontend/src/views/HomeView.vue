<template>
  <div class="home">
      <div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <img src="https://i.postimg.cc/q7x6wMpD/wallpaperflare-com-wallpaper.jpg" class="col-sm-6 animate__animated animate__fadeInDown" alt="img1" loading="lazy">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s"><span style="color:black">SPICES</span>
                  <span style=""><p>Step into a world of flavor and aroma at The Spicery - your ultimate destination for the finest and most exquisite spices from around the globe. Explore our vibrant collection and elevate your culinary journey to new heights!</p><a class="btn" href="/products" role="button ">View Products</a></span>
                  </h2>
              </div>
            </div>
            <div class="carousel-item" id="caral1">
              <div class="row">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s"> <span style="color:black">HERBS</span> <span><p>Discover a captivating array of handpicked herbs at The Spicery, meticulously chosen to infuse your cooking with unparalleled taste. Elevate your culinary creations with our thoughtfully curated herb selection.</p></span></h2>
                <img src="https://i.postimg.cc/Znnm9ZbM/wallpaperflare-com-wallpaper-1.jpg" class="col-sm-6 animate__animated animate__fadeInDown" alt="img2" loading="lazy">
              </div>
            </div>
            <div class="carousel-item" id="caral2">
              <div class="row">
                <img src="https://i.postimg.cc/x8BF5SQ8/wallpaperflare-com-wallpaper-2.jpg" class="col-sm-6 d-block animate__animated animate__fadeInDown" alt="img3" loading="lazy">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s"> <span style="color:black">SAUCES</span> <span><p>
                  Dive into a world of saucy delight at The Spicery, where our wide range of sauces transforms meals into extraordinary culinary experiences. From velvety classics to daringly bold creations, our sauces are crafted to add the perfect touch of flavor to your dishes.</p></span></h2>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
</template>

//https://i.postimg.cc/qq05fsqr/In-Shot-20230821-145907816.jpg

<script>


export default {
 }
</script>
<style scoped>
li{
  font-family: 'DM Serif Display', serif;
  }

.carousel-item {
  background-color:#946e52;
}
#caral1{
  background-color: #23180f;
}
#caral2{
  background-color: #891604;
}

h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  margin-top:6rem;
  color: white;
}
p{
  margin-left:2rem;
  width: 90%;
  margin-top:4rem;
}

.btn {
  color: white ;
  background: black;
}

.btn:hover {
  color: #c11111;
  background-color: white;
}

</style>
