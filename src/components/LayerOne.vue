<template>
  <div d-flex flex-column mb-6>
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med1_change==0 && med1_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med1_change }}/{{ this.$route.query.actual_num[0] }}</h5>
            <v-spacer></v-spacer>
            <h5>({{ isEqual1() }})</h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog1 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Succi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual1()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med1_change }}/{{ this.$route.query.actual_num[0] }}</h5>
            <v-spacer></v-spacer>
            <h5>({{ isEqual1() }})</h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog1 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Succi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual1()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med1_change }}/{{ this.$route.query.actual_num[0] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual1>0">
              (+{{ isEqual1() }})
            </h5>
            <h5 v-else>
              ({{ isEqual1() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog1 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Succi
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med2_change==0 && med2_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med2_change }}/{{ this.$route.query.actual_num[1] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual2() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog2 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Nalox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual2()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med2_change }}/{{ this.$route.query.actual_num[1] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual2() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog2 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Nalox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual2()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med2_change }}/{{ this.$route.query.actual_num[1] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual2>0">
              (+{{ isEqual2() }})
            </h5>
            <h5 v-else>
              ({{ isEqual2() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog2 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Nalox
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med3_change==0 && med3_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med3_change }}/{{ this.$route.query.actual_num[2] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual3() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog3 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lasix
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual3()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med3_change }}/{{ this.$route.query.actual_num[2] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual3() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog3 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lasix
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual3()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med3_change }}/{{ this.$route.query.actual_num[2] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual3>0">
              (+{{ isEqual3() }})
            </h5>
            <h5 v-else>
              ({{ isEqual3() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog3 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lasix
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med4_change==0 && med4_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med4_change }}/{{ this.$route.query.actual_num[3] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual4() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog4 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Solu-c
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual4()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med4_change }}/{{ this.$route.query.actual_num[3] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual4() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog4 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Solu-c
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual4()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med4_change }}/{{ this.$route.query.actual_num[3] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual4>0">
              (+{{ isEqual4() }})
            </h5>
            <h5 v-else>
              ({{ isEqual4() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog4 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Solu-c
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med5_change==0 && med5_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med5_change }}/{{ this.$route.query.actual_num[4] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual5() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog5 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              NTG
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual5()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med5_change }}/{{ this.$route.query.actual_num[4] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual5() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog5 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              NTG
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual5()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med5_change }}/{{ this.$route.query.actual_num[4] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual5>0">
              (+{{ isEqual5() }})
            </h5>
            <h5>
              ({{ isEqual5() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog5 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              NTG
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med6_change==0 && med6_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med6_change }}/{{ this.$route.query.actual_num[5] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual6() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog6 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dobut
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual6()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med6_change }}/{{ this.$route.query.actual_num[5] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual6() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog6 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dobut
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual6()!=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med6_change }}/{{ this.$route.query.actual_num[5] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual6>0">
              (+{{ isEqual6() }})
            </h5>
            <h5 v-else>
              ({{ isEqual6() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog6 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dobut
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med7_change==0 && med7_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med7_change }}/{{ this.$route.query.actual_num[6] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual7() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog7 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Isopt
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual7()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med7_change }}/{{ this.$route.query.actual_num[6] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual7() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog7 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Isopt
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual7() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med7_change }}/{{ this.$route.query.actual_num[6] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual7>0">
              (+{{ isEqual7() }})
            </h5>
            <h5>
              ({{ isEqual7() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog7 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Isopt
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med8_change==0 && med8_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med8_change }}/{{ this.$route.query.actual_num[7] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual8() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog8 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Levop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual8()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med8_change }}/{{ this.$route.query.actual_num[7] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual8() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog8 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Levop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual8() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med8_change }}/{{ this.$route.query.actual_num[7] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual8>0">
              (+{{ isEqual8() }})
            </h5>
            <h5 v-else>
              ({{ isEqual8() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog8 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Levop
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med9_change==0 && med9_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med9_change }}/{{ this.$route.query.actual_num[8] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual9() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog9 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Digox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual9()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med9_change }}/{{ this.$route.query.actual_num[8] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual9() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog9 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Digox
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual9() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med9_change }}/{{ this.$route.query.actual_num[8] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual9>0">
              (+{{ isEqual9() }})
            </h5>
            <h5 v-else>
              ({{ isEqual9() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog9 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Digox
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med10_change==0 && med10_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med10_change }}/{{ this.$route.query.actual_num[9] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual10() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog10 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dilan
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual10()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med10_change }}/{{ this.$route.query.actual_num[9] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual10() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog10 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dilan
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual10() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med10_change }}/{{ this.$route.query.actual_num[9] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual10>0">
              (+{{ isEqual10() }})
            </h5>
            <h5 v-else>
              ({{ isEqual10() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog10 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dilan
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med11_change==0 && med11_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med11_change }}/{{ this.$route.query.actual_num[10] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual11() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog11 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Sod.bi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual11()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med11_change }}/{{ this.$route.query.actual_num[10] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual11() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog11 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Sod.bi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual11() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med11_change }}/{{ this.$route.query.actual_num[10] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual11>0">
              (+{{ isEqual11() }})
            </h5>
            <h5 v-else>
              ({{ isEqual11() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog11 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Sod.bi
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med12_change==0 && med12_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med12_change }}/{{ this.$route.query.actual_num[11] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual12() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog12 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Corda
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual12()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med12_change }}/{{ this.$route.query.actual_num[11] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual12() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog12 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Corda
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual12() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med12_change }}/{{ this.$route.query.actual_num[11] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual12>0">
              (+{{ isEqual12() }})
            </h5>
            <h5 v-else>
              ({{ isEqual12() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog12 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Corda
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med13_change==0 && med13_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med13_change }}/{{ this.$route.query.actual_num[12] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual13() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog13 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Mag Su
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual13()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med13_change }}/{{ this.$route.query.actual_num[12] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual13() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog13 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Mag Su
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual13() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med13_change }}/{{ this.$route.query.actual_num[12] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual13>0">
              (+{{ isEqual13() }})
            </h5>
            <h5 v-else>
              ({{ isEqual13() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog13 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Mag Su
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med14_change==0 && med14_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med14_change }}/{{ this.$route.query.actual_num[13] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual14() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog14 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dopam
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual14()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med14_change }}/{{ this.$route.query.actual_num[13] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual14() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog14 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dopam
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual14() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med14_change }}/{{ this.$route.query.actual_num[13] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual14>0">
              (+{{ isEqual14() }})
            </h5>
            <h5 v-else>
              ({{ isEqual14() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog14 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Dopam
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med15_change==0 && med15_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med15_change }}/{{ this.$route.query.actual_num[14] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual15() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog15 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Cal Gu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual15()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med15_change }}/{{ this.$route.query.actual_num[14] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual15() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog15 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Cal Gu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual15() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med15_change }}/{{ this.$route.query.actual_num[14] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual15>0">
              (+{{ isEqual15() }})
            </h5>
            <h5 v-else>
              ({{ isEqual15() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog15 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Cal Gu
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med16_change==0 && med16_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med16_change }}/{{ this.$route.query.actual_num[15] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual16() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog16 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Bosmi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual16()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med16_change }}/{{ this.$route.query.actual_num[15] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual16() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog16 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Bosmi
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual16() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med16_change }}/{{ this.$route.query.actual_num[15] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual16>0">
              (+{{ isEqual16() }})
            </h5>
            <h5 v-else>
              ({{ isEqual16() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog16 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Bosmi
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med17_change==0 && med17_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med17_change }}/{{ this.$route.query.actual_num[16] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual17() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog17 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Adeno
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual17()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med17_change }}/{{ this.$route.query.actual_num[16] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual17() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog17 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Adeno
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual17() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med17_change }}/{{ this.$route.query.actual_num[16] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual17>0">
              (+{{ isEqual17() }})
            </h5>
            <h5 v-else>
              ({{ isEqual17() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog17 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Adeno
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med18_change==0 && med18_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med18_change }}/{{ this.$route.query.actual_num[17] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual18() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog18 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Atrop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual18()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med18_change }}/{{ this.$route.query.actual_num[17] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual18() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog18 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Atrop
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual18() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med18_change }}/{{ this.$route.query.actual_num[17] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual18>0">
              (+{{ isEqual18() }})
            </h5>
            <h5 v-else>
              ({{ isEqual18() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog18 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Atrop
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med19_change==0 && med19_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med19_change }}/{{ this.$route.query.actual_num[18] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual19() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog19 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lidoc
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual19()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med19_change }}/{{ this.$route.query.actual_num[18] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual19() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog19 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lidoc
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual19() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med19_change }}/{{ this.$route.query.actual_num[18] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual19>0">
              (+{{ isEqual19() }})
            </h5>
            <h5 v-else>
              ({{ isEqual19() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog19 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Lidoc
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-0"
          outlined
          tile
          v-if="med20_change==0 && med20_actual==0"
          style="background-color: #F0F0F0;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med20_change }}/{{ this.$route.query.actual_num[19] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual20() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog20 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Valiu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual20()==0"
          style="background-color: #CEFFCE;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med20_change }}/{{ this.$route.query.actual_num[19] }}</h5>
            <v-spacer></v-spacer>
            <h5> 
              ({{ isEqual20() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog20 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Valiu
            </v-btn>
          </div>
        </v-card>
        <v-card
          class="pa-0"
          outlined
          tile
          v-else-if="isEqual20() !=0"
          style="background-color: #FFD2D2;">
          <v-card-text class="py-2 text-center">
            <h5>{{ med20_change }}/{{ this.$route.query.actual_num[19] }}</h5>
            <v-spacer></v-spacer>
            <h5 v-if="isEqual20>0">
              (+{{ isEqual20() }})
            </h5>
            <h5 v-else>
              ({{ isEqual20() }})
            </h5>
          </v-card-text>
          <div class="py-0 text-center">
            <v-btn
              class="mt-n6 pa-0"
              text
              @click="dialog20 = true"
              x-small
            >
              <v-icon x-small>
                mdi-pencil
              </v-icon>
              Valiu
            </v-btn>
          </div>
        </v-card>
      </v-col>


      <v-dialog
        v-model="dialog1"
        max-width="500px">
        <v-card>
          <v-card-title>
            Succinylcholine
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save1"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog1 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
        max-width="500px">
        <v-card>
          <v-card-title>
            Naloxone
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save2"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog2 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog3"
        max-width="500px">
        <v-card>
          <v-card-title>
            Lasix
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save3"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog3 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog4"
        max-width="500px">
        <v-card>
          <v-card-title>
            Solu-cortef
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save4"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog4 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog5"
        max-width="500px">
        <v-card>
          <v-card-title>
            NTG
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save5"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog5 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog6"
        max-width="500px">
        <v-card>
          <v-card-title>
            Dobutrex
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save6"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog6 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog7"
        max-width="500px">
        <v-card>
          <v-card-title>
            Isoptin
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save7"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog7 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog8"
        max-width="500px">
        <v-card>
          <v-card-title>
            Levophed
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save8"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog8 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog9"
        max-width="500px">
        <v-card>
          <v-card-title>
            Digoxin
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save9"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog9 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog10"
        max-width="500px">
        <v-card>
          <v-card-title>
            Dilantin
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save10"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog10 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog11"
        max-width="500px">
        <v-card>
          <v-card-title>
            Sod.bicarbonate
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save11"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog11 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog12"
        max-width="500px">
        <v-card>
          <v-card-title>
            Cordarone
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save12"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog12 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog13"
        max-width="500px">
        <v-card>
          <v-card-title>
            Mag sulfate
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save13"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog13 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog14"
        max-width="500px">
        <v-card>
          <v-card-title>
            Dopamine
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save14"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog14 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog15"
        max-width="500px">
        <v-card>
          <v-card-title>
            Cal Gluconate
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save15"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog15 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog16"
        max-width="500px">
        <v-card>
          <v-card-title>
            Bosmin
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save16"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog16 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog17"
        max-width="500px">
        <v-card>
          <v-card-title>
            Adenocor
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save17"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog17 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog18"
        max-width="500px">
        <v-card>
          <v-card-title>
            Atropine
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save18"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog18 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog19"
        max-width="500px">
        <v-card>
          <v-card-title>
            Lidocaine
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save19"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog19 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog20"
        max-width="500px">
        <v-card>
          <v-card-title>
            Valium
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="請輸入數量"
              v-model="new_num"
              required>
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="save20"
            >
            確定
            </v-btn>
            <v-btn
              text
              @click="dialog20 = false"
            >
            取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        med1_change: this.$route.query.num.split(",")[0],
        med2_change: this.$route.query.num.split(",")[1],
        med3_change: this.$route.query.num.split(",")[2],
        med4_change: this.$route.query.num.split(",")[3],
        med5_change: this.$route.query.num.split(",")[4],
        med6_change: this.$route.query.num.split(",")[5],
        med7_change: this.$route.query.num.split(",")[6],
        med8_change: this.$route.query.num.split(",")[7],
        med9_change: this.$route.query.num.split(",")[8],
        med10_change: this.$route.query.num.split(",")[9],
        med11_change: this.$route.query.num.split(",")[10],
        med12_change: this.$route.query.num.split(",")[11],
        med13_change: this.$route.query.num.split(",")[12],
        med14_change: this.$route.query.num.split(",")[13],
        med15_change: this.$route.query.num.split(",")[14],
        med16_change: this.$route.query.num.split(",")[15],
        med17_change: this.$route.query.num.split(",")[16],
        med18_change: this.$route.query.num.split(",")[17],
        med19_change: this.$route.query.num.split(",")[18],
        med20_change: this.$route.query.num.split(",")[19],

        med1_actual: this.$route.query.actual_num[0],
        med2_actual: this.$route.query.actual_num[1],
        med3_actual: this.$route.query.actual_num[2],
        med4_actual: this.$route.query.actual_num[3],
        med5_actual: this.$route.query.actual_num[4],
        med6_actual: this.$route.query.actual_num[5],
        med7_actual: this.$route.query.actual_num[6],
        med8_actual: this.$route.query.actual_num[7],
        med9_actual: this.$route.query.actual_num[8],
        med10_actual: this.$route.query.actual_num[9],
        med11_actual: this.$route.query.actual_num[10],
        med12_actual: this.$route.query.actual_num[11],
        med13_actual: this.$route.query.actual_num[12],
        med14_actual: this.$route.query.actual_num[13],
        med15_actual: this.$route.query.actual_num[14],
        med16_actual: this.$route.query.actual_num[15],
        med17_actual: this.$route.query.actual_num[16],
        med18_actual: this.$route.query.actual_num[17],
        med19_actual: this.$route.query.actual_num[18],
        med20_actual: this.$route.query.actual_num[19],
        
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog7: false,
        dialog8: false,
        dialog9: false,
        dialog10: false,
        dialog11: false,
        dialog12: false,
        dialog13: false,
        dialog14: false,
        dialog15: false,
        dialog16: false,
        dialog17: false,
        dialog18: false,
        dialog19: false,
        dialog20: false,
        new_num: null,
      }
    },
    methods: {
      isEqual1() {
        var temp = parseInt(this.med1_change) - parseInt(this.med1_actual);
        return temp;
      },
      isEqual2() {
        var temp = parseInt(this.med2_change) - parseInt(this.med2_actual);
        return temp;
      },
      isEqual3() {
        var temp = parseInt(this.med3_change) - parseInt(this.med3_actual);
        return temp;
      },
      isEqual4() {
        var temp = parseInt(this.med4_change) - parseInt(this.med4_actual);
        return temp;
      },
      isEqual5() {
        var temp = parseInt(this.med5_change) - parseInt(this.med5_actual);
        return temp;
      },
      isEqual6() {
        var temp = parseInt(this.med6_change) - parseInt(this.med6_actual);
        return temp;
      },
      isEqual7() {
        var temp = parseInt(this.med7_change) - parseInt(this.med7_actual);
        return temp;
      },
      isEqual8() {
        var temp = parseInt(this.med8_change) - parseInt(this.med8_actual);
        return temp;
      },
      isEqual9() {
        var temp = parseInt(this.med9_change) - parseInt(this.med9_actual);
        return temp;
      },
      isEqual10() {
        var temp = parseInt(this.med10_change) - parseInt(this.med10_actual);
        return temp;
      },
      isEqual11() {
        var temp = parseInt(this.med11_change) - parseInt(this.med11_actual);
        return temp;
      },
      isEqual12() {
        var temp = parseInt(this.med12_change) - parseInt(this.med12_actual);
        return temp;
      },
      isEqual13() {
        var temp = parseInt(this.med13_change) - parseInt(this.med13_actual);
        return temp;
      },
      isEqual14() {
        var temp = parseInt(this.med14_change) - parseInt(this.med14_actual);
        return temp;
      },
      isEqual15() {
        var temp = parseInt(this.med15_change) - parseInt(this.med15_actual);
        return temp;
      },
      isEqual16() {
        var temp = parseInt(this.med16_change) - parseInt(this.med16_actual);
        return temp;
      },
      isEqual17() {
        var temp = parseInt(this.med17_change) - parseInt(this.med17_actual);
        return temp;
      },
      isEqual18() {
        var temp = parseInt(this.med18_change) - parseInt(this.med18_actual);
        return temp;
      },
      isEqual19() {
        var temp = parseInt(this.med19_change) - parseInt(this.med19_actual);
        return temp;
      },
      isEqual20() {
        var temp = parseInt(this.med20_change) - parseInt(this.med20_actual);
        return temp;
      },
      save1(){
        this.med1_change = this.new_num;
        this.$emit("med01_new", this.med1_change);
        this.new_num = null;
        this.dialog1 = false;
      },
      save2(){
        this.med2_change = this.new_num;
        this.$emit("med02_new", this.med2_change);
        //alert(this.med2_change)
        this.new_num = null;
        this.dialog2 = false;
      },
      save3(){
        this.med3_change = this.new_num;
        this.$emit("med03_new", this.med3_change);
        this.new_num = null;
        this.dialog3 = false;
      },
      save4(){
        this.med4_change = this.new_num;
        this.$emit("med04_new", this.med4_change);
        this.new_num = null;
        this.dialog4 = false;
      },
      save5(){
        this.med5_change = this.new_num;
        this.$emit("med05_new", this.med5_change);
        this.new_num = null;
        this.dialog5 = false;
      },
      save6(){
        this.med6_change = this.new_num;
        this.$emit("med06_new", this.med6_change);
        this.new_num = null;
        this.dialog6 = false;
      },
      save7(){
        this.med7_change = this.new_num;
        this.$emit("med07_new", this.med7_change);
        this.new_num = null;
        this.dialog7 = false;
      },
      save8(){
        this.med8_change = this.new_num;
        this.$emit("med08_new", this.med8_change);
        this.new_num = null;
        this.dialog8 = false;
      },
      save9(){
        this.med9_change = this.new_num;
        this.$emit("med09_new", this.med9_change);
        this.new_num = null;
        this.dialog9 = false;
      },
      save10(){
        this.med10_change = this.new_num;
        this.$emit("med10_new", this.med10_change);
        this.new_num = null;
        this.dialog10 = false;
      },
      save11(){
        this.med11_change = this.new_num;
        this.$emit("med11_new", this.med11_change);
        this.new_num = null;
        this.dialog11 = false;
      },
      save12(){
        this.med12_change = this.new_num;
        this.$emit("med12_new", this.med12_change);
        this.new_num = null;
        this.dialog12 = false;
      },
      save13(){
        this.med13_change = this.new_num;
        this.$emit("med13_new", this.med13_change);
        this.new_num = null;
        this.dialog13 = false;
      },
      save14(){
        this.med14_change = this.new_num;
        this.$emit("med14_new", this.med14_change);
        this.new_num = null;
        this.dialog14 = false;
      },
      save15(){
        this.med15_change = this.new_num;
        this.$emit("med15_new", this.med15_change);
        this.new_num = null;
        this.dialog15 = false;
      },
      save16(){
        this.med16_change = this.new_num;
        this.$emit("med16_new", this.med16_change);
        this.new_num = null;
        this.dialog16 = false;
      },
      save17(){
        this.med17_change = this.new_num;
        this.$emit("med17_new", this.med17_change);
        this.new_num = null;
        this.dialog17 = false;
      },
      save18(){
        this.med18_change = this.new_num;
        this.$emit("med18_new", this.med18_change);
        this.new_num = null;
        this.dialog18 = false;
      },
      save19(){
        this.med19_change = this.new_num;
        this.$emit("med19_new", this.med19_change);
        this.new_num = null;
        this.dialog19 = false;
      },
      save20(){
        this.med20_change = this.new_num;
        this.$emit("med20_new", this.med20_change);
        this.new_num = null;
        this.dialog20 = false;
      },
    }
  }
</script>