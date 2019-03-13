<template>
  <div class="footbar">
    <footer class="footer">
        <nav>
            <ul>
                <li><router-link to="/home" active-class="active" class="nav-controller"><div class="fb-home"></div>首页</router-link></li>
                <li><router-link to="/ground" active-class="active" class="nav-controller" ><div class="fb-group"></div>我的拼团</router-link></li>
                <li><router-link to="/car" active-class="active" class="nav-controller"><div class="fb-list"></div>我的订单</router-link></li>
                <li><router-link to="/user" active-class="active" class="nav-controller"><div class="fb-user"></div>个人中心</router-link></li>
            </ul>
        </nav>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'footbar',
  components: {
    // HelloWorld
  },
  methods:{
    
  }
}
</script>

<style>

</style>
