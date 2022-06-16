<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="records"
      item-key="date"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>急救車鎖定</v-toolbar-title>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="請輸入搜尋"
          class="mx-4"
        ></v-text-field>
      </template>
      
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        calories: '',
        records:[
          {
          date: '2022-06-10',
          shift: '晚班',
          number: '7D',
          },
        ]
      }
    },
    computed: {
      headers () {
        return [
          { text: '點班日期', value: 'date' },
          { text: '班次', value: 'shift' },
          { text: '急救車編號', value: 'number' },
        ]
      },
    },
    methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  }
</script>