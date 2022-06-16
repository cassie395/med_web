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
    <v-row align="center" justify="center">
      <v-btn
        class="ma-5"
        color="secondary"
        @click="upload">
          上傳
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
      }
    },
    methods: {
      previewImage () {
        this.url = URL.createObjectURL(this.image)
      },
      upload () {
        var that = this;
        const formData = new FormData();
        formData.append('image', that.image)

        const path = 'http://192.168.43.34:5000/detectObject';

        axios.post(path,formData)
        .then(function(resp){
          var msg = resp.data.status;

          //alert('success'+msg)
          
          that.num = msg.toString();
          that.num = that.num.substring(1, (that.num.length-1));

          that.$router.push({
            path: "/layer",
            name: 'layer',
            query:{
              num : that.num
            }
          })

        }).catch(function(error){
          alert('Error '+error)
        })
      }
    }
  }
</script>