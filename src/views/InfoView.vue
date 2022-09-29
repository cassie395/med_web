<template>
  <v-container fluid class="info-page">
    <v-row>
      <v-col lg=12 cols=12>
        <v-card class="mx-1 mb-1" color="rgb(224, 224, 224, 0.2)">
          <v-card-title class="pa-6 pb-3">
            <p>每日點班</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="info-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <p class="text-body-1">負責區域: {{pNo}} </p>
                <p class="text-body-1">點班日期: {{date}}</p>
                <p class="text-body-1">點班時間: {{time}}</p>

    
              </v-col>
              <v-btn 
              elevation="2"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow mr-1"
              @click.native="toDetect">
                開始點班
              </v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      uid: null,
      uname: null,
      pNo: null,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      time: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11, 11).split(".")[0],
    }),
    created(){
      this.uid=this.$route.query.uid;
      this.uname=this.$route.query.uname;
      this.pNo=this.$route.query.pNo;
    },
    methods: {
      toDetect() {
        this.$router.push({
          path: "/detect",
          name: 'detect',
          query:{
            uid : this.uid,
            uname : this.uname,
            pNo : this.pNo,
          }
        })
      }
    }
  }
</script>