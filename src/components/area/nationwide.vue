<template>
<div class="body-top">
  <!-- 引入搜索框 -->
  <div @click="change()">
    <mt-search autofocus v-model="value" :result="filterResult" placeholder="输入城市名或拼音查询"></mt-search>
  </div>

  <div class="search-content" v-show="show">
    <div class="area-left">
      <ul class="province">
        <li @click="msg=msgs[index];down(index);target(item)" v-for="(item,index) in addrlist" :key="index">
          <router-link to="" :class="active==index ? 'activeClass':'' ">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <div class="area-right">
      <!-- 动态绑定子组件 -->
      <component :is="msg"></component>
    </div>
  </div>
</div>
</template>
<script>
import recommend from '../area/recommend.vue'
import guangdong from '../area/guangdong.vue'
export default {
  components: {
    // 声明子组件
    'recommend': recommend,
    'guangdong': guangdong
  },
  data() {
    return {
      value: '',
      // 当前触发的子组件
      msg: 'recommend',
      msgs: ['recommend', 'guangdong'],
      addrlist: '',
      show: true,
      // 默认选中第一个
      active: 0,
      // 默认数据
      defaultResult: [
        'Beijing',
        'shenzhen',
        'guangzhou',
        'shanghai',
        'lijiang',
        'chongqing',
        'suzhou',
        'wuhan',
        'nanjin',
        'tianjin',
        'dali',
        'shenyang',
        'hefei',
        'kunming',
        'changsha',
        'qingdao'
      ]
    }
  },
  methods: {
    change() {
      this.show = !this.show;
    },
    down(index) {
      //把index值赋给active，点击改变样式
      this.active = index;
    },
    target(item) {
      this.$store.commit('target', item)
    }
  },
  mounted() {
    this.$http.get('./data/addr.json')
      .then((response) => {
        this.addrlist = response.data.addrlist;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});

  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
}
</script>

<style>
.body-top .mint-search {
  height: 56px;
}

.body-top .mint-searchbar {
  background-color: #fff;
  font-size: 0.777rem;
  border-bottom: .5px solid #e2e2e2;
  padding: 10px 16px 12px;
}

.body-top .mint-searchbar-inner {
  background: #f2f3f7;
  border-radius: 16px;
  height: 25px;
}

.body-top .mint-searchbar-inner .mintui-search {
  font-size: 0.888rem;
  color: #777777;
}

.body-top .mint-searchbar-core {
  background: #f2f3f7;
  padding-left: 6px;
}

.body-top .mint-searchbar-cancel {
  color: #333333;
}

.search-content {
  display: flex;
}

.area-left {
  width: 25%;
  height: 90vh;
  background: #f6f6f6;
  overflow-x: hidden;
  overflow-y: auto;
}

.area-left::-webkit-scrollbar {
  display: block !important;
  height: 2px !important;
  width: 3px;
}

.area-left::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
}

.province {
  display: flex;
  width: 100%;
  height: 200%;
  flex-direction: column;
}

.province li {
  width: 100%;
  padding: 15px 0;
  color: #666;
  font-size: 0.888rem;
}

.area-right a {
  color: #666;
}

.activeClass {
  display: inline-block;
  color: #f83244;
  border-left: 3px solid #f83244;
  width: 100%;
}
</style>
<style scoped>
.area-right {
  width: 75%;
  overflow: hidden;
  font-size: 0.888rem;
}
</style>
