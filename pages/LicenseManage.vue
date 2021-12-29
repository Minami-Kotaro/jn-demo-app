<template>
  <div class="bg">
    <HeaderMenu />
    <LicenseList />
  </div>
</template>

<script>
import{ defineComponent } from '@vue/composition-api'
import AddContractDialog from '~/components/AddContractDialog.vue'

export default defineComponent ({
  setup(){
    // const router = useRouter()
    // return {}
  }
});
</script>

<style scoped>
.bg{
  background: linear-gradient(#1C74B7,32%,#FFF);
  height: 100vh;
}
</style>
