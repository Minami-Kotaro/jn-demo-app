<template>
  <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          block color="primary"
          v-bind="attrs"
          v-on="on"
        >
          新規追加
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          新規契約
        </v-card-title>

        <v-card-text>
          <div class="d-flex align-center">
            <div>契約先名</div>
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="入力してください" />
          </div>
          <div class="d-flex align-center">
            <div>契約先名</div>
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="入力してください" />
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            登録
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import{ defineComponent } from '@vue/composition-api'

export default defineComponent ({
  setup(){
    const addContractDialog = true
  }
});
</script>

<style scoped>

</style>
