<template>
  <div class="home">
      <div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <img src="https://i.postimg.cc/q7x6wMpD/wallpaperflare-com-wallpaper.jpg" class="col-sm-6 animate__animated animate__fadeInDown" alt="img1" loading="lazy">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s">SPICES</h2>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s">Herbs</h2>
                <img src="https://i.postimg.cc/Znnm9ZbM/wallpaperflare-com-wallpaper-1.jpg" class="col-sm-6 animate__animated animate__fadeInDown" alt="img2" loading="lazy">
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <img src="https://i.postimg.cc/x8BF5SQ8/wallpaperflare-com-wallpaper-2.jpg" class="col-sm-6 d-block animate__animated animate__fadeInDown" alt="img3" loading="lazy">
                <h2 class="col-md animate__animated animate__fadeInDown animate__delay-1s">Sauces</h2>
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
  components: {
  }
}
</script>
<style scoped>
li{
  font-family: 'Merriweather', serif;
  }

.carousel-item {
  background-color: black;
}

h2 {
  color: white;
}

</style>
