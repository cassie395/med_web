<template>
  <div id="detect">
    <v-img 
      :src="url"
      max-height = "554"
      max-width = "739"
      contain
    ></v-img>

    <v-file-input
      accept="image/jpg"
      placeholder="請選擇檔案"
      prepend-icon="mdi-file"
      @change="previewImage"
      v-model="image"
    ></v-file-input>
    <v-row align="center" justify="center" class="ma-2 pa-0">
      <v-btn
        color="secondary"
        block
        @click="upload">
          上傳
      </v-btn>
    </v-row>
    <v-row align="center" justify="center" class="ma-2 pa-0">
      <v-btn
        class="ma-3"
        color="secondary"
        block
        @click="manual">
          手動點班
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    data () {
      return {
        url: null,
        image: null,
        num: null,
        cNo: '',
        medActual: [],
      }
    },
    methods: {
      previewImage () {
        this.url = URL.createObjectURL(this.image)
      },
      upload () {
        var that = this;

        axios.get('/getMedNum', {params:{pNo : '7D'}})
        .then(function(resp){
          that.medActual.push(resp.data[0].med01)
          that.medActual.push(resp.data[0].med02)
          that.medActual.push(resp.data[0].med03)
          that.medActual.push(resp.data[0].med04)
          that.medActual.push(resp.data[0].med05)
          that.medActual.push(resp.data[0].med06)
          that.medActual.push(resp.data[0].med07)
          that.medActual.push(resp.data[0].med08)
          that.medActual.push(resp.data[0].med09)
          that.medActual.push(resp.data[0].med10)
          that.medActual.push(resp.data[0].med11)
          that.medActual.push(resp.data[0].med12)
          that.medActual.push(resp.data[0].med13)
          that.medActual.push(resp.data[0].med14)
          that.medActual.push(resp.data[0].med15)
          that.medActual.push(resp.data[0].med16)
          that.medActual.push(resp.data[0].med17)
          that.medActual.push(resp.data[0].med18)
          that.medActual.push(resp.data[0].med19)
          that.medActual.push(resp.data[0].med20)
          //alert(that.medActual)
          
        }).catch(function(error){
          alert('Database Error ' +error)
        })

        const formData = new FormData();
        formData.append('image', that.image)

        const path = 'http://192.168.43.34:5000/detectObject';

        axios.post(path,formData)
        .then(function(resp){
          var msg = resp.data.status;

          //alert('success'+msg)
          
          that.num = msg.toString();
          that.num = that.num.substring(1, (that.num.length-1));
          //alert(that.num)
          that.$router.push({
            path: "/layer",
            name: 'layer',
            query:{
              num : that.num,
              actual_num: that.medActual
            }
          })

        }).catch(function(error){
          alert('Error '+ error)
        })
      },
      manual () {
        var that = this;

        const path = 'http://192.168.43.34:5000/manual';

        axios.post(path)
        .then(function(resp){
          var msg = resp.data.status;

          //alert('success'+msg)
          
          that.num = msg.toString();
          that.num = that.num.substring(1, (that.num.length-1));
          //alert(that.num)

        }).catch(function(error){
          alert('Error '+error)
        })

        axios.get('/getMedNum', {params:{pNo : '7D'}})
        .then(function(resp){
          that.medActual.push(resp.data[0].med01)
          that.medActual.push(resp.data[0].med02)
          that.medActual.push(resp.data[0].med03)
          that.medActual.push(resp.data[0].med04)
          that.medActual.push(resp.data[0].med05)
          that.medActual.push(resp.data[0].med06)
          that.medActual.push(resp.data[0].med07)
          that.medActual.push(resp.data[0].med08)
          that.medActual.push(resp.data[0].med09)
          that.medActual.push(resp.data[0].med10)
          that.medActual.push(resp.data[0].med11)
          that.medActual.push(resp.data[0].med12)
          that.medActual.push(resp.data[0].med13)
          that.medActual.push(resp.data[0].med14)
          that.medActual.push(resp.data[0].med15)
          that.medActual.push(resp.data[0].med16)
          that.medActual.push(resp.data[0].med17)
          that.medActual.push(resp.data[0].med18)
          that.medActual.push(resp.data[0].med19)
          that.medActual.push(resp.data[0].med20)

          that.$router.push({
            path: "/layer",
            name: 'layer',
            query:{
              num : that.num,
              actual_num: that.medActual
            }
          })
          
        }).catch(function(error){
          alert('Database Error ' +error)
        })
      },
    }
  }
</script>