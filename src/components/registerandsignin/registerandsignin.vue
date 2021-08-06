<template>
<div>
  <div class="container">
      <div class="left_container">
          <div class="title"> <strong>Create New Account</strong></div>
          <div class="createacc"> <strong><p>create your own account</p></strong>   </div>
<form action="/">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="Rajiv"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
   <label for="email">email address</label><br>
  <input type="email" id="email" name="email" value="rajivdahal2@gmail.com"><br><br>
   <label for="password">password</label><br>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Register" class="submit">
</form> 


      </div>
      <div class="middlearrow"></div>
      <div class="right_container">
          <div class="title"> <strong>Log in</strong></div>
          <div class="createacc">  <strong> <p>logiin your account</p> </strong> </div>
<form action="/">
   <label for="email">email address</label><br>
  <input type="email" id="email" name="email" value="rajivdahal2@gmail.com"><br><br>
   <label for="password">password</label><br>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="sign in" class="submit">
</form> 

      </div>
  </div>
</div>
    
</template>
<script>
export default {
    name:'registerandsignin',
    
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    min-height: 120vh;
}
.title{
    font-size: 25px;
    color: white;
    padding: 10px;
    border-bottom: 1px solid gray;

}
input{
    height: 45px;
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
}
input:focus{
    border: 1px solid gray;
}
.middlearrow{
    height: 70vh;
    width: 1px;
    background-color: rgba(128, 128, 128, 0.22);
}
.left_container{
    margin-right: 40px;
}
form{
    margin-top: 30px;
}
.left_container{
    width: 500px;
}
.right_container{
    width: 500px;
}
label{
    position: relative;
    right: 90px;
    margin-bottom: 10px;
    font-weight: 600;
}
.submit{
    background-color: black;
    color: white;
    transition: 0.5s;
    font-weight: 600;
    width: 100px;
}
.submit:hover{
     background-color: rgba(0, 0, 0, 0.33);
     color: black;
}

</style>