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
                v-model="user.uid"
              ></v-text-field>
              
              <label>Password : </label>
              <v-text-field
                label="請輸入密碼"
                type="password"
                v-model="user.password"
              ></v-text-field>
              <br>
              <v-btn 
                type="primary"
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
      user: {
        uid: '',
        password: ''
      },
    };
    },

    methods: {
      login() {
        if(this.user.uid==='' || this.user.password===''){
          alert('帳號或密碼不能為空！')
        }else{
          this.axios.get('/', {
          // this.$api.post('请求的后端接口链接',{
          // axios.get('/', {
            params:{
            // user:{
              uid: this.user.uid,
              password: this.user.password,
            }
          }).then(res=>{
            if(res.data.status==200){
              localStorage.setItem('token', 'ImLogin')
              this.$router.push({
                path: '/home',
                query:{
                  uid: this.user.uid
                }
              })
              // alert('成功')
            }else{
              alert('帳號或密碼錯誤',{
              confirmButtonText: '確定',
              callback: action => {
                this.user.uid='',
                this.user.password=''
              }
            });
            }
          }).catch(err=>{
            console.log("登入失敗"+ err);
          })
        }
      },
      // register(){
      //   this.$router.push('/register');
      // }
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
