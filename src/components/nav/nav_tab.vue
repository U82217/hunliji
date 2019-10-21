<template lang="html">
  <main :class="{fixtab:whether}">
    <ul class="nt-list">
      <li v-for="(item,index) in ntlis"  @click="tab(index)">
      <!-- <li v-for="(item,index) in ntlis"  @click="tab(index)" :class="{active:cur==index}"> -->
        <span>{{item}}</span>
        <i class="arrow"></i>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(m,index) in tabMain"  v-show="cur==index" :class="{'tab-wrap':hshow,'changeHeight':!hshow}">
        <ul class="tab-list">
          <li v-for="(v,i) in m.newList">{{v.title}}</li>
        </ul>
      </div>
    </div>
    <div  class="tab-bg" @click.stop="bgClose()" v-show="bgShow"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      ntlis: ['全部', '区域', '综合排序', '筛选'],
      tabMain: [{
          newList: [{
              title: '全部'
            },
            {
              title: '婚纱摄影'
            },
            {
              title: '婚礼策划'
            },
            {
              title: '婚纱礼服'
            },
            {
              title: '婚宴酒店'
            },
            {
              title: '花艺甜品'
            },
            {
              title: '婚礼摄影'
            },
            {
              title: '婚礼摄像'
            }
          ]
        },
        {
          newList: [{
            title: '区域'
          }]
        },
        {
          newList: [{
              title: '综合排序'
            },
            {
              title: '喜欢最多'
            },
            {
              title: '作品最多'
            }
          ]
        },
        {
          newList: [{
              title: '服务与保障（可多选）'
            },
            {
              title: '保证金商家'
            },
            {
              title: '高等级商家'
            }
          ]
        }
      ],
      cur: -1,
      whether: false,
      hshow: true,
      bgShow:false,
    }
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 150) {
        this.whether = true;
      } else {
        this.whether = false;
      }
    },
    tab(index) {
      this.cur = index;
      this.hshow = !this.hshow;
    },
    bgClose(){
      this.hshow = !this.hshow;
      this.bgShow=!this.bgShow;
    }
  },
  mounted() {
    $('.nt-list li').click(function() {
        $(this).children('i').toggleClass('arrow1').parent().siblings().children('i').removeClass('arrow1');
        $('.tab-bg').toggle();
        $(this).toggleClass('active').siblings().removeClass('active');
      }),

      $('.tab-bg').click(function(e){
        $('.nt-list li').removeClass('active');
        $('.nt-list li').children('i').removeClass('arrow1');
      })
      window.addEventListener("scroll", this.handleScroll);
  }

}
</script>
<style>
.nt-list {
  overflow-x: visible;
}
</style>
<style lang="css" scoped>
.tab-bg{
  width: 100%;
  height: 700vh;
  background: rgba(0,0,0,0.3);
  position: absolute;
  z-index: 9;
  display: none;
}
.nt-list{
  display: flex;
  font-size: 0.777rem;
  padding:6px 0;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
}
.nt-list li{
  width: 25%;
  height: 32px;
  line-height: 32px;
  text-align: center;
  position: relative;
}
.nt-list li:not(:last-child){
  border-right: 1px solid #e7e7e7;
}

.arrow{
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  margin-left: 3px;
  transform: translateY(-50%);
  border-width: 4px 4px 0 4px;
  border-style: solid dashed dashed dashed;
  border-color: #999 transparent transparent transparent;
}

.nt-list .active{
  color: #f83244;
}
.arrow1{
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  margin-left: 3px;
  transform: translateY(-50%);
  border-width: 0 4px 4px 4px;
  border-style: dashed dashed solid dashed;
  border-color:transparent transparent #f83244 transparent;
}
.tab-content{
  position: absolute;
  z-index: 10;
  width: 100%;
  background: #fff;
  text-align: left;
  padding:10px 0 0;
}
.tab-wrap{
  display: none;
}
.changeHeight{
  display: block;
}
.tab-list{
  display: flex;
  flex-direction: column;
}
.tab-list li{
  border-bottom: 1px solid #e7e7e7;
  padding-left: 19px;
  height: 40px;
  font-size: 0.722rem;
  line-height: 40px;
  color: #666;
}
.fixtab{
  position: fixed;
  top: 56px;
  left:0;
  z-index: 20;
  width: 100%;
}


</style>
