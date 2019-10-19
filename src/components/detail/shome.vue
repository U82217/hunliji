<template lang="html">
  <main>
    <div class="tab-one">
      <div class="one-top">
          <span class="one-bor">到店礼</span>
          <span>婚礼现场巨幅海报1张</span>
          <div class="one-right">
            <span>已有59088人领取</span>
            <span class="iconfont icon-dibudaohanglan-"></span>
          </div>
      </div>
      <div class="one-bottom">
        <span class="one-bor">优惠券</span>
        <p>有3张店铺优惠券可以领取</p>
        <div class="one-right">
          <span class="iconfont icon-dibudaohanglan-"></span>
        </div>
      </div>
    </div>
    <!-- 精选套餐 -->
    <div class="tab-item">
      <div class="tab-title">
        <h4>精选套餐</h4>
        <span>全部10个套餐 <i class="iconfont icon-dibudaohanglan-"></i></span>
      </div>
      <ul class="elect-list">
        <li v-for="(v,i) in elects">
          <router-link :to="v.path" class="elect-a">
            <div class="tleft">
              <img :src="v.src" alt="">
            </div>
            <div class="tright">
              <h4>{{v.title}}</h4>
              <div class="tprices">
                <span class="tprice">{{v.price}}</span>
                <span class="collect">{{v.collect}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 问大家 -->
    <div class="tab-item">
      <div class="tab-title questions">
        <h4>问大家</h4>
        <span>全部60个回答 <i class="iconfont icon-dibudaohanglan-"></i></span>
      </div>
      <div class="question-lis">
          <p class="qbold"> <span class="qone"></span> 可以提前到店咨询参观吗？</p>
          <p> <span class="qtwo"></span> 暂无回答</p>
      </div>
    </div>
    <!--  用户评价-->
    <div class="tab-item">
      <div class="tab-title evaluate">
        <h4>用户评价（2771）</h4>
        <span>好评率100%</span>
      </div>
      <div class="eval-box">
        <ul :class="{'eval-list':hshow,'changeHeight':!hshow}" class="eval-list">
          <li v-for="(v,i) in evals"  :key="">{{v}}</li>
        </ul>
        <div class="more" @click="change()">
          <span :class="{iconfont:true,'icon-jiantou_down':isshow,'icon-jiantou_up':!isshow}"></span>
        </div>
        <div class="eval-content">
          <ul class="ec-list">
            <li v-for="(v,i) in econtent">
              <div class="eone">
                <div class="eimg1">
                  <img :src="v.src" alt="">
                </div>
                <div class="euser">
                  <p>{{v.username}}</p>
                  <ul class="euser-list">
                    <li v-for="(item,index) in v.userlist"  :key="">{{item}}</li>
                  </ul>
                </div>
              </div>
              <div class="eval-txt">
                <p>{{v.txt}}</p>
              </div>
              <div class="eimg2">
                <ul class="eimg2-list">
                  <li v-for="(item,index) in v.imgs"  :key="">
                      <img :src="item.src" alt="">
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="look">
            <span>查看全部评价</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 商家案例 -->
    <div class="tab-item">
      <div class="tab-title">
        <h4>商家案例</h4>
        <span>全部643个案例 <i class="iconfont icon-dibudaohanglan-"></i></span>
      </div>
      <ul class="elect-list">
        <li v-for="(v,i) in case1">
          <router-link :to="v.path" class="elect-a">
            <div class="tleft">
              <img :src="v.src" alt="">
            </div>
            <div class="tright">
              <h4>{{v.title}}</h4>
              <div class="tprices">
                <span class="tdate">{{v.date}}</span>
                <span class="collect">{{v.collect}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!--  商家简介-->
    <div class="tab-item">
      <div class="tab-title">
        <h4>商家简介</h4>
        <span><i class="iconfont icon-dibudaohanglan-"></i></span>
      </div>
      <div class="eval-txt">
        样片研发型婚摄品牌，专注婚纱摄影16年，以强盛的艺术创造力和精湛的技术实力立足于行业前沿，门店遍布厦门、福州、漳州、泉州、三亚、成都等城市。多数新人的选择，只差你❤~
      </div>
      <div class="eimg2-box">
        <ul class="eimg2-list">
          <li v-for="(v,i) in abouts"  :key="">
              <img :src="v.src" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--  商家动态-->
    <div class="tab-item">
      <div class="tab-title">
        <h4>商家动态</h4>
        <span>全部772条动态<i class="iconfont icon-dibudaohanglan-"></i></span>
      </div>
      <div class="eimg2-box1">
        <ul class="eimg2-list">
          <li v-for="(v,i) in smsg"  :key="">
              <img :src="v.src" alt="">
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      elects: '',
      evals: '',
      econtent: '',
      userlist: '',
      case1: '',
      abouts: '',
      smsg: '',
      isshow: true,
      hshow: true
    }
  },
  methods: {
    change() {
      this.isshow = !this.isshow;
      this.hshow = !this.hshow;
    }
  },
  mounted() {
    this.$http.get('./data/detail.json')
      .then((response) => {
        this.elects = response.data.elects;
        this.evals = response.data.evals;
        this.econtent = response.data.econtent;
        this.userlist = response.data.userlist;
        this.imgs = response.data.imgs;
        this.case1 = response.data.case1;
        this.abouts = response.data.abouts;
        this.smsg = response.data.smsg;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>
<style>
.tab-item {
  background: #fff;
  padding: 0 16px;
  margin-bottom: 10px;
}

.tab-title {
  font-size: 0.777rem;
  color: #999999;
  display: flex;
  padding: 20px 0 6px;
  justify-content: space-between;
}

.tab-title h4 {
  font-size: 0.722rem;
  color: #000000;
  font-weight: bold;
}

.tright {
  text-align: left;
}

.tright h4 {
  font-size: 0.888rem;
  color: #333333;
  font-weight: bold;
}

.elect-a,
.tprices {
  display: flex;
  justify-content: space-between;
}

.elect-a {
  padding: 14px 16px 14px 0;
  border-bottom: 1px solid #eee;
}

.tleft {
  width: 52%;
  margin-right: 10px;
}

.tleft img {
  width: 100%;
}

.tprices {
  margin-top: 12px;
}

.tprice {
  color: #f83244;
  font-size: 0.888rem;
  font-weight: bold;
}
</style>
<style scoped>
.tab-one {
  background: #fff;
  padding: 10px 16px;
  text-align: left;
  margin-bottom: 10px;
}

.one-top,
.one-bottom {
  font-size: 0.777rem;
  position: relative;
  padding: 16px 0 8px;
}

.one-top {
  padding: 8px 0 30px;
  border-bottom: 1px solid #eee;
}

.one-bor {
  color: red;
  padding: 2px;
  font-size: 10px;
  display: inline-block;
  margin: 0 10px 4px 0;
  border: 1px solid red;
}

.one-right {
  color: #999999;
  font-size: 0.722rem;
  position: absolute;
  right: 0;
  bottom: 10px;
}

.collect {
  font-size: 0.666rem;
  color: #666;
}

.questions {
  border-bottom: 1px solid #eee;
  padding-bottom: 19px;
}

.question-lis {
  font-size: 0.833rem;
  text-align: left;
  padding: 16px 0;
}

.qbold {
  font-weight: bold;
}

.qone,
.qtwo {
  display: inline-block;
  width: 14px;
  margin-right: 5px;
  height: 14px;
}

.qone {
  background: url('../../../src/assets/images/ques1.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

.qtwo {
  margin-top: 10px;
  background: url('../../../src/assets/images/ques2.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

.evaluate span {
  color: #f83244;
  font-size: 0.722rem;
}

.eval-list {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  height: 72px;
  overflow: hidden;
  padding: 10px 0;
}

.eval-list li {
  height: 26px;
  line-height: 26px;
  margin-right: 8px;
  margin-top: 10px;
  padding: 0 11px;
  background: #f9e3e7;
  border-radius: 2px;
  font-size: 0.722rem;
}

.more {
  padding-top: 4px;
  border-top: 1px solid #e7e7e7;
}

.more span {
  font-size: 1.2rem;
  color: rgb(170, 170, 170);
}

.changeHeight {
  height: 180px;
}

.ec-list>li {
  padding: 16px 0;
  border-bottom: 1px solid #e7e7e7;
}

.eone {
  display: flex;
  justify-content: space-between;
}

.eimg1 {
  width: 14%;
}

.eimg1 img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.euser {
  text-align: left;
  width: 86%;
  margin-left: 10px;
}

.euser>p {
  color: #000000;
  font-size: 0.777rem;
  margin-bottom: 6px;
}

.euser-list {
  display: flex;
  font-size: 0.666rem;
  color: #666;
  justify-content: space-between;
}

.euser-list li {
  width: 33%;
}

.euser-list li:nth-child(1) {
  width: 24%;
  margin-top: 2px;
  border-right: 2px solid #ccc;
}

.euser-list li:nth-child(2) {
  color: #f83244;
  border-right: 2px solid #ccc;
}

.eval-txt {
  margin: 13px 0;
  font-size: 0.833rem;
  color: #000000;
  line-height: 1.23rem;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.eimg2-box,
.eimg2-box1 {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  padding-right: 0px;
}

.eimg2-list {
  display: flex;
}

.eimg2-box .eimg2-list {
  width: 300%;
}

.eimg2-box1 .eimg2-list {
  width: 167%;
}

.eimg2-list li {
  width: 32.6%;
  margin-right: 2px;
  overflow: hidden;
}

.eimg2-list li img {
  width: 100%;
}

.look {
  font-size: 0.777rem;
  color: #578aff;
  padding: 10px 0 20px;
}

.tdate {
  font-size: 0.666rem;
  color: #666666;
}
</style>
