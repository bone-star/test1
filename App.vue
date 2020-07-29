<template>
	<router-view>
 </router-view>
</template>

<script>
//页面引入
import appJs from '@/assets/js/app.js'

export default {
  name: '',
  data(){
  	return{
  	}
  },
  components:{
  },
  methods:{
  },
  mounted(){
  	appJs.remFontSize()
  },
  create(){
  	
  }
}
</script>

<style>
	
</style>
