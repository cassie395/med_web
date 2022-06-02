<template>
  <v-container fluid class="info-page" fill-height>
    <v-row align="center" justify="center">
      <div class="home">
        <h1>歡迎使用點班系統</h1>
        <h2>您好，{{userName}} 護理師</h2>
      </div>
      <!-- <div>
        <h1>UserInfo</h1>
        <h3>user name:</h3>
        <p>{{ userName }}</p>
        <h3>ID:</h3>
        <p>{{ userId }}</p>
      </div> -->
    </v-row>
    <v-row align="center" justify="center">
      <v-btn 
        href=""
        color="secondary"
        @click.prevent="logout">
          登出
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        userName: 'user',
      }
    },
    methods: {
      logout(){
        localStorage.removeItem('token');
        this.$router.push('/');
      }
    },
  }
</script>
