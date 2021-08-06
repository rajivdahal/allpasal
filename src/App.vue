<template>
  <div id="app">
    <div class="navbaar">
      <navbar/>
    </div>
    
   <router-view></router-view>
   <footercomponent/>

   
    
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import navbar from './components/homepage/navbar/navbar.vue'
import footercomponent from './components/homepage/footer/footer.vue'




export default {
  name: 'app',
  components:{navbar,footercomponent}
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgba(0, 103, 70, 0.823) ;
 
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  overflow: hidden;
  
}
.themecolor{
    color: #E94B3CFF;
}
</style>
