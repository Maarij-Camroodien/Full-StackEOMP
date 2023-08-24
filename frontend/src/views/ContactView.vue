<template>
<div class="body" id="contt" style="margin-top:2rem;">
  <form action="https://formspree.io/f/meqbglnp" method="POST">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style="p-4 w-75 text-center border-5 rounded-4 fs-5 border-radius:2px solid black;"
      placeholder=""
      name="emailAdd"
      minlength="3"
      maxlength="20"
      required
      oninvalid="this.setCustomValidity('Please enter your Email Address')"
      oninput="this.setCustomValidity('')">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Username</label>
      <input type="username" class="form-control" id="exampleInputUsername" style="p-4 w-75 text-center border-5 rounded-4 fs-5"
      placeholder=""
      name="name"
      minlength="3"
      maxlength="20"
      required
      oninvalid="this.setCustomValidity('Please enter your Username')"
      oninput="this.setCustomValidity('')">
    </div>
    <div class="mb-3" style="p-4 w-75 text-center border-5 rounded-4 fs-5;">
             <textarea class="form-control w-100"  rows="9" id="message" placeholder="REASON OF INTEREST" name="message" value="" required></textarea>
    </div>
    <button type="submit" class="btn btn-dark">Submit</button>
  </form>
  
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
::placeholder {
  color: black;
}

.body {
  display: flex;
  justify-content: center;
  border-radius: 2px solid red;
}

form {
  width: 70%;
}

input {
  border: 3px solid #c11111;
}

textarea {
  border: 3px solid #c11111;
}

.btn {
  color: white ;
  background: black;
}

.btn:hover {
  color: #946e52;
  background-color: white;
  border: black solid 2px;
}
</style>