<template lang="html">
  <main class="buy-body">
    <div class="buy-top">
			<mt-search autofocus v-model="value" placeholder="搜索你想要的商品"></mt-search>
      <router-link to="/mycar" class="iconfont icon-gouwuche"></router-link>
    </div>
    <!-- buy banner -->
    <div id="buy-banner">
      	<!-- swiper -->
				<swiper :options="swiperOption" v-if="blist.length">
             <swiper-slide v-for="(item,index) in blist">
              <img :src="item.src" alt="">
            </swiper-slide>
            <div class="swiper-pagination swiper" slot="pagination"></div>
            <div class="swiper-pagination swiper" slot="pagination"></div>
				</swiper>
    </div>

    <ul class="buy-list1">
      <li v-for="(v,i) in blist1">
        <router-link :to="v.path">
          <img :src="v.src" alt="">
          <span>{{v.title}}</span>
        </router-link>
      </li>
    </ul>
    <div class="buy-box">
      <div class="buy-box1">
        <div class="bnav">
          <ul class="dtab-list">
            <li @click="msg=msgs[index];change(index)" v-for="(item,index) in bnav" :key="index">
  						<router-link to="" :class="active==index ? 'buyadd':'' ">{{item}}</router-link>
  					</li>
          </ul>
          <span class="bnav-right iconfont  icon-jiantou_down"></span>
        </div>
        <div class="buy-content">
            <component :is="msg"></component>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import all from './allProduct.vue';
export default {
  components: {
    'all': all,
  },
  data() {
    return {
      value: '',
      blist: '',
      blist1: '',
      bnav: ['全部', '本周新品'],
      msg: 'all',
      msgs: ['all', 'all'],
      active: 0,
      swiperOption: {
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper',
          clickable: true
        }
      }
    }
  },
  methods: {
    change(index) {
      this.active = index;
    }
  },
  mounted() {
    this.$http.get('./data/buy.json')
      .then((response) => {
        this.blist = response.data.blist;
        this.blist1 = response.data.blist1;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>
<style media="screen">
.buy-body .mint-search {
  width: 90%;
  height: 56px;
}

.buy-body .mint-searchbar {
  background-color: #fff;
  font-size: 0.777rem;
  padding: 10px 16px 12px;
}

.buy-body .mint-searchbar-inner {
  background: #f2f3f7;
  height: 25px;
}

.buy-body .mint-searchbar-inner .mintui-search {
  font-size: 0.888rem;
  color: #777777;
}

.buy-body .mint-searchbar-core {
  background: #f2f3f7;
  padding-left: 6px;
}

.buy-body .mint-searchbar-cancel {
  color: #333333;
}

#buy-banner .swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}
</style>
<style lang="css" scoped>
.buy-top{
  display: flex;
}
.buy-top a{
  color: #f83244;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 56px;
}

#buy-banner img{
  width: 100%;
}
</style>
<style scoped="">
.buy-list1 span {
  display: block;
  font-size: 0.66rem;
  text-align: center;
  margin-bottom: 16px;
  color: #666;
}

.buy-list1 {
  margin: 14px 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.buy-list1 li {
  width: 25%;
}

.buy-list1 li img {
  width: 60%;
}

.buy-box {
  background: #f2f3f7;
  padding: 10px 0 0;
}

.buy-box1 {
  background: #fff;
  padding: 10px 0px 0;
}

.bnav {
  display: flex;
  font-size: 0.777rem;
  color: #606060;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  padding: 0 16px 8px;
}

.dtab-list li {
  margin-right: 20px;
}

.buyadd {
  color: #f83244;
  padding-bottom: 8px;
  border-bottom: 2px solid #f83244;
}
</style>
