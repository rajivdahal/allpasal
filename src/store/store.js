import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Store= new Vuex.Store({
  namespace:true,
  state: {
        cartitem:[
                    {compareproduct:0,
                      wishlist:0,
                      cartvalue:0
                    }
                 ],
        ispopup:[{
          value:false
        }],
        cartdata:[{
          isShowPopup:false,
          ppdata:{
              category:'',
              name:'',
              price:'',
              oldprice:'',
              img:'',
          },
          wishlistdata:null,
          wishlistpop:false
        }]

  },
  mutations: {
    gotomutant:state=>{
      state.ispopup[0].value=true
    },
    resettrue:state=>{
      state.ispopup[0].value=false
    },
    updatewishlist:state=>{
      state.cartitem[0].wishlist+=1
      let notes=localStorage.getItem("notes");
	if (notes==null) {
		var notes_repo=[];
	}
	else{
		notes_repo=JSON.parse(notes);
	}
	notes_repo[0]=state.cartitem[0].wishlist;
	localStorage.setItem('notes',JSON.stringify(notes_repo));
    },
    updatecartvalue:(state,payload)=>{
      state.cartitem[0].cartvalue=state.cartitem[0].cartvalue+payload
    },

  },
  actions: {
  },
  modules: {
  }
})
