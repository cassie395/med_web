<template>
  <v-container fluid class="info-page">
    <h2 class="page-title mt-10 mb-6" >您好! {{userName}} 護理師</h2>
    <v-row>
      <v-col lg=12 cols=12>
        <v-card class="mx-1 mb-1" color="rgb(224, 224, 224, 0.2)">
          <v-card-title class="pa-6 pb-3">
            <p>每日點班</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="info-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <p class="text-body-1">負責區域: </p>
                <p class="text-body-1">點班情況: </p>
                <p class="text-body-1">點班時間: </p>
              </v-col>
              <v-btn 
              elevation="2"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow mr-1"
              @click.native="$router.push('/info/detect')">
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
    data () {
      return {
        userName: 'user',
      }
    },
  }
</script>