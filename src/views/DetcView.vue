<template>
  <div id="detect">
    <v-img :src="url"></v-img>
    <v-file-input
      accept="image/jpg"
      placeholder="請選擇檔案"
      prepend-icon="mdi-file"
      @change="previewImage"
      v-model="image"
    ></v-file-input>

    <v-btn 
      color="secondary"
      @click="upload">
        上傳
    </v-btn>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    data () {
      return {
        url: null,
        image: null
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

        const path = 'http://127.0.0.1:5000/detectObject';

        axios.post(path,formData)
        .then(function(resp){
          var msg = resp.data.status;
          that.serverResponse = msg;

          alert('success')
        }).catch(function(error){
          alert('Error '+error)
        })
      }
    }
  }
</script>