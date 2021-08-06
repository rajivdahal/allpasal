<template>
<div>
    <div class="container">
        <router-link to="/">
    <div class="left">
        <div class="logo">
            <img src="@/assets/lg.jpg">
        </div>
    </div>
    </router-link>
    <div class="middle">
        <searchbarcomponent 
        color="#d65d3c" 
        height="40"
         width="300%" 
         widthfortask="300px"
          heightfortask="40"
           placeholder="search something"
            backgroundcolor=#006747FF
             bgcoloronhover="#5c7961"
              restorebgcolor='#006747FF'
              icon="fa fa-search"
              />
    </div>
    <div class="right">
            <div class="dropdown" v-on:click="display">
                <p>BECOME A PARTNER</p>
                <div></div>
            </div>
            <div class="dropdown-items" v-if="displayproperty">
                <div>
                 <i class="fa fa-user" aria-hidden="true"></i>
                 <span>Store</span>
                </div>
                
                <div>
                 <i class="fa fa-user" aria-hidden="true"></i>
                 <span>Manager</span>
                </div>
                <div>
                 <i class="fa fa-user" aria-hidden="true"></i>
                 <span>User</span>
                </div>

            </div>
    </div>
    </div>
</div>

    
</template>
<script>
import searchbarcomponent from './../../utility/searchbar'

export default {
    name:'lowernavbar',
    components:{
        searchbarcomponent,
    },
    data(){
        return{
            displayproperty:false,
            store:null,
            manager:null,
            user:null
        }
    },
    methods:{
        display(){
            this.displayproperty=!this.displayproperty
        },
        
    }
}
</script>
<style scoped>
.logo img{
    height: 40px;
    position: relative;
    left: 20%;
    
}
.container{
    display: flex;
    justify-content: space-around;
    margin-top: 0px;
    height: 100px;
}
.middle{
    position: relative;
    left: 2%;
    
}
.dropdown div{
    width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 8px solid white;
    margin-left: 20px;
}
.dropdown{
    display: flex;
    background-color: #006747FF;
    color:white;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 15px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}
.dropdown-items div{
    display: flex;
    background-color: black;
    color:white;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
    transition: 0.2s;
    cursor: pointer;
    height: 30px;
}
.dropdown-items div:hover{
    background-color:#006747FF ;
}
.dropdown-items {
    transition: 1s;
}
.dropdown[data-v-39a82733] {
    display: flex;
    background-color: #006747FF;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 0px;
    padding: 20px;
    height: 20px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}




</style>