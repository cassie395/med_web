<template>
  <v-data-table
    :headers="headers"
    :items="carts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>急救車鎖定</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">鎖定</span>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
      </v-toolbar>
    </template>
    <template v-slot:[`item.state`]="{ item }">
      <v-btn
      tile
      small
      color="success"
      @click="editItem(item)">
      <v-icon left>
        mdi-lock
      </v-icon>
      未上鎖
    </v-btn>
    </template>
    
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '急救車編號',
          align: 'start',
          sortable: false,
          value: 'number',
        },
        { text: '急救車狀態', value: 'state' },
        { text: '鎖定號碼', value: 'LockNum' },
        { text: '更改時間', value: 'ChangeTime' },
      ],
      carts: [],
      editedIndex: -1,
      editedItem: {
        number: '',
        LockNum: 0,
        ChangeTime: '',
      },
      defaultItem: {
        number: '',
        LockNum: 0,
        ChangeTime: '',
      },
    }),

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.carts = [
          {
            number: '7D',
            LockNum: 12,
            ChangeTime: '2022-06',
          },
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.carts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>