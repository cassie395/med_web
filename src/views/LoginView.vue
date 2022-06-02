<template>
  <v-container fluid class="login-page">
    <v-row>
      <v-col lg=12 cols=12>
        <v-card class="mx-1 mb-1" color="rgb(224, 224, 224, 0.2)">
          
          <v-card-title class="pa-6 pb-3">
            <h2>Log In</h2>
          </v-card-title>
          
          <v-card-text class="pa-6 pt-0">
            <form @submit.prevent="login">
              <label>User Name : </label>
              <br>
              <v-text-field
                label="請輸入帳號"
                type="text"
                v-model="userName"
              ></v-text-field>
              
              <label>Password : </label>
              <v-text-field
                label="請輸入密碼"
                type="password"
                v-model="password"
              ></v-text-field>
              <br>
              <v-btn 
                type="submit"
                color="secondary">
                  Log In
              </v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      login(){
        //-- write login authencation logic here! --
        //let auth = true;
        if( this.userName == 'user' && this.password == '1234' )
        {
            localStorage.setItem('token', 'ImLogin')
            this.$router.push('/home');
        }
        else
          alert('帳號密碼有誤！')
      }
    }
  }
</script>

<style scoped>
.input-search {
  width: 40%;
  margin: auto;
}
.width-20-percent {
  width: 20%;
}
.img-div {
  margin: 16vh 0 40px 0;
  text-align: center;
}
.v-menu__content {
  box-shadow: none !important;
}
.border-list {
  border: 1px solid #eee !important;
}
</style>