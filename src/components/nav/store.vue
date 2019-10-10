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
        <ul class="place">
            <li class="place-one">
                <h3>国内热门旅拍地</h3>
                <ul class="country-list">
                    <li  v-for="(v,i) in country">
                        <img :src="v.src" alt="">
                        <p>{{v.title}}</p>
                    </li>
                </ul>
            </li>
            <li class="place-two palce-top">
                <h3>海外热门旅拍地</h3>
                <ul class="forign-list">
                    <li v-for="(v,i) in forign">
                        <img :src="v.src" alt="">
                        <p>{{v.title}}</p>
                    </li>
                </ul>
            </li>
            <li class="place-three palce-top">
                <h3>人气旅拍商家</h3>
                <div class="hot-wrap">
                    <ul class="hot-list">
                        <li v-for="(item,index) in hotlis">
                            <img :src="item.src" alt="">
                            <div class="hs-title">{{item.title}}</div>
                            <ul>
                                <li v-for="(v,i) in item.bg " class="bgs" :style="item.bg"></li>
                            </ul>
                            <p class="comment">{{item.comments}}</p>
                            <span class="hot-icon"></span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="place-four palce-top">
                <h3>帮你选</h3>
                <div class="special">
                    <ul class="spe-lis">
                        <li v-for="(v,i) in slist"  @click="change(i)" :class="{active:cur==i}">
                            <h4 class="htitle">{{v.htitle}}</h4>
                            <span class="stitle">{{v.stitle}}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul class="help-list">
                    <li v-for="(v,i) in helplis">
                        <div class="himg">
                            <img :src="v.src" alt="">
                            <span class="play"></span>
                        </div>
                        <h4 class="mh4">{{v.title}}</h4>
                        <div class="htex">
                            <div class="hleft">
                                <span class="span1">{{v.span1}}</span>
                                <span class="span2">{{v.span2}}</span>
                                <span class="hbg"></span>
                            </div>
                            <span class="hprice">{{v.hprice}}</span>
                        </div>
                    </li>
                </ul>
    </main>
</template>


<script>
import nav from './nav-one.vue';
export default{
    components:{
        'mynav':nav
    },
    data(){
        return{
            country:'',
            forign:'',
            hotlis:'',
            slist:'',
            helplis:'',
            cur: 0,
        }
    },
    methods:{
        change(i) {
            this.cur = i;
        }
    },
   mounted() {
    this.$http.get('./data/products.json')
      .then((response) => {
        this.country = response.data.country;
        this.forign = response.data.forign;
        this.hotlis = response.data.hotlis;
        this.slist = response.data.slist;
        this.helplis = response.data.helplis;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
      $('.close').click(function(){
        $('.download').remove();
        $('.home-body').css('margin-top','0px');
      })
  }
}
</script>

<style lang="css" scoped>
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
      z-index: 10;
      align-items: center;
      background: #222;
      color: #ffffff;
      padding:0px 10px;
    }
    .close{
     margin-right: 10px;
      width:16px;
      height: 16px;
      background: url('../../assets/images/index_del.png') 0 0 no-repeat;
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
      background: url('../../assets/images/logo.png') 0 0 no-repeat;
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

    .place{
        border-top:1px solid #eee;
    }
    .place-one{
        text-align: left;
        padding:20px 16px 0;
    }
    .place h3{
        font-weight: bold;
        color: #000000;
        font-size: 1.11rem;
        position: relative;
    }
    .place h3::after{
        content: '';
        width:3px;
        height: 1rem;
        background:#f83244;
        position: absolute;
        left:-16px;
        top: 4px;
    }
    .country-list li{
        width: 30%;
        margin-top: 16px;
        font-size: 0.833rem;
    }
    .country-list li img{
        width: 86%;
        margin-bottom: 5px;
        border-radius: 10px;
    }
    .palce-top{
        margin-top: 30px;
        padding-left: 16px;
        text-align: left;
    }
    
    .place-two li{
        width: 25%;
        margin-top: 16px;
        font-size: 0.833rem;
        text-align: left;
    }
    .place-two li img{
        width: 90%;
        border-radius: 10px;
        margin-bottom: 5px;
    }
    .hot-wrap{
      width:100%;
      overflow: hidden;
      text-align: center;
      overflow-x: auto;
    }
   .hot-list{
      width:160%;
      display: flex;
      padding:0 16px 0 0;
      justify-content: space-between;
      align-items: center;
   }

   .hot-list>li{
    width: 30%;
    padding:20px 0;
    border-radius: 15px;
    box-shadow: 2px 0px 12px 0 rgba(0,0,0,.08);
    margin:16px 4px 0 0;
    box-sizing: border-box;
    position: relative;
  }
    .hot-list img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #e7e7e7;
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
    .bgs{
      width: 11px;
      height: 11px;
    }
    .hot-icon{
        position: absolute;
        background: url('../../../data/images/hoticon.png') no-repeat;
        width: 52px;
        height:18px;
        background-size: contain;
        top: 0;
        left: 0;
    }
    .special{
      width:100%;
      overflow: hidden;
      text-align: center;
      margin-top: 10px;
      overflow-x: auto;
    }
    .spe-lis{
      width:230%;
      display: flex;
      padding:0 16px 0 0;
      align-items: center;
    }
    .spe-lis li{
        display: flex;
        height: 55px;
        margin-right: 20px;
        flex-direction: column;
        justify-content: center;
    }
    .htitle{
        font-size:0.888rem;
        font-weight: bold;
    }
    .stitle{
        font-size: 0.611rem;
        color:#666;
    }
    .spe-lis li.active{
        color:#fff ;
        padding:0px 12px;
        background: #f83244;
        border-radius: 10px;
    }
    .help-list{
        padding: 10px 16px;
    }
    .help-list li{
        margin-bottom:24px;
    }
    .himg{
        width: 100%; 
        border-radius: 15px;
        overflow: hidden;
        position: relative;
    }
    .himg img{
        width: 100%;
        margin-bottom: -10px;
    }
    .play{
        position: absolute;
        width:16px;
        height: 14px;
        right: 12px;
        bottom:8px;
        background:url('../../../data/images/play.png') no-repeat;
        background-size: contain;
    }
    .mh4{
        max-width: 96%;
        overflow: hidden;
        margin-top: 12px;
        font-size: 0.944rem;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .htex{
        display: flex;
        margin-top: 4px;
        justify-content: space-between;
    }
    .span1,.span2{
        font-size: 0.722rem;
        color: #666;
        position: relative;
    }
    .span1::after{
        content: '';
        width:1px;
        height: 13px;
        background: #ccc;
        position: absolute;
        top: 0;
        right: -3px;
    }
    .hprice{
        color: #f83244;
        font-weight: bold;
        font-size: 1.11rem;
    }
    .hbg{
        display: inline-block;
        width: 58px;
        height: 16px;
        background:url('../../../data/images/hicon.png') no-repeat;
        background-size: contain;
        margin-top:2px;
    }
</style>
