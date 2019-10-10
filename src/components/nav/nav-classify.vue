<template lang="html">
  <div class="nav-classify">
    <ul class="nc-list">
      <li v-for="(item,index) in classify">
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
  data(){
    return{
      classify:''
    }
  },
  mounted(){
    this.$http.get('./data/navbar.json')
    .then((response)=>{
    this.classify=response.data.classify;
    })
    .catch(function (error) {
    console.log(error);
    })
    .then(function () {
    });
  }
}
</script>

<style lang="css" scoped>
.nav-classify{
  margin-top:48px;
  padding-bottom: 10px;
  background:#f2f3f6;
}
.nc-list{
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: space-between;
 background-color: #fff;
 padding-bottom: 15px;
}
.nc-list li{
 width:20%;
 margin-top: 14px;
}
.nc-list li img{
  width: 54%;
}

.nc-list span{
  display: block;
  color: #666;
  font-size: 0.611rem;
  text-align: center;
  /* margin-bottom: 10px; */
}
</style>
