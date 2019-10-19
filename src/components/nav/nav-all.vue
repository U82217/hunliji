<template>
<div class="nav-container">
  <ul class="nav-ul">
    <li v-for="(item,index) in navs">
      <router-link :to="item.path">
        <img :src="item.src" alt="">
        <span>{{item.title}}</span>
      </router-link>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      navs: ''
    }
  },
  mounted() {
    this.$http.get('./data/navbar.json')
      .then((response) => {
        this.navs = response.data.navs;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>
<style scoped>
.nav-ul {
  padding: 0 32px 10px 0;

  background: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.nav-ul li {
  width: 24%;
}

.nav-ul li img {
  width: 80%;
}

.nav-ul li span {
  display: block;
  font-size: 0.66rem;
  text-align: center;
  margin-bottom: 10px;
  margin-top: -7px;
}
</style>
