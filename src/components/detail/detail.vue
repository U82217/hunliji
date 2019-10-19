<template>
  <main>
    <!-- 导航 -->
    <mynav></mynav>
    <div class="detail-body">
      <ul class="dnav-list">
        <li v-for="(v,i) in delist">
          <router-link :to="v.path">{{v.title}}</router-link>
        </li>
      </ul>

      <div class="detail-title">
        <div class="dtop">
          <div class="dleft">
            <img src="../../../src/assets/images/detitle.jpg" alt="">
          </div>
          <div class="dright">
            <div class="de1">
              <span class="de1-title">厦门后古婚纱摄影</span>
              <span class="dicon1"></span>
              <span class="dicon2"></span>
            </div>
            <div class="de2">
              <div class="stars">
                <div class="stars-img" v-for="(item,index) in star2">
                  <img :src="item.src" alt="">
                </div>
              </div>
              <span>2761条&nbsp;&nbsp;</span>
              <span>婚纱摄影&nbsp;&nbsp;</span>
              <span>关注 11056</span>
            </div>
          </div>
        </div>
        <div class="daddr">
          <span class="addr1">思明区环岛路黄厝溪头下56号（台湾名俗村对面）</span>
          <span class="addr2">厦门</span>
        </div>
      </div>
      <div class="dtab">
        <ul class="dtab-list">
          <li @click="msg=msgs[index];change(index)" v-for="(item,index) in tabs" :key="index">
            <router-link to="" :class="active==index ? 'myadd':'' ">{{item}}</router-link>
          </li>
        </ul>
      </div>
      <div class="detail-content">
        <component :is="msg"></component>
      </div>
    </div>
    <div class="detail-footer">
      <ul class="df-left">
        <li>
          <router-link to="">
            <span class="iconfont icon-dianpu  myicon"></span>
            <span>店铺</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-informatiom_ myicon"></span>
            <span>私信</span>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-dianhua myicon"></span>
            <span>电话</span>
          </router-link>
        </li>
      </ul>
      <div class="df-right" @click="showfooter()">立即预约</div>
      <div class="dmodal">
        <mt-popup v-model="popupVisible" position="bottom">
          <div class="dmodal-top">
            <span class="dbor">到店礼</span>
            <span>婚礼现场巨幅海报1张</span>
          </div>
          <form class="dform" action="">
            <p>留下您的联系方式以便商家尽快联系您</p>
            姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：<input type="text" name="" value="" placeholder="请输入正式姓名"><br />
            联系电话：<input type="text" name="" value="" placeholder="请输入您的联系电话">
          </form>
          <div class="intime">立即预约</div>
        </mt-popup>
      </div>
    </div>
  </main>
</template>
<script>
import nav from '../nav/nav-two.vue';
import shome from './shome.vue';
import product from './product.vue';
export default {
  components: {
    'mynav': nav,
    'shome': shome,
    'product': product
  },
  data() {
    return {
      delist: [{
          title: "婚庆",
          path: "/home"
        },
        {
          title: "婚庆商家",
          path: "/find"
        },
        {
          title: "婚纱摄影商家",
          path: ""
        }
      ],
      star2: '',
      tabs: ['商家首页', '套餐10', '案例643', '评价2761'],
      msg: 'shome',
      msgs: ['shome', 'product'],
      active: 0,
      popupVisible: false
    }
  },
  methods: {
    change(index) {
      this.active = index;
    },
    showfooter() {
      this.popupVisible = !this.popupVisible;
    }
  },
  mounted() {
    this.$http.get('./data/find.json')
      .then((response) => {
        this.star2 = response.data.star2;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>
<style>
.dmodal .mint-popup {
  width: 100%;
}
</style>
<style scoped>
.myadd {
  color: #f83244;
  border-bottom: 2px solid #f83244;
}

.detail-body {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 56px;
  padding-bottom: 60px;
  overflow-x: hidden;
  background-color: #f2f3f7;
}

.dnav-list {
  text-align: left;
  padding-left: 16px;
  margin: 4px 0 10px;
  font-size: 0.666rem;
  position: relative;
  z-index: 3;
}

.dnav-list a {
  color: #999999;
}

.dnav-list li:last-child a {
  color: #333333;
}

.dnav-list li:not(:last-child)::after {
  content: '>';
  display: inline-block;
  padding: 0 6px;
  color: #999999;
}

.detail-title {
  background: #fff;
  padding-bottom: 20px;
}

.dtop {
  display: flex;
  padding: 20px 10px 20px 16px;
  color: #666;
}

.dleft {
  box-sizing: border-box;
  flex: 0 0 72px;
  display: inline-block;
  vertical-align: top;
  width: 72px;
  height: 72px;
  border-radius: 2px;
  border: 1px solid #e2e2e2;
  overflow: hidden;
  margin-right: 12px;
}

.dleft img {
  width: 100%;
}

.dright {
  text-align: left;
}

.de1-title {
  display: inline-block;
  font-size: 0.88rem;
  font-weight: bold;
  color: #333;
}

.dicon1,
.dicon2 {
  display: inline-block;
  width: 16px;
  height: 16px;
}

.dicon1 {
  background: url('../../../src/assets/images/de1.png') no-repeat;
  background-size: cover;
}

.dicon2 {
  background: url('../../../src/assets/images/de2.png') no-repeat;
  background-size: cover;
}

.stars {
  margin-right: 5px;
}

.stars-img {
  width: 11px;
  height: 11px;
  margin: 2px 1px
}

.stars-img img {
  width: 100%;
}

.de2 {
  margin-top: 30px;
}

.de2,
.stars {
  display: flex;
  font-size: 0.722rem;
}

.daddr {
  display: flex;
  width: 100%;
  padding: 20px 16px 10px;
  font-size: 0.777rem;
  color: #666;
  border-top: 1px solid #eee;
}

.addr1 {
  display: inline-block;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.addr2 {
  margin-left: 10px;
  color: #578aff;
}

.dtab-list {
  display: flex;
  justify-content: space-between;
  font-size: 0.777rem;
  padding: 0 16px;
  background: #fff;
  margin: 12px 0;
}

.dtab-list li {
  padding: 16px 0;
}

.dtab-list li a {
  padding: 16px 0;
}

.detail-footer {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  bottom: 0;
}

.df-left {
  width: 45%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.df-left span {
  display: block;
  color: #f83244;
  font-size: 0.666rem;
}

.df-right {
  width: 55%;
  background: #f83244;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 0.888rem;
}

.df-left .myicon {
  font-size: 1.2rem;
}

.dmodal {
  text-align: left;
}

.intime {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #f83244;
  width: 100%;
}

.dmodal-top {
  padding: 10px 16px;
  border-bottom: 1px solid #ccc;
  color: #000000;
  font-size: 0.888rem;
}

.dbor {
  display: inline-block;
  vertical-align: middle;
  height: 14px;
  padding: 0 1px;
  border: 1px solid #e8b45e;
  border-radius: 2px;
  font-size: 10px;
  line-height: 12px;
  color: #e8b45e;
  margin-right: 8px;
  text-align: center;
}

.dform {
  padding: 16px;
  font-size: 0.772rem;
}

.dform p {
  line-height: 100%;
  color: #999;
}

.dform input {
  width: 70%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 6px;
  line-height: 30px;
  margin-top: 14px;
}
</style>
