<template>
  <div class="nav">
    <div>
      <img src="../../assets/images/logo1.png" alt="" class="logo">
    </div>
    <div>
      <router-link to="/nationwide" class="area">{{this.$store.state.addr}}</router-link>
    </div>
    <div class="nav-bar" @click="showbar()"></div>
    <div @touchmove.prevent>
      <mt-popup v-model="popupVisible" position="" modal=false :lockScroll='true'>
          <navbar></navbar>
      </mt-popup>
    </div>
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
      popupVisible: false
    }

  },
  methods: {
    showbar() {
      this.popupVisible = !this.popupVisible;
    }
  }
}
</script>
<style>
.nav .v-modal {
  top: 114px;
}

.nav .mint-popup {
  width: 100%;
  position: absolute;
  top: 298%;
  transition: 0s;
}

.popup-slide-top-leave-active,
.popup-slide-top-leave-to {
  transform: translate3d(0, 0, 0);
}
</style>
<style scoped>
.nav {
  width: 100%;
  height: 54px;
  display: flex;
  padding: 0px 16px;
  align-items: center;
  background: #fff;
  position: relative;
}

.logo {
  width: 93px;
  height: 32px;
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
