<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
     window.onresize = getRem;
        function getRem(){
        document.documentElement.style.fontSize = document.documentElement.offsetWidth / 20+'px';
    }
    getRem();
  }
}
</script>

<style>
body,html{
  cursor: default;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
}

a {
  color: #333;
  text-decoration: none;
}
img{
  display: block;
}
body{
  overflow-x:hidden;
}
::-webkit-scrollbar {
   display:none;
}
 html {
	overflow-y: auto;
}


</style>
