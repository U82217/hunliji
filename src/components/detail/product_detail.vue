<template lang="html">
  <main class="pd-body">
    <div class="pdimg">
        <img src="../../assets/images/logo1.png" alt="" class="logo">
        <span>App内打开</span>
    </div>
    <div class="pd-content">
      <!-- banner -->
      <div id="pd-banner">
          <!-- swiper -->
          <swiper :options="swiperOption" v-if="pdlist.length">
               <swiper-slide v-for="(item,index) in pdlist">
                <img :src="item.src" alt="">
              </swiper-slide>
              <div class="swiper-pagination swiper" slot="pagination"></div>
              <div class="swiper-pagination swiper" slot="pagination"></div>
          </swiper>
      </div>
      <div class="pd-title">
        <h4>韩式清新显瘦百变伴娘服</h4>
        <div class="pd-price">
          <span class="pd-icon">null</span>
          <span class="true-price">￥118.00</span>
          <span class="del-price">￥138.00</span>
        </div>
        <div class="pd-deliver">
          <span> <i class="iconfont icon-gouxuan"></i> 七天无理由</span>
          <span> <i class="iconfont icon-gouxuan"></i> 72小内发货</span>
        </div>
      </div>
      <div class="mydeliver">
        <div class="set">
          <span class="set-one">配送</span>
          <span>杭州至</span>
        </div>
        <div class="set-price">
          <span class="set-one">运费</span>
          <span>6
            元</span>
        </div>
      </div>
      <!-- 店铺 -->
      <div class="store">
        <img src="../../assets/images/lo.png" alt="">
        <div class="rstore">
          <div class="rstore1">
            <span>婚礼纪出品</span>
            <span class="rbor">保</span>
          </div>
          <div class="rstore2">
            <span class="rpro">商品null</span>
            <span>关注</span>
          </div>
        </div>
        <div class="rs-btn">进店逛逛</div>
      </div>
      <!-- 评价-->
      <div class="peval">
        <div class="peval-top">
          <span>顾客评价（192）</span>
          <span class="look-all">查看全部 <i class="iconfont icon-dibudaohanglan-"></i> </span>
        </div>
        <div class="peval-bottom">
          <img src="../../assets/images/pr_user.jpg" alt="">
          <div class="pr-right">
            <div class="pr-username">
              <p>重要的破折号。</p>
              <span class="good-eval">好评</span>
              <span class="pr-date">2019.08.22</span>
            </div>
            <p>衣服上身是真的好看</p>
            <p class="pr-size">规格：C款.蓝灰色.L</p>
            <img src="../../assets/images/preval.jpg" alt="" class="primg">
          </div>
        </div>
      </div>

      <!-- 图片-->
      <ul class="product-img">
        <li v-for="(v,i) in imgs">
          <img :src="v.src" alt="">
        </li>
      </ul>
      <footer class="pr-footer">
        <router-link to="/mycar" class="pr-cart">
            <span class="iconfont icon-gouwuche prcart-icon"></span>
            <span>我的购物车</span>
            <i :class="{carnum:true,caradd:isshow}">{{this.$store.state.num}}</i>
        </router-link>
        <div class="pr-add" @click="add()">加入购物车</div>
        <div class="pr-buy">立即购买</div>
      </footer>
      <div class="pr-modal">
        <mt-popup
          v-model="popupVisible"
          position="bottom">
          <div class="pr-mone">
            <div class="prone-img">
              <img src="../../assets/images/add1.jpg" alt="">
            </div>
            <div class="mprice">
              <span class="addprice">￥118</span>
              <span class="choose">请选择款式 颜色 尺码</span>
            </div>
            <span class="addclose">X</span>
          </div>
          <div class="pr-confirm">
            <span>确定</span>
          </div>
        </mt-popup>
      </div>
    </div>

  </main>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pdlist: '',
      imgs: '',
      isshow:false,
      popupVisible: false,
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
      },
      toastInstanse:null
    }
  },
  methods:{
    add(){
       this.$store.commit('add');
       this.isshow=true;
       this.popupVisible = !this.popupVisible;
       this.toastInstanse = Toast({
        message: "成功加入购物车", //弹窗内容
        position: "bottom", //弹窗位置
        className: "mytoast" //自定义Toast 样式，需要自己提供一个类名
      });
     }
  },
  mounted() {
    this.$http.get('./data/buy.json')
      .then((response) => {
        this.pdlist = response.data.pdlist;
        this.imgs = response.data.imgs;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>
<style>
#pd-banner .swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}
.pr-modal .mint-popup{
  width: 100%;
}
.mytoast{
  margin-bottom: 50px;
  line-height: 50px;
}
</style>

<style lang="css" scoped>
.pdimg{
  display:flex;
  width: 91%;
  justify-content: space-between;
  background-color: #fff;
  padding:6px 16px;
  position: fixed;
  top: 0;
  z-index: 10;
}
.logo{
  display: block;
  width: 87px;
  height: 30px;
}
.pdimg>span{
  color: #f83244;
  font-size: 0.722rem;
  border:1px solid #f83244;
  line-height:28px;
  padding:0 8px;
}
.pd-content{
  background:#f2f3f7;
  margin-top: 44px;
}
#pd-banner img{
  width: 100%;
}
.pd-title{
  text-align: left;
  padding: 10px 16px;
  background: #fff;
}
.pd-title h4{
  font-size: 0.888rem;
  color: #333;
  padding-bottom: 8px;
}
.pd-icon{
  background: #f83244;
  color: #fff;
  padding-left: 4px;
  font-size: 0.611rem;
  border-radius: 2px 0 0 2px;
  position: relative;
}
.pd-icon::after{
  position: absolute;
  content: '';
  background: url('../../assets/images/pricon.png') no-repeat;
  width: 8px;
  height: 14px;
  background-size: 100% 100%;
  right: -8px;
  top:0;
}
.pd-price{
  display: flex;
  align-items: center;
  padding-bottom: 8px;
}
.true-price{
  color: #f83244;
  font-size: 1.111rem;
  padding:0 10px;
}
.del-price{
  font-size: 0.666rem;
  color: #aaa;
  text-decoration: line-through;
}
.pd-deliver{
  padding-top:8px;
  border-top: 1px solid #eee;
  font-size: 0.666rem;
}
.pd-deliver span{
  padding-right: 16px;
}
.pd-deliver i{
  color: #f60;
}
.mydeliver{
  margin-top: 10px;
  background: #fff;
  font-size: 0.833rem;
  color: #000000;
  padding:10px 16px;
  text-align: left;
}
.set{
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.set-price{
  padding-top: 8px;
}
.set-one{
  padding-right: 20px;
}
.store{
  background: #fff;
  padding:16px;
  margin: 10px 0;
}
.store{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.833rem;
  color: #333;
}
.store img{
  width:44px;
  height: 44px;
}
.rstore{
  width: 60%;
  text-align: left;
}
.rbor{
  background: #80d089;
  color: #fff;
  font-weight: bold;
  padding: 1px 2px;
  margin-left: 4px;
  font-size: 0.611rem;
}
.rstore2{
  margin-top: 6px;
  font-size: 0.666rem;
  color: #999;
}
.rpro{
  margin-right: 10px;
}
.rs-btn{
  color: #fff;
  background: #ffaf24;
  width: 68px;
  height: 24px;
  font-size: 0.722rem;
  line-height: 24px;
  border-radius: 12px;
  text-align: center;
}
.peval{
  background: #fff;
  margin-bottom: 10px;
  padding:16px;
}
.peval-top{
  font-size: 0.833rem;
  display: flex;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  justify-content: space-between;
}
.look-all{
  color: #f83244;
}
.peval-bottom{
  padding:16px 0;
  display: flex;
}
.peval-bottom>img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.pr-right{
  text-align: left;
  font-size: 0.722rem;
  line-height: 23px;
}
.pr-username{
  display: flex;
  justify-content: space-between;
  font-size: 0.799rem;
  color: #333;
}
.good-eval{
  color: #f83244;
}
.pr-date{
  margin-left: 84px;
  color: #999;
  font-size: 0.722rem;
}
.pr-size{
  color: #999999;
  line-height: 28px;
}
.primg{
  margin-top: 10px;
  width: 4.6rem;
  height: 4.6rem;
}
.product-img{
  padding-top: 10px;
  background: #fff;
  margin-bottom: 49px;
}
.product-img img{
  width: 100%;
  vertical-align: top;
  margin-top:0px;
}
.pr-footer{
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
}
.pr-cart{
  color: #f83244;
  background-color: #fff;
  font-size: 0.833rem;
  padding:0 6px;
  width: 33%;
  position: relative;
}
.pr-add,.pr-buy{
  color: #fff;
  font-size: 0.888rem;
  width: 32%;
}
.pr-add{
  background: #ffaf24;
}
.pr-buy{
  background: #f83244;
}
.prcart-icon{
  font-size: 1.1rem;
  font-weight: bold;
}
.carnum{
  position: absolute;
  right: 8px;
  top:5px;
  color: #fff;
}
.caradd{
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 50%;
  background-color: #f83244;
  color: #fff;
  /* display:none; */
}
.pr-mone{
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  padding:0.778rem 0.666rem;
  border-bottom:1px solid #ccc;
}
.prone-img{
  width: 100px;
  border-radius: 8px;
  overflow: hidden;
}
.prone-img img{
  width: 100%;
  height: 100%;
  margin-bottom: -5px;
}
.mprice{
  margin-left: 0.9rem;
  margin-bottom: 1.2rem;
}
.mprice span{
  display: block;
  text-align: left;
}
.addprice{
  color: #f83244;
  font-size: 0.722rem;
  font-weight: bold;
  line-height: 1.3rem;
}
.choose{
  font-size: 0.611rem;
  color: #888;
}
.addclose{
  color: #888;
  font-size: 0.666rem;
  position: absolute;
  top:0.778rem;
  right:0.666rem;
}

.pr-confirm{
  padding:2rem 1.5rem;
}
.pr-confirm span{
  display: inline-block;
  width: 100%;
  height: 2.1rem;
  line-height: 2.1rem;
  border-radius: 18px;
  color: #fff;
  font-size: 0.883rem;
  background: #f83244;
}

</style>
