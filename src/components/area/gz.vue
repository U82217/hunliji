<template>
	<ul class="gz-lis">
    <li>
      <router-link to="/home">广州城区</router-link>
    </li>
    <li>
      <router-link to="/home">从化市</router-link>
    </li>

  </ul>
</template>
<script></script>
<style scoped>
.gz-lis{
  display: flex;
  flex-direction: column;
}
.gz-lis a{
  display: inline-block;
  padding:16px 0;
}
</style>
