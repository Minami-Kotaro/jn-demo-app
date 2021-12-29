<template>
  <div class="bg d-flex justify-center">
    <div class="login-form-box mt-4">
      <div class="login-form-title pa-4">License Manager</div>
      <div class="d-flex justify-center flex-wrap">
        <div class="item-width">
          <v-text-field color="#1C74B7" background-color="#edf5fa" label=" ID" autofocus />
        </div>
        <div class="item-width">
          <v-text-field color="#1C74B7" background-color="#edf5fa" label=" PW" type="password" />
        </div>
      <v-btn rounded color="primary" width="400px" @click="handleClickSignInButton">Sign in</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import{ defineComponent } from '@vue/composition-api'
import{ useRouter } from '@nuxtjs/composition-api'

export default defineComponent ({
  setup(){
    const router = useRouter()
    const handleClickSignInButton = () => {
      router.push('/LicenseManage')
    }
    return {handleClickSignInButton}
  }
});
</script>

<style scoped>
.bg{
  background: linear-gradient(#1C74B7,32%,#FFF);
  height: 100vh;
  }

.login-form-box{
  width: 560px;
  height: 320px;
  background:#FFF;
  border-radius: 10px;
  position: relative;
  top: 20%;
}

.login-form-title{
  text-align: center;
  font-size: 30px;
  color: #1C74B7;
}

.item-width{
  width: 400px;
}
</style>

function useRouter() {
  throw new Error('Function not implemented.');
}
