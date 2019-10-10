<template>
	<main>
		<ul class="reco-lis">
			<li>
				<h4>当前定位</h4>
				<div class="local">{{this.$store.state.addr}}</div>
			</li>
			<li>
				<h4>最近访问</h4>
				<ul class="recent-lis">
					<li>
						<router-link to="">{{this.$store.state.addr2}}</router-link>
					</li>
				</ul>
			</li>
			<li>
				<h4>热门城市</h4>
				<ul class="hotcity-lis">
					<li v-for="(v,i) in hotcity" class="hot-li" @click="target(v.city)">
						<router-link to="">{{v.city}}</router-link>
						<span class="trip" :style="v.bg"></span>
					</li>
				</ul>
			</li>
		</ul>
	</main>
</template>
<script>
export default{
	data(){
		return{
			hotcity:'',
			recent:''
		}
	},
	methods:{
      target(v){
         this.$store.commit('target',v)
        //  this.$store.state.addr=v;
      }
    },
	 mounted(){
			this.$http.get('./data/addr.json')
			.then((response)=>{
			this.hotcity=response.data.hotcity;
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			});
		},
}
</script>
<style scoped>
.reco-lis{
	display: flex;
	flex-direction: column;
	text-align: left;
}
.reco-lis{
	height: 90vh;
	overflow-y: auto;
	overflow-x: hidden;
}
.reco-lis>li{
	margin: 15px 0px 10px 10px;
}
.reco-lis>li h4{
	font-size: 0.722rem;
	color: #666;
	margin-bottom: 20px;
}
.local{
	font-size: 1rem;
	color: #333;
	font-weight: bolder;
	margin: 20px 0 0;
}
.recent-lis>li{
	margin-left: 18px;
	font-size: 0.888rem;
}
.hotcity-lis{
	display: flex;
	width: 100%;
	flex-wrap: wrap;
}
.hot-li{
	position: relative;
	width: 29%;
	font-size: 0.888rem;
	text-align: center;
	margin-bottom: 12px;
	padding-right: 10px;
}
.hot-li .router-link-active{
	width: 100%;
	height: 35px;
	line-height: 35px;
	border-radius: 2px;
	display: inline-block;
	background: #f6f6f6;


}
.trip{
	width: 28px;
	height: 14px;
	display: block;
	position: absolute;
	z-index: 5;
	top:-7px;
	right: 5px;
}
</style>
