<template>
	<main class="gd-content">
		<div class="gd-left">
			<ul class="gd-lis">
				<li v-for="(v,i) in gd" @click="msg=gdimg[i];change(i)">
					<router-link to="" :class="active==i ? 'addColor':'' ">{{v}}</router-link>
				</li>
			</ul>
		</div>
		<div class="gd-right">
			<component :is="msg"></component>
		</div>

	</main>
</template>
<script>
import gz from '../area/gz.vue'
export default{
	components:{
		'gz':gz
	},
	data(){
		return{
			gd:'',
			msg:'',
			gdimg:[gz],
			active:-1
		}
	},
	methods:{
		change(i){
      	this.active=i;
    }
	},
	 mounted(){
			this.$http.get('./data/addr.json')
			.then((response)=>{
			this.gd=response.data.gd;
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			});
		},
}
</script>
<style>
	.gd-content{
		display: flex;
	}
	.gd-left{
		width: 50%;
		height: 90vh;
		border-right: 1px dotted #eee;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.gd-left::-webkit-scrollbar {
	   display:block !important;
		 width: 3px;
	}
	.gd-right{
		width: 50%;
	}

</style>
<style scoped>
.addColor{
	color: #f83244;
}
.gd-lis{
	display: flex;
	flex-direction: column;
}
.gd-content a{
	display: inline-block;
	padding:16px 0;
}
</style>
