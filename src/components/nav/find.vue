<template>
<main>
  <!-- 导航 -->
  <mynav></mynav>
  <classify></classify>
  <navtab></navtab>
  <div class="find-content">
    <ul class="lis1">
      <li v-for="(item,index) in flist">
        <router-link :to="item.path" class="lis-router">
          <div class="fleft">
            <img :src="item.src1" alt="">
          </div>
          <div class="fright">
            <div class="">
              <img :src="item.src2" alt="" class="img1">
              <span class="fr-span">{{item.title}}</span>
              <div class="fr-img">
                <img :src="item.src3" alt="" class="img2">
              </div>
            </div>
            <div class="fr2">
              <ul class="fr2-list">
                <li v-for="(v,i) in stars">
                  <img :src="v.src" alt="">
                </li>
              </ul>
              <span class="num">{{item.num}}</span>
              <img :src="item.src4" alt="" class="img3">
            </div>
            <div class="fr3">
              <ul class="fr3-list">
                <li v-for="(v,i) in relist">
                  {{v}}
                </li>
              </ul>
            </div>
            <div class="fr4">
              <span class="faddr">{{item.faddr}}</span>
              <span class="fprovince">{{item.fprovince}}</span>
            </div>
            <div class="fr5">
              <span class="gift">{{item.gift}}</span>
              <span class="gifttip">{{item.gifttip}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>

</main>
</template>
<script>
import nav from './nav-two.vue';
import classify from './nav-classify.vue';
import navtab from './nav_tab.vue';
export default {
  components: {
    'mynav': nav,
    'classify': classify,
    'navtab': navtab
  },
  data() {
    return {
      flist: '',
      stars: '',
      relist: ''
    }
  },
  mounted() {
    this.$http.get('./data/find.json')
      .then((response) => {
        this.flist = response.data.flist;
        this.stars = response.data.stars;
        this.relist = response.data.relist;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }
}
</script>
<style scoped>
.find-content {
  padding: 0 10px 0 16px;
}

.lis1 {
  display: flex;
  flex-direction: column;
}

.lis1>li {
  border-bottom: 1px solid #e7e7e7;
  padding: 16px 0 17px;
  position: relative;
}

.lis-router {
  display: flex;
}

.fleft {
  box-sizing: border-box;
  flex: 0 0 72px;
  display: inline-block;
  vertical-align: top;
  width: 72px;
  height: 72px;
  border-radius: 2px;
  border: 1px solid #e2e2e2;
  overflow: hidden;
  margin-right: 12px;
}

.fleft img {
  width: 100%;
}

.fright {
  display: flex;
  flex-wrap: wrap;
}

.fr-span {
  display: inline-block;
  font-size: 0.88rem;
  font-weight: bold;
  overflow: hidden;
  text-align: left;
  width: 172px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fright .img1 {
  width: 44px;
  height: 16px;
}

.fr-img {
  position: absolute;
  right: 0;
  top: 0;
  width: 26px;
  height: 34px;
}

.fright .img2 {
  width: 100%;
}

.fr2 {
  display: flex;
  margin-top: 5px;
}

.fr2-list {
  display: flex;
  flex-direction: row;
  margin-top: -3px;
}

.fr2-list img {
  padding-right: 2px;
  display: inline-block;
}

.fr2 .num {
  color: #666;
  font-size: 0.611rem;
}

.fright .img3 {
  width: 16px;
  height: 16px;
}

.fr3 {
  width: 100%;
  margin: 6px 0 3px;
}

.fr3-list {
  display: flex;
  justify-content: space-between;
  padding-right: 4px;
}

.fr3,
.fr4,
.fr5 {
  font-size: 0.722rem;
  color: #666;
}

.fr4 {
  margin-top: 8px;
  display: flex;
  max-height: 17px;
  text-align: left;
}

.faddr {
  overflow: hidden;
  width: 172px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.fprovince {
  margin-left: 14px;
  color: #578aff;
  min-width: 60px;
}

.fr5 {
  margin-top: 7px;
}

.gift {
  display: inline-block;
  padding: 1px 2px;
  border: 1px solid red;
  color: red;
  border-radius: 2px;
  font-size: 0.555rem;
  margin-right: 5px;
  margin-top: -3px;
}
</style>
