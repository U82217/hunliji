<template id="">
  <main class="home-body">
    <div class="download">
      <div class="close"></div>
      <div class="download-title">
        <div class="img-logo"></div>
        <div>
           <p>免费制作请帖、结婚分期付款</p>
           <span>一站解决备婚难题</span>
        </div>
      </div>
      <div class="download-now">
          <router-link to="/download" class="download-a">
             立即下载
          </router-link>
      </div>
    </div>

    <!-- 导航 -->
    <mynav></mynav>

    <!-- banner -->
    <div id="mybanner">
      	<!-- swiper -->
				<swiper :options="swiperOption" v-if="list.length">
             <swiper-slide v-for="(item,index) in list">
              <img :src="item.src" alt="">
            </swiper-slide>
            <div class="swiper-pagination swiper" slot="pagination"></div>
            <div class="swiper-pagination swiper" slot="pagination"></div>
				</swiper>
    </div>

    <!--首页导航条  -->
     <nav class="hnav">
       <ul class="nav-ul">
         <li v-for="(item,index) in navs">
           <router-link :to="item.path">
             <img :src="item.src" alt="">
             <span>{{item.title}}</span>
           </router-link>
         </li>
       </ul>
     </nav>

     <!-- 电子请帖等 -->
     <div class="invites">
       <div class="invite-one">
          <router-link to="">
            <img src="../assets/images/invite_paper.png" alt="">
          </router-link>
       </div>
       <div class="invite-two">
         <div>
           <router-link to="">
             <img src="../assets/images/hotel.png" alt="">
           </router-link>
         </div>
         <div>
           <router-link to="">
             <img src="../assets/images/makemv.jpg" alt="">
           </router-link>
         </div>
       </div>
     </div>

     <!-- 婚纱摄影商家 -->
      <div class="about">
        <div class="about-title">
          <h4 class="h4">{{this.$store.state.addr1+'·'}}婚纱摄影商家</h4>
          <router-link to="" class="more">更多</router-link>
        </div>

        <div class="hs-banner">
          <ul class="lis1">
            <li v-for="(item,index) in list1">
              <div class="bor">
                <img :src="item.src" alt="">
              </div>
              <div class="hs-title">{{item.title}}</div>
              <ul>
                <li v-for="(v,i) in item.bg " class="bgs" :style="item.bg"></li>
              </ul>
              <p class="comment">{{item.comments}}</p>

            </li>

          </ul>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="about">
        <div class="about-title">
          <h4 class="h4">热门城市</h4>
        </div>
        <div class="city-body">
          <div class="city">
            <div class="city-bg"></div>
            <ul class="city-list">
              <!-- <li v-for="(v,i) in citys" @click="target(i)"> -->
              <li v-for="(v,i) in citys" @click="target(v.city)">

                <router-link :to="v.path">{{v.city}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    <!-- 结婚工具 -->
      <div class="about">
        <div class="about-title">
          <h4 class="h4">结婚工具</h4>
        </div>
        <div class="hs-banner tool">
          <ul class="lis1 lis2">
            <li v-for="(item,index) in list2">
              <p class="to-title">{{item.title}}</p>
              <span class="comment to-des">{{item.des}}</span>
              <i class="to-icon" :style="item.bg"></i>
            </li>

          </ul>
        </div>

      </div>

      <!--结婚用品 -->
      <div class="about">
        <div class="about-title">
          <h4 class="h4">结婚用品</h4>
          <router-link to="" class="more">更多</router-link>
        </div>
         <div class="invites use">
            <div class="invite-two">
                <div class="homes">
                  <router-link to="">
                    <img src="../assets/images/use1.png" alt="">
                  </router-link>
                </div>
                <div class="shoes">
                  <router-link to="">
                    <img src="../assets/images/use2.png" alt="">
                  </router-link>
                </div>
            </div>
            <div class="invite-one">
                <router-link to="">
                  <img src="../assets/images/use3.png" alt="">
                </router-link>
             </div>
         </div>
      </div>
      <!-- 结婚美图 -->
      <div class="about">
        <div class="about-title">
          <h4 class="h4">结婚美图</h4>
          <router-link to="" class="more">更多</router-link>
        </div>
        <div class="photos">
          <router-link to="" class="photo1">
              <div class="photo-left">
                <img src="../assets/images/ph1.jpg" alt="">
              </div>
              <div class="photo-right">
                <p>水下婚纱照</p>
                <span class="arrow"></span>
              </div>
          </router-link>
          <ul class="photo-lis">
            <li v-for="(v,i) in photos">
              <router-link to="">
                <img :src="v.src" alt="">
                <span>{{v.title}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- 攻略 -->
      <div class="about">
        <div class="about-title">
          <h4 class="h4">攻略</h4>
          <router-link to="" class="more">更多</router-link>
        </div>
          <ul class="guide-lis">
            <li v-for="(v,i) in guides">
              <router-link to="" class="guide-a">
                <div class="guide-img">
                  <img :src="v.src" alt="">
                </div>
                <div class="guide-title">
                  <h4 class="guide-h4">{{v.title}}</h4>
                  <div class="guide-bottom">
                    <span class="guide-time">{{v.time}}</span>
                    <span class="guide-go" :style="v.bg"></span>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
      </div>

      <footer class="footer">
        <div class="foot-btn">
            <router-link to="/login" class="hbtn login-now">立即登录</router-link>
            <router-link to="" class="hbtn question">常见问题</router-link>
        </div>
        <p class="foot-copyright">浙ICP备13004478号 © 杭州火烧云科技有限公司</p>
        <p class="phonenumer">客服热线：400-159-9090</p>
      </footer>

  </main>
</template>
<script type="text/javascript">
// 引入组件，子模块，导航
  import nav from './nav/nav-one.vue';
  export default{
    components:{
			'mynav':nav
    },
    data() {
      return {
        swiperOption: {
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper',
            clickable: true
          }
        },
        list:'',
        citys:'',
        list2:'',
        photos:'',
        guides:'',
        navs:'',
        list1:''
      }
    },
    methods:{
      target(v){
         this.$store.commit('target',v)
      }
    },
    mounted(){
			this.$http.get('./data/home.json')
			.then((response)=>{
      this.list=response.data.pros;
      this.navs=response.data.navs;
      this.citys=response.data.citys;
      this.list1=response.data.list1;
      this.list2=response.data.list2;
      this.photos=response.data.photos;
      this.guides=response.data.guides;
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
      });
      $('.close').click(function(){
        $('.download').remove();
        $('.home-body').css('margin-top','0px');
      })
    }

  }
</script>
<style media="screen">
    #mybanner .swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        margin:0 2px;
        display: inline-block;
        border-radius: 2px;
        background: #fff;
        opacity: 0.5;
    }
    #mybanner .swiper-pagination-bullet-active{
      width:14px;
      height: 4px;
      border-radius: 2px;
      opacity: 1;
    }
</style>

<style scoped>
  .home-body{
    margin-top: 60px;
  }
  .download{
      position: fixed;
      top:0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 60px;
      display: flex;
      z-index: 5000;
      align-items: center;
      background: #222;
      color: #ffffff;
      padding:0px 10px;
    }
    .close{
     margin-right: 10px;
      width:16px;
      height: 16px;
      background: url('../assets/images/index_del.png') 0 0 no-repeat;
      background-size: contain;
    }
    .download-title{
      display: flex;
      -webkit-box-flex: 1;
      flex: 1;

    }
    .download-title p{
      font-size: 0.77rem;
      font-weight: 700;
    }
    .download-title span{
      font-size: 0.66rem;
      margin-left: -80px;
    }
    .img-logo{
      width: 36px;
      height: 36px;
      display: block;
      margin-right: 8px;
      background: url('../assets/images/logo.png') 0 0 no-repeat;
      background-size: contain;
    }
    .download-a{
      color:#fff;
      text-decoration: none;
      width:80px;
      height: 30px;
      border-radius: 15px;
      line-height: 30px;
      text-align: center;
      margin-right: 20px;
      display:block;
      font-size: 0.72rem;
      background: #f83244;
    }
    #mybanner{
      padding:0px 16px;
    }

    #mybanner img{
      width: 100%;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
    }
    .swiper-container{
      position: relative;
    }
    #mybanner .swiper-container::after{
      content: '';
      display: block;
      width:100%;
      height: 29px;
      background: url('../assets/images/quxian.png') 0 0 no-repeat;
      background-size: contain;
      position:absolute;
      bottom: 0px;
      left: 0px;
      z-index: 1;
    }
    .hnav{
      padding:0 10px;
      margin:14px 0 0;
    }
    .hnav span{
      display: block;
      font-size: 0.66rem;
      text-align: center;
      margin-bottom: 10px;
      margin-top: -7px;
    }
    .nav-ul{
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
    }
    .nav-ul li{
     width:20%;
    }
    .nav-ul li img{
      width: 90%;
    }
    .invites{
      display: flex;
      flex: wrap;
      justify-content: space-between;
      padding:0 16px;
      margin:19px 0 0;
    }
    .invite-one{
      width: 50%;
      margin-right: 6px;
      padding-bottom: 50%;
      height: 0;
    }
    .invites img{
      width:100%;
      border-radius: 15px;
    }
    .invite-two{
      width: 50%;
    }

    .about{
      margin-top: 1.4rem;
    }
    .about-title{
      display: flex;
      justify-content: space-between;
      padding: 0 16px 8px 16px;
    }
    .h4{
      font-size: 1.11rem;
      color: #000;
      font-weight: 700;
    }
    .more{
      font-size: 0.77rem;
      color: #999;
    }

    .hs-banner{
      width:100%;
      overflow: hidden;
      overflow-x: auto;
    }
   .hs-banner .lis1{
      width:244%;
      display: flex;
      padding:0 16px;
      justify-content: space-between;
      align-items: center;
   }

  .hs-banner .lis1>li{
    width: 30%;
    padding:20px 14px;
    border-radius: 15px;
    box-shadow: 2px 0px 12px 0 rgba(0,0,0,.08);
    margin-right: 10px;
    box-sizing: border-box;
  }
    .hs-banner img{
      width: 90%;
    }
    .hs-title{
        font-size: 0.83rem;
        color: #000;
        font-weight: bold;
        max-width:6.11rem;
        margin: 14px auto 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .comment{
      font-size:0.666rem;
      color: #666;
    }
    .bor{
      width: 60px;
      height: 60px;
      margin: 10px auto 0;
      border-radius: 50%;
      overflow: hidden;
      background: #f6f6f7;
      border:1px solid #e7e7e7;
    }
    .bgs{
      width: 11px;
      height: 11px;
    }
    .city{
      margin:0 0.722rem;
      padding-bottom: 1.1rem;
      position: relative;
    }
    .city-bg{
      width: 100%;
      height: 0;
      padding-top: 31.1953%;
      border-radius: 15px;
      overflow: hidden;
      background: url("../assets/images/citybg.png") 0 0 no-repeat;
      background-size: 100% 100%;
    }
    .city-list{
      padding:14px 16px;
      margin: -5rem 1.11rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0px 2px 12px 0 rgba(0,0,0,.18);
      box-sizing: border-box;
    }
    .city-list li{
      width: 25%;
      padding:8px 0;
       font-size: 0.83rem;
    }
    .city-list li:last-child{
      position: relative;
    }
    .city-list li:last-child a::after{
        content: '';
        width: 6px;
        height: 14px;
        position: absolute;
        top:50%;
        right:9px;
        transform: translateY(-40%);
        background: url('../assets/images/index_sprite.png') -40px -188px no-repeat;
    }
    .tool .lis2{
      position: relative;
      width: 208%;
      margin-top: 5px;
    }
    .tool .lis2 li{
      width: 19%;
      text-align: left;
      padding:15px 13px;
      position: relative;
    }
    .to-title{
        font-size: 0.888rem;
        color: #000;
        margin-bottom: 3px;
        font-weight: bold;
    }
    .to-icon{
      position: absolute;
      width: 22px;
      height: 22px;
      right: 10px;
      bottom:9px;
    }

    .use img{
      border-radius: 0px;
    }
    .homes img{
      border-top-left-radius: 15px;
    }
    .shoes img{
      border-bottom-left-radius: 15px;
    }
    .use .invite-one img{
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }
    .use .invite-one{
      margin-right: 0px;
    }
    .shoes{
      margin-top: -4px;
    }
    .photos{
      margin:20px 16px 0;
    }
    .photo1{
      display: flex;
    }
     .photo-left{
       width:11.33rem;
       height: 8rem;
       border-radius: 15px;
       overflow: hidden;
     }
     .photo-left img{
       width: 100%;
       height: 100%;
     }
     .photo-right{
        font-size: 0.96rem;
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        margin-top: 16px;
        justify-content: center;
     }
     .arrow,.guide-go{
       width: 28px;
       height: 28px;
       border-radius: 50%;
       box-shadow: 0 2px 12px 0 rgba(248,50,68,.2);
     }
     .arrow{
       background: #f83244 url('../assets/images/ph_arrow.png') 0 0 no-repeat;
       margin: 1.22rem 0 0;
       background-size: contain;
     }
     .photo-lis{
       width:100%;
       margin:20px 0;
       display: flex;
       justify-content: space-between;
     }
     .photo-lis li{
       width: 31%;
       border-radius: 15px;
       overflow: hidden;
       padding:0 0 10px;
       background:#fff;
       box-shadow: 0 2px 12px 0 rgba(0,0,0,.08);
     }
     .photo-lis li img{
       width: 100%;
       margin-bottom: 3px;
     }
     .photo-lis span{
       font-size: 0.666px;
     }

     /* 攻略 */
     .guide-lis{
       display: flex;
       flex-direction: column;
       margin: 0 16px;
       padding-bottom: 37px;
     }
     .guide-a{
       display: flex;
        margin:12px 0;
     }
     .guide-img{
       width: 43%;
       height: 110px;
       border-radius: 10px 0 0 10px;
       overflow: hidden;
       background:#ccc;
     }
     .guide-img img{
       width: 100%;
       height: 100%;
     }
     .guide-title{
       width: 56%;
       padding:16px 0 26px 0px;
       text-align: left;
       background: url('../assets/images/glbg.png' ) 0 0 repeat-x;
       background-size: 10px 100%;
       position: relative;
     }
     .guide-title::before{
       content: '';
       position: absolute;
       width: 44px;
       height: 100%;
       background: url('../assets/images/glbg1.png') 0 0 no-repeat;
       background-size: cover;
       top: -8px;
       left: -44px;
     }
     .guide-h4{
       width: 90%;
       height: 46px;
       line-height: 1.277rem;
       font-size: 0.94rem;
       color: #000;
       font-weight: bold;
       overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
     }
     .guide-bottom{
       margin-top: 12px;
       position: relative;

     }
     .guide-time{
       font-size: 0.722rem;
       color: #666;
       line-height: 1;
     }
     .guide-go{
       position: absolute;
       right: 15px
     }
     /* footer */
     .footer{
        padding: 30px 0;
        background: #f2f3f6;
      }
      .foot-btn{
        display: flex;
        justify-content: center;
      }
      .hbtn{
        width: 100px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        font-size: 0.777rem;
        text-align: center;
        margin:0 10px;
      }
      .login-now{
        color: #fff;
        background: #f83244;
        box-shadow:  0 2px 12px 0 rgba(248,50,68,.2);
      }
      .question{
        color: #f83244;
        background: #fff;
        box-shadow:  0 2px 12px 0 rgba(0,0,0,.08);
      }
      .foot-copyright,.phonenumer{
        font-size: 0.666rem;
        color: #999;
      }
      .foot-copyright{
        margin-top: 20px;
      }
      .phonenumer{
        margin-top: 10px;
      }

</style>
