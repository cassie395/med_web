<template>
  <div>
    <v-simple-table>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>個人點班紀錄</v-toolbar-title>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="請輸入搜尋"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">點班日期</th>
            <th class="text-left">班次</th>
            <th class="text-left">急救車編號</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in records"
            :key="item.date">
              <td>{{ item.date }}</td>
              <td>{{ item.shift }}</td>
              <td>{{ item.number }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';
  
  export default {
    data () {
      return {
        search: '',
        calories: '',
        records:[]
      }
    },

    created () {
      this.uid = this.$route.query.uid
    },

    mounted () {
      axios.get('/getRecord', {params:{uid : this.uid}})
      .then((resp) => {

        var length = resp.data.length
        
        for(var i=0; i<length; i++){

          var temp={
            date: moment(resp.data[i].record_Date).format('YYYY-MM-DD'),
            shift: resp.data[i].record_Time, 
            number: resp.data[i].pNo}

          this.records.push(temp)
      }
      }).catch((error) => {
        alert('Database Error ' +error)
      })
    }

  }
</script>