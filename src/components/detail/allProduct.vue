<template lang="html">
  <main>
    <ul class="all-lis">
      <li v-for="(v,i) in allList"  :key="">
        <router-link :to="v.path">
          <div class="all-img">
            <img :src="v.src" alt="">
          </div>
          <h4 class="ah4">{{v.title}}</h4>
          <div class="all-span">
            <span class="span1">{{v.span1}}</span>
            <span class="span2">{{v.span2}}</span>
          </div>
          <div class="all-bottom">
            <span class="all-price">{{v.price}}</span>
            <span class="all-collect">{{v.collect}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      allList: ''
    }
  },
  mounted() {
    this.$http.get('./data/products.json')
      .then((response) => {
        this.allList = response.data.allList;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>

<style lang="css" scoped>
.all-lis{
  padding:10px 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.all-lis li{
  width: 48.5%;
  border: 1px solid #e7e7e7;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.all-img{
  height: 162px;
  margin-bottom: 5px;
}
.all-img img{
  width: 100%;
  height: 100%;
}
.ah4{
  overflow: hidden;
  padding:0 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  font-size: 0.722rem;
}
.all-span{
  text-align: left;
  padding:5px 10px
}
.span1,.span2{
  display: inline-block;
  color: #fff;
  font-weight: bold;
  font-size: 0.611rem;
  border-radius: 2px;
  margin-right: 3px;
}
.span1{
  padding:1px 2px;
  background: #80d089;
}
.span2{
  background: #ff8c47;
}
.all-bottom{
  display: flex;
  justify-content: space-between;
  padding:0 4px;
}
.all-price{
  color: #f83244;
  font-size: 0.777rem;
}
.all-collect{
  color: #999;
  font-size: 0.666rem;
}
</style>
