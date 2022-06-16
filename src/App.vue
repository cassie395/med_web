<template>
  <v-app id="App">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div id="app">
          {{uid}}
        </div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :to="to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>點班系統</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
      </v-container>

      <router-view></router-view>
    </v-main>
  </v-app>

<!-- <b-nav-item-dropdown text="User" right>
  <b-dropdown-item><router-link to="/login">Login</router-link></b-dropdown-item>
  <b-dropdown-item><router-link to="/register">Register</router-link></b-dropdown-item>
  <b-dropdown-item><router-link to="/logout">Logout</router-link></b-dropdown-item>
</b-nav-item-dropdown> -->

</template>

<script>
  export default {
    data: () => ({
      return: {
        uid: ' '
      },
      // uid: ' ',
      drawer: null,
      links: [
        ['mdi-home', '主頁', '/home'],
        ['mdi-pill', '急救車點班', '/info'],
        ['mdi-account', '個人點班記錄', '/account'],
        ['mdi-list-status', '急救車點班情況', '/list'],
        ['mdi-lock', '急救車鎖定', '/lock'],
        ['mdi-text-box-edit', '雙月稽核', '/check-month'],
        ['mdi-text-box-edit', '總數稽核', '/check-all'],
        ['mdi-text-box-check', '稽核結果', '/result'],
        ['mdi-table', '統計圖表', '/table'],
      //   query:{
      //   uid: this.user.uid
      // },
      ],
      // query:{
      //   uid: this.user.uid
      // },
    }),
    created(){
      this.uid=this.$route.query.uid;
      // this.uid=this.query.uid;
    },
  }
</script>
