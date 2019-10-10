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
          // var add=['上海','济南','武汉','厦门','大连','长沙','重庆','合肥','三亚','丽江','北京']
          //  state.addr=add[i]
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
