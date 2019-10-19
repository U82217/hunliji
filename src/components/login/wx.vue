<template>
<main class="login-content">
  <div class="text">
    在这里发现 [备婚灵感]
  </div>
  <form class="myform" action="index.html" method="post">
    <div class="phonenumber">
      <input type="text" name="" value="" placeholder="绑定手机号" class="user">
      <span class="get-msg">获取验证码</span>
    </div>
    <div class="code">
      <input type="text" name="" value="" placeholder="输入验证码">
      <router-link to="/home" class="mlogin">登录</router-link>
    </div>
    <div class="privilege">
      <h4>绑定手机号，获得4大专享特权</h4>
      <ul class="pri-list">
        <li v-for="(item,index) in loginlist">
          <span class="pri-icon iconfont icon-select-s"></span>
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </form>
</main>
</template>
<script>
export default {
  data() {
    return {
      loginlist: ['解锁全部电子请帖', '解锁全部备婚攻略', '优先参加砍价大会', '全面保障账户安全']
    }
  },
  methods: {

  }
}
</script>
<style scoped="">
.text {
  width: 100%;
  height: 100px;
  color: #fff;
  word-spacing: 1rem;
  margin-top: 100px;
}

.login-content {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../../src/assets/images/loginbg1.jpg');
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

.privilege {
  margin-top: 30px;
}

.privilege h4 {
  font-size: 0.833rem;
  color: #000;
  font-weight: bold;
  text-align: left;
  padding-left: 3px;
}

.pri-list {
  font-size: 0.777rem;
  color: #444;
  text-align: left;
  margin-top: 10px;
  padding-bottom: 10px;
}

.pri-list li {
  width: 50%;
}

.pri-icon {
  font-size: 1rem;
  color: #1afa29;
}
</style>
