import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        addr:'全国',
        addr1:'',
        addr2:'',
        num:'',
        num1:'1'
        },
        mutations:{
        target(state,v){
          state.addr=v;
          state.addr1=v;
          state.addr2=state.addr2+v;
        },
        add(state){
          state.num++;
          state.num1++;
        },
        del(state){
          if(state.num>1){
            state.num--;
          }
        }


       }
})
