<template>
<main class="login-content">
  <div class="txts">
    <div class="find-feel">
      <span class="find-span1">这里发现</span>
      <span>[备婚灵感]</span>
    </div>
    <div class="words">
      <span class="txt1">我</span>
      <span>的</span>
      <span class="txt2">婚</span>
      <span class="txt3">礼</span>
      <span class="txt4">我</span>
      <span class="txt2 txt5">做</span>
      <span class="txt2">主</span>
    </div>
  </div>
  <form class="myform" action="index.html" method="post">
    <div class="phonenumber">
      <input type="text" name="" value="" placeholder="输入手机号" class="user">
      <span class="get-msg">获取验证码</span>
    </div>
    <div class="code">
      <input type="text" name="" value="" placeholder="输入验证码">
      <router-link to="/home" class="mlogin">登录</router-link>
    </div>
    <div class="methods">
      <span class="other">
        其他登录方式
      </span>
      <ul class="login-list">
        <li>
          <router-link to="/wx" class="wx"></router-link>
        </li>
        <li>
          <router-link to="" class="qq"></router-link>
        </li>
        <li>
          <router-link to="/weibo" class="wb"></router-link>
        </li>
      </ul>
    </div>
    <p class="agree">
      登录即表示您同意《婚礼纪用户协议》
    </p>
  </form>
</main>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    this.$http.get('./data/find.json')
      .then((response) => {
        this.flist = response.data.flist;
      })
      .catch(function(error) {})
      .then(function() {});
  }
}
</script>
<style scoped="">
.txts{
  text-align:right;
  margin-top:30px;
  color:#fff;
  padding:0 20px;
}
.find-feel{
  font-size:0.777rem;
  margin-bottom:10px;
}
.find-span1{
  display:inline-block;
  margin-right:10px;
}
.txt1{
  font-size:1.6rem;
}
.txt2{
  font-size:1.4rem;
}
.txt3{
  font-size:1.2rem;
}
.txt4{
  font-size:1.9rem;
}
.txt5{
  position:relative;
  top:-5px;
}
.login-content {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../../src/assets/images/loginbg.jpg') no-repeat;
  background-size: cover;
  background-position:center center;
}

.myform {
  position: absolute;
  width: 86%;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 10px 16px;
  color: #666;
}

.myform input {
  outline: none;
  border: none;
  line-height: 30px;
  background: none;
}

.phonenumber,
.code {
  font-size: 0.777rem;
  border-bottom: 1px solid #a5a1a1;
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
}

.get-msg {
  color: #7da2f7;
  padding-right: 10px;
  display: inline-block;
}

.mlogin {
  color: #fff;
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #cccccc;
  border-radius: 15px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.methods {
  display: flex;
  width: 70%;
  line-height: 30px;
  justify-content: space-between;
  font-size: 0.722rem;
  margin: 30px 0 15px;
}

.login-list {
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.login-list li a {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url('../../../src/assets/images/login_sprite.png');
}

.agree {
  font-size: 0.666rem;
  text-align: left;
  padding-bottom: 15px;
}

.login-list li .wx {
  background-position: 0 -92px;
}

.login-list li .wb {
  background-position: 0 -46px;
}
</style>
