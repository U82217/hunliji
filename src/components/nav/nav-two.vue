<template>
<div class="nav-two">
  <div class="nav2-img">
    <img src="../../assets/images/logo1.png" alt="" class="logo">
  </div>
  <div>
    <router-link to="/nationwide" class="area">{{this.$store.state.addr}}</router-link>
  </div>
  <div class="nav2-search">
    <mt-search autofocus v-model="value" :result="filterResult" placeholder="搜索风格、元素和商家">
    </mt-search>
  </div>
  <div class="nav-bar" @click="showbar()"></div>
  <mt-popup v-model="popupVisible" position="" modal=false>
    <navbar></navbar>
  </mt-popup>
  <router-view></router-view>
</div>
</template>
<script>
import navbar from './nav-all.vue';
export default {
  components: {
    'navbar': navbar
  },
  data() {
    return {
      popupVisible: false,
      value: '',
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
    showbar() {
      this.popupVisible = !this.popupVisible;
    }
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
}
</script>
<style>
.nav-two .v-modal {
  top: 114px;
}

.nav-two .mint-popup {
  width: 100%;
  position: absolute;
  top: 298%;
  transition: 0s;
  z-index: 9000;
}

.nav-two .mint-search {
  width: 170px;
  height: 28px;
  line-height: 28px;
}

.nav-two .mint-searchbar {
  background-color: #fff;
  font-size: 0.7rem;
  border-bottom: .5px solid #e2e2e2;
  padding: 10px 0px 12px;
}

.nav-two .mint-searchbar-inner {
  background: #f2f3f7;
  height: 25px;
}

.nav-two .mint-searchbar-inner .mintui-search {
  font-size: 0.777rem;
  color: #777777;
}

.nav-two .mint-searchbar-core {
  background: #f2f3f7;
  padding-left: 6px;
}
</style>
<style scoped>
.nav-two {
  width: 100%;
  height: 54px;
  display: flex;
  padding: 0px 16px;
  align-items: center;
  background: #fff;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  border-bottom: 2px solid #e2e2e2;
}

.nav2-search {
  margin-left: 16px;
}

.nav2-img {
  width: 80px;
  height: 28px;
}

.logo {
  display: block;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  margin: auto;
}

.area {
  -webkit-flex: 1;
  flex: 1;
  display: block;
  margin-left: 10px;
  color: #333;
  font-size: 12px;
  line-height: 1;
  text-decoration: none;
  position: relative;
}

.area::before {
  content: '';
  width: 14px;
  height: 10px;
  display: inline-block;
  background: url('../../assets/images/index_sprite.png') no-repeat;
  background-position: -137px -187px;
  position: absolute;
  bottom: 0;
  right: -16px;
}

.nav-bar {
  width: 40px;
  height: 40px;
  background: url('../../assets/images/all.png') 100% no-repeat;
  background-size: 16px 16px;
  position: absolute;
  right: 48px;
}
</style>
