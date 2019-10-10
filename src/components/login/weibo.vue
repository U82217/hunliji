<template>
	<main class="login-content">
		<div class="text">
      <h4>微博登录</h4>
      <div class="photo">
        <div class="img1">
          <span class="iconfont icon-weibo mywb"></span>
          <p>微博</p>
        </div>
        <span class="iconfont icon-jiantou_zuoyouqiehuan_o myarrow"></span>
        <div class="img2">
          <img src="../../assets/images/lo.png" alt="">
          <p>婚礼纪</p>
        </div>
      </div>
      <div class="img3">
        <div class="username">
          <img src="../../assets/images/loginbg.jpg" alt="">
          <span>盛夏之旅</span>
        </div>
        <div class="change">
          切换账号
        </div>
      </div>
      <div class="confirm">
        <router-link to="/home">确定</router-link>
      </div>
      <div class="other-msg">
        <p>该应用将访问您的公开资料，好友信息。</p>
      </div>
    </div>

	</main>
</template>
<script>
export default {
	data() {
		return {
		}
	},
	methods: {

	}
}
</script>
<style scoped="">
.text{
	width: 100%;
  height: 100%;
  background: #f2f3f7;
  position: absolute;
}
.text h4{
  height: 50px;
  line-height: 50px;
  background: #fff;
  color: #666;
}
.photo{
  display: flex;
  margin-top: 10px;
  width: 100%;
  background: #fff;
  padding:20px 90px;
  font-size: 0.777rem;
  border-bottom: 1px solid #ccc;
}
.mywb, .myarrow{
  font-size: 2.5rem;
}
.mywb{
  background-color:#f8c83e;
  border-radius: 4px;
  padding:4px;
  color: red;
}
.myarrow{
  margin:0 10px;
  color: #999;
}
.img1 p{
  line-height: 40px;
}
.img2{
  width: 60px;
  height: 80px;
}
.img2 img{
  width: 100%;
}
.img3{
  background: #fff;
  font-size: 0.777rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 20px;
}
.img3 img{
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.username {
  display: flex;
  align-items: center;
}
.change{
  color: #f8c83e;
}
.confirm{
  padding:0 10px;
}
.confirm a{
  display: inline-block;
  margin:20px 0;
  width: 100%;
  height: 36px;
  line-height: 36px;
  color: #fff;
  font-size: 0.888rem;
  border-radius: 4px;
  background-color: #f60;
}
.other-msg{
  font-size: 0.722rem;
  color: #666;
  text-align: left;
  padding-left: 10px;
}
</style>
