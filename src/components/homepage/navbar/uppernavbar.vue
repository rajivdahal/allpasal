<template>
<div>
      <div class="container" id="container">
          <div class="left">
              <div class="phone cellpadding">
              <i class="fa fa-phone mr themecolor" aria-hidden="true"></i>
              <span >(+977) 9866622025, 9866622028</span>
              <span class="cellpadding">|</span>

              </div>
              <div class="email cellpadding">
              <i class="fa fa-envelope mr themecolor" aria-hidden="true"></i>
              <span>info@allpasal.com</span>
              </div>

          </div>
          <div class="right ">
              <div class="location cellpadding">
                  <i class="fa fa-map-marker mr " aria-hidden="true"></i>
                  <span>Store Location</span>
              </div>
              <span class="cellpadding">|</span>

              <div class="order-track cellpadding">
                  <i class="fa fa-truck mr " aria-hidden="true"></i>
                  <span>track your order</span>

              </div>
              <span class="cellpadding">|</span>
              <router-link to="/registerandsignin">
              <div class="register-signin cellpadding">
                  <i class="fa fa-user mr " aria-hidden="true"></i>
                  <span>register or sign in</span>

              </div>
              </router-link>
              <span class="cellpadding">|</span>

          </div>
          
        </div>  
        <div class="horizontal-line">

        </div>
    
</div>
    
</template>
<script>
export default {
    name:'uppernavbar',
   
     
        computed:{
                cartdata(){
                    return this.$store.state.cartitem
                }
        },
}
</script>
<style scoped>

.container{
    display: flex;
    justify-content: space-between;
    color:white;
    
    font-size: 13px;
    background-color: black;
    margin-top: -40px;
}
.left,.right{
    display: flex;
}

.mr{
    margin-right: 4px;
}
.ml{
    margin-right: 4px;
}
.cellpadding{
    padding:10px
}
.horizontal-line{
    width: 100%;
    height: 0.1px;
    background-color: rgba(128, 128, 128, 0.248);
}
</style>