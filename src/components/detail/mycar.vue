<template lang="html">
<main class="mycar-body">
  <div class="ctop">
    <span>开通会员红包，最高抵扣 <i>50元</i> </span>
    <span class="copen">开通会员</span>
  </div>
  <div class="goods">
    <div class="look-more">
      <span>礼服上新季</span>
      <span class="goods-active">查看活动 <i class="iconfont icon-dibudaohanglan-"></i> </span>
    </div>
    <div class="good" v-show="show" v-for="(v,i) in carlis">
      <span :class="{'iconfont':true,'icon-danxuankuang':true,'mactive':checkbox[i]}" v-model="checkbox[i]" @click.stop="change(i)"></span>
      <span v-show="false">{{a}}</span>
      <div class="goods-img">
        <img :src="v.src" alt="">
      </div>
      <div class="goods-title">
        <h4>{{v.title}}</h4>
        <span class="gsize">{{v.size}}<i class="iconfont icon-jiantou_down"></i></span>
        <span class="iconfont icon-shanchu delete" @click="mydelete(i)"></span>
        <div class="goods-pri">
          <div class="gleft">
            <span class="gleft1">￥{{v.price}}</span>
            <span class="gleft2">{{v.deprice}}</span>
          </div>
          <div class="gright">
            <span class="iconfont icon-jian del" @click="del(i)"></span>
            <input type="number" :value="v.num" class="gr-input">
            <span class="iconfont icon-jia add"  @click="add(i)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grecommond">
    <h4>为你推荐</h4>
    <goods></goods>
  </div>
  <footer class="car-footer">
    <div class="all-select">
      <span :class="{'iconfont':true,'icon-danxuankuang':true,'mactive':selectAll,'mactive':checkbox[0]&&checkbox[1]}" @click="select()"></span>
      <span>全选</span>
      <span class="sum">合计：￥{{total}}</span>
    </div>
    <div class="car-btn">去结算({{allnum}})</div>
  </footer>
</main>
</template>

<script>
import goods from './../detail/allProduct.vue';
export default {
  components: {
    'goods': goods
  },
  data() {
    return {
      show: true,
      checkbox: [false, false],
      selectAll: false,
      carlis: '',
      total: 0.0,
      allnum: 0,
      a: 0
    }
  },
  methods: {
    add(i) {
      this.carlis[i].num++;
      this.sum();
    },
    del(i) {
      var count = this.carlis[i].num;
      if (count > 1) {
        this.carlis[i].num = count - 1;
      }
      this.sum();
    },
    sum() {
      this.total = 0.0;
      this.allnum = 0;
      for (var i = 0; i < this.carlis.length; i++) {
        if (this.checkbox[i]) {
          this.total += this.carlis[i].price * this.carlis[i].num;
          this.allnum += this.carlis[i].num;
        }
      }
    },
    mydelete(i) {
      this.carlis.splice(i, 1);
      this.sum();
    },
    change(i) {
      this.checkbox[i] = !this.checkbox[i];
      this.a++;
      if (this.checkbox[i]) {
        this.sum();
      } else {
        this.carlis[i].price * this.carlis[i].num == 0;
        this.sum();
      }
    },
    select() {
      this.selectAll = !this.selectAll;
      for (var i = 0; i < this.carlis.length; i++) {
        if (this.selectAll) {
          this.checkbox[i] = true;
        } else {
          this.checkbox[i] = false;
        }
      }
      this.sum();
    }
  },
  mounted() {
    this.$http.get('./data/buy.json')
      .then((response) => {
        this.carlis = response.data.carlis;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
    this.sum();
  }
}
</script>

<style lang="css" scoped>
.mycar-body{
  background: #f2f3f7;
  padding-bottom: 80px;
}
.ctop{
  width: 92%;
  height: 50px;
  line-height: 50px;
  background:#ffc10761;
  font-size: 0.888rem;
  padding:0 16px;
  display: flex;
  justify-content: space-between;
}
.ctop i{
  color: #f83244;
}
.copen{
  font-size: 0.722rem;
  display: inline-block;
  height: 24px;
  line-height: 24px;
  margin-top: 10px;
  padding:2px 8px;
  border-radius: 4px;
  border: 1px solid #555;
}
.goods{
  background:#fff;
  margin-top: 10px;
  padding:16px;
  font-size: 0.777rem;
}
.look-more{
  display: flex;
  width: 100%;
  padding-bottom:16px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
.goods-active{
  color: #f83244;
}
.good{
  padding-top: 16px;
  display: flex;
  align-items: center;
}
.goods-img{
  width: 30%;
  border-radius: 8px;
  margin:0 10px;
  overflow: hidden;
}
.goods-img img{
  width: 100%;
}
.goods-title{
  text-align: left;
  line-height: 26px;
  margin-top: -8px;
  position: relative;
}

.gsize{
  padding:2px;
  background: #eee;
  color: #999999;
  border-radius: 2px;
}
.delete{
  position: absolute;
  right: 0;
  color: #999999;
  font-size: 1rem;
  bottom:40px;
}
.goods-pri{
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.gleft1{
  color: #f83244;
}
.gleft2{
  font-size: 0.772rem;
  text-decoration: line-through;
  color: #999999;
}
.gright{
  margin-left: 40px;
  width: 60px;
  display: flex;
  border:1px solid #eee;
  font-size: 0.833rem;
  text-align: center;
  justify-content: space-between;
}
.add,.del{
  font-weight:bold;
}
.del{
  color: #999999;
}
.gr-input{
  width: 20px;
  border:none;
  text-align: center;
}
.add{
  color: #f83244;
  font-size: 1.1rem;
}
.grecommond{
  margin-top: 10px;
  background:#fff;
  padding: 16px 0;
}
.grecommond h4{
  font-size: 1rem;
  color: #f83244;
  font-weight: bold;
  position: relative;
}
.grecommond h4::before,.grecommond h4::after{
  content: '';
  width: 50px;
  height: 1px;
  background: #f83244;
  position: absolute;
  top:10px;
}
.grecommond h4::before{
  left: 66px;
}
.grecommond h4::after{
  right: 66px;
}
.car-footer{
  position: fixed;
  width:90%;
  padding:16px;
  font-size: 0.888rem;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  background-color: #fff;
}
.sum{
  color: #f83244;
}
.car-btn{
  width: 100px;
  line-height: 30px;
  color: #fff;
  background: #f83244;
  border-radius: 20px;
}
.mactive{
  color: #f83244;
  background: #f83244;
  border-radius: 50%;
  position: relative;
}
.mactive::after{
  content: '√';
  color: #fff;
  font-size: 0.666rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
