<template>
  <div class="pa-0">
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        editable
        color="secondary"
        step="1"
      >
        第一層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        color = "secondary"
        editable
        step="2"
      >
        第二層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 3"
        color = "secondary"
        editable
        step="3"
      >
        第三層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 4"
        color = "secondary"
        editable
        step="4"
      >
        第四層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 5"
        color = "secondary"
        editable
        step="5"
      >
        第五層
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 6"
        color = "secondary"
        editable
        step="6"
      >
        外層
      </v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step
        :complete="e1 > 7"
        color = "secondary"
        editable
        step="7"
      >
        確認
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <LayerOne 
          @med01_new="renew_med01"
          @med02_new="renew_med02"
          @med03_new="renew_med03"
          @med04_new="renew_med04"
          @med05_new="renew_med05"
          @med06_new="renew_med06"
          @med07_new="renew_med07"
          @med08_new="renew_med08"
          @med09_new="renew_med09"
          @med10_new="renew_med10"
          @med11_new="renew_med11"
          @med12_new="renew_med12"
          @med13_new="renew_med13"
          @med14_new="renew_med14"
          @med15_new="renew_med15"
          @med16_new="renew_med16"
          @med17_new="renew_med17"
          @med18_new="renew_med18"
          @med19_new="renew_med19"
          @med20_new="renew_med20"
        ></LayerOne>
        <br>
        
        <v-row class="justify-end">
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 2">
            下一層
          </v-btn>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <LayerTwo></LayerTwo>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 1">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 3">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="3">
        <LayerThree></LayerThree>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 2">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 4">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="4">
        <LayerFour></LayerFour>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 3">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 5">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="5">
        <LayerFive></LayerFive>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 4">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 6">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="6">
        <LayerSix></LayerSix>
        <br>

        <v-row
        justify="space-between">
          <v-btn
            class="mb-4 ms-4"
            color="secondary"
            @click="e1 = 5">
            上一層
          </v-btn>
          <v-btn
            class="mb-4 me-4"
            color="secondary"
            @click="e1 = 7">
            下一層
          </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="7">
        <v-card
          class="mb-12"
          style="background-color: #EEEEEE"
          height="200px"
        >
        <v-col>
          <p class="text-body-1">護理師編號 :</p>
          <p class="text-body-1">護理師姓名 :</p>
          <p class="text-body-1">負責區域 :</p>
          <p class="text-body-1">點班日期 : {{date}}</p>
          <p class="text-body-1">點班時間 : {{time}}</p>
        </v-col>
        </v-card>

        <v-btn
          block
          color="secondary"
          @click="send"
        >
          確認送出
        </v-btn>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
import LayerOne from '../components/LayerOne.vue'
import LayerTwo from '../components/LayerTwo.vue'
import LayerThree from '../components/LayerThree.vue'
import LayerFour from '../components/LayerFour.vue'
import LayerFive from '../components/LayerFive.vue'
import LayerSix from '../components/LayerSix.vue'
import axios from 'axios';

export default{
  data () {
      return {
        num: '',
        page: 1,
        e1: 1,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        time: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11, 11).split(".")[0],
        new_med01: parseInt(this.$route.query.num.split(",")[0]),
        new_med02: parseInt(this.$route.query.num.split(",")[1]),
        new_med03: parseInt(this.$route.query.num.split(",")[2]),
        new_med04: parseInt(this.$route.query.num.split(",")[3]),
        new_med05: parseInt(this.$route.query.num.split(",")[4]),
        new_med06: parseInt(this.$route.query.num.split(",")[5]),
        new_med07: parseInt(this.$route.query.num.split(",")[6]),
        new_med08: parseInt(this.$route.query.num.split(",")[7]),
        new_med09: parseInt(this.$route.query.num.split(",")[8]),
        new_med10: parseInt(this.$route.query.num.split(",")[9]),
        new_med11: parseInt(this.$route.query.num.split(",")[10]),
        new_med12: parseInt(this.$route.query.num.split(",")[11]),
        new_med13: parseInt(this.$route.query.num.split(",")[12]),
        new_med14: parseInt(this.$route.query.num.split(",")[13]),
        new_med15: parseInt(this.$route.query.num.split(",")[14]),
        new_med16: parseInt(this.$route.query.num.split(",")[15]),
        new_med17: parseInt(this.$route.query.num.split(",")[16]),
        new_med18: parseInt(this.$route.query.num.split(",")[17]),
        new_med19: parseInt(this.$route.query.num.split(",")[18]),
        new_med20: parseInt(this.$route.query.num.split(",")[19])
      }
    },
  create() {
    this.getRouterData()
  },
  components: {
    LayerOne,
    LayerTwo,
    LayerThree,
    LayerFour,
    LayerFive,
    LayerSix
  },
  methods: {
    next: function(pageIndex) {
			let _this = this;
			let _start = (pageIndex - 1) * _this.pageSize;
			let _end = pageIndex * _this.pageSize;
			_this.historyList = _this.list.slice(_start, _end);
			_this.page = pageIndex;
		},
    send (){
      const that = this
      axios.get('/updateMedNum', {
        params:
          {
            pNo: '7D',
            med01: parseInt(this.new_med01),
            med02: parseInt(this.new_med02),
            med03: parseInt(this.new_med03),
            med04: parseInt(this.new_med04),
            med05: parseInt(this.new_med05),
            med06: parseInt(this.new_med06),
            med07: parseInt(this.new_med07),
            med08: parseInt(this.new_med08),
            med09: parseInt(this.new_med09),
            med10: parseInt(this.new_med10),
            med11: parseInt(this.new_med11),
            med12: parseInt(this.new_med12),
            med13: parseInt(this.new_med13),
            med14: parseInt(this.new_med14),
            med15: parseInt(this.new_med15),
            med16: parseInt(this.new_med16),
            med17: parseInt(this.new_med17),
            med18: parseInt(this.new_med18),
            med19: parseInt(this.new_med19),
            med20: parseInt(this.new_med20)
          }
        })
      .then(function(resp){
        alert('已送出')
        if(resp.status == 200){
          that.$router.push({
              path: "/info",
          })
        }
      }).catch(function(error){
        alert('Database Error ' +error)
      })
    },
    renew_med01(data){
      this.new_med01 = data
    },
    renew_med02(data){
      this.new_med02 = data
    },
    renew_med03(data){
      this.new_med03 = data
    },
    renew_med04(data){
      this.new_med04 = data
    },
    renew_med05(data){
      this.new_med05 = data
    },
    renew_med06(data){
      this.new_med06 = data
    },
    renew_med07(data){
      this.new_med07 = data
    },
    renew_med08(data){
      this.new_med08 = data
    },
    renew_med09(data){
      this.new_med09 = data
    },
    renew_med10(data){
      this.new_med10 = data
    },
    renew_med11(data){
      this.new_med11 = data
    },
    renew_med12(data){
      this.new_med12 = data
    },
    renew_med13(data){
      this.new_med13 = data
    },
    renew_med14(data){
      this.new_med14 = data
    },
    renew_med15(data){
      this.new_med15 = data
    },
    renew_med16(data){
      this.new_med16 = data
    },
    renew_med17(data){
      this.new_med17 = data
    },
    renew_med18(data){
      this.new_med18 = data
    },
    renew_med19(data){
      this.new_med19 = data
    },
    renew_med20(data){
      this.new_med20 = data
    },
  }
}

</script>