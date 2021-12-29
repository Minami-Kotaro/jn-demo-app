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
          <div class="ma-2">契約内容を入力してください</div>
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="契約先名" class="pt-2" />
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="利用先名" />
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="利用サービス名" />
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="申込件数" />
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="営業担当者名" />
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="契約日" />
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="利用開始日" />
            <v-text-field dense color="#1C74B7" background-color="#edf5fa" label="契約責任者名" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="dialog = false"
          >
            登録
          </v-btn>
          <v-btn
            @click="dialog = false"
          >
            キャンセル
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
