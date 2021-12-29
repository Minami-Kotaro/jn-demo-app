<template>
  <div class="header-main d-flex justify-space-between pa-4">
    <div class="header-title">
      License Manager
    </div>
    <div class="d-flex align-center">
      <v-btn @click="handleClickLogOutButton">Log out</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import{ defineComponent } from '@vue/composition-api'
import{ useRouter } from '@nuxtjs/composition-api'

export default defineComponent ({
  setup(){
    const router = useRouter()
    const handleClickLogOutButton = () => {
      router.push('/')
    }
    return {handleClickLogOutButton}
  }
});
</script>

<style scoped>
.header-main{
  height: 80px;
  background-color: #fff;
}
.header-title{
  font-size: 32px;
}
</style>

