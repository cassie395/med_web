<template>
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
        <LayerOne></LayerOne>
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
        >
          確認送出
        </v-btn>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
import LayerOne from '../components/LayerOne.vue'
import LayerTwo from '../components/LayerTwo.vue'
import LayerThree from '../components/LayerThree.vue'
import LayerFour from '../components/LayerFour.vue'
import LayerFive from '../components/LayerFive.vue'
import LayerSix from '../components/LayerSix.vue'

export default{
  data () {
      return {
        num: '',
        page: 1,
        e1: 1,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      time: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11, 11).split(".")[0],
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
		}
  }
}

</script>