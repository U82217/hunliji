import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        addr:'全国',
        addr1:'',
        addr2:'',
        num:'',
        num1:'1',
        src:require('./../images/pbanner1.jpg'),
        src1:require('./../images/add1.jpg'),
        src2:require('./../images/add2.jpg'),
        color:'请选择款式 颜色',
        color1:'蓝灰色',
        color2:'豆沙色',
        size:'尺码'
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
          },
          change(state){
            state.src=state.src1;
            state.color=state.color1;
          },
          choose(state){
            state.src=state.src2;
            state.color=state.color2;
          },
          size(state,v){
            state.size=v;
          }
       }
})
