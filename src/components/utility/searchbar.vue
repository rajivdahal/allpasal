<template>
    <div>
        <!-- <div class="input-and-task" v-bind:style="{height:height,width:width,backgroundColor:color}">
            <input class="input" type="text">
            <div ></div>
        </div> -->
        <form>
        <div class="input">
        <input :placeholder="placeholder" v-bind:style="{height:height+'px',width:width}">
        <div class="task" v-bind:style="{height:heightfortask+'px',width:widthfortask,backgroundColor:backgroundcolor}" @mouseover="changebg"  @mouseleave="togglebg">
           <div  :class="icon">
               <div v-if="!icon" class="subscribe"> <strong>subscribe</strong> </div>
           </div>
           
        </div>
        </div>
        </form>
        
        
    </div>
</template>
<script>
export default {
    name:'searchbarcomponent',
    props:['color','height','width','widthfortask','heightfortask','placeholder','backgroundcolor','bgcoloronhover','restorebgcolor','signalforfooter','icon'],
    methods:{
        changebg(){
            this.backgroundcolor=this.bgcoloronhover
        },
        togglebg(){
            this.backgroundcolor=this.restorebgcolor
        }
    },

    data(){
        return{
          navbariconshowstate:false,
          footericonshowstate:false,
          subscribe:false
        }
    },

}
</script>
<style scoped>
.input-and-task{
    display: flex;
    border-radius: 20px;
}
.input{
    display: flex;
}
.input input{
border-radius: 20px 0px 0px 20px;
    border:1px solid #d65d3c;
     outline: none;
}
.input input::placeholder{
    padding-left: 20px;
}
.task{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 20px 20px 0px;
    transition: 0.3s;
    
}
.task:hover{
    cursor: pointer;
    background-color: rgba(140, 31, 218, 0.611);

}

.task i{
    font-size: 30px;
    color:white
}
element.style {
    
    width: 300%;
}
.input input[data-v-1c4510a8] {
    border-radius: 20px 0px 0px 20px;
    border: 1px solid #d65d3c;
    outline: none;
    background-color: white;
    height: 50px;
}
.subscribe{
    z-index:10;
    color: black;

}


</style>