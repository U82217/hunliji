<template lang="html">
  <main>
    <div class="tab-item">
      <ul class="elect-list">
        <li v-for="(v,i) in products">
          <router-link :to="v.path" class="elect-a">
            <div class="tleft">
              <img :src="v.src" alt="">
            </div>
            <div class="tright">
              <h4>{{v.title}}</h4>
              <div class="tprices">
                <span class="tprice">{{v.price}}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      products:''
    }
  },
  mounted() {
    this.$http.get('./data/detail.json')
      .then((response) => {
        this.products = response.data.products;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>

<style lang="css" scoped>
</style>
