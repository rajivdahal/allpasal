<template>
<div>
    <div class="main-wrapper">
        <div class="left">
            <div class="leftmost_wrapper">
                <div class="fa fa-paper-plane-o" aria-hidden="true"></div>
                <div>Sign Up To Become member</div>
            </div>
        </div>
        <div class="middle">
            <p>...and receive <strong>Rs.100 coupon for first shopping.</strong> </p>
        </div>
        <div class="right">
            <searchbarcomponent
             placeholder="enter your email address" 
             backgroundcolor="#006747" 
             class="searchbar"
              widthfortask="80px" 
             
              color="white"
              bgcoloronhover="#5c7961"
              restorebgcolor="#006747"


              />
<!-- 'color','height','width','widthfortask','heightfortask','placeholder','backgroundcolor','bgcoloronhover','restorebgcolor','signalforfooter','icon'  -->
        </div>
    </div>
   
</div>
</template>
<script>
import searchbarcomponent from './../../utility/searchbar.vue'
export default {
    
    name:'searchbar',
    components:{
       searchbarcomponent
    }
}
</script>
<style scoped>
.main-wrapper{
    height: 10vh;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -300px;
    padding: 45px 0px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.22);
    border-top: 1px solid grey;

}
.leftmost_wrapper{
    display: flex;
    font-size: 25px;

}
.leftmost_wrapper div{
    padding: 5px;
    color: #ff9a03;
    margin-left: 50px;
}
.middle{
    color: #ff9a03;
    margin-left: 30px;
}
.right{
    display: flex;
    margin-left: 40px;
}




</style>