<template>
<div>
  <div class="d-flex list-header mt-4 mx-4">
    <div class="pa-1 contract-num-column">契約番号</div>
    <div class="pa-1 contractor-column flex-grow-1">契約先名</div>
    <div class="pa-1 service-user-column flex-grow-1">利用先</div>
    <div class="pa-1 service-name-column flex-grow-1">サービス</div>
    <div class="pa-1 update-num-column">更新回数</div>
    <div class="pa-1 apply-num-column">申込件数</div>
    <div class="pa-1 sales-staff-column">営業担当</div>
    <div class="pa-1 contract-date-column">契約日</div>
    <div class="pa-1 state-date-column">開始日</div>
    <div class="pa-1 end-date-column">終了日</div>
    <div class="pa-1 contract-manager-column">契約責任者</div>
    <div class="pa-1 edit-btn-column"></div>
  </div>
  <div class="d-flex list-row mt-4 mx-4">
    <!-- v-for="item in contracts" :key="item.contractNum" -->
    <div class="pa-1 contract-num-column">{{contractNum}}</div>
    <div class="pa-1 contractor-column flex-grow-1">{{contractorName}}</div>
    <div class="pa-1 service-user-column flex-grow-1">{{serviceUserName}}</div>
    <div class="pa-1 service-name-column flex-grow-1">{{serviceName}}</div>
    <div class="pa-1 update-num-column">{{updateNum}}</div>
    <div class="pa-1 apply-num-column">{{applyNum}}</div>
    <div class="pa-1 sales-staff-column">{{salesStaffName}}</div>
    <div class="pa-1 contract-date-column">{{contractDate}}</div>
    <div class="pa-1 state-date-column">{{startDate}}</div>
    <div class="pa-1 end-date-column">{{endDate}}</div>
    <div class="pa-1 contract-manager-column">{{contractManagerName}}</div>
    <div class="pa-1 edit-btn-column"><v-btn>編集</v-btn></div>
  </div>
  <div class="mt-4 mx-4">
    <AddContractDialog />
  </div>
</div>
</template>

<script lang="ts">
import{ defineComponent } from '@vue/composition-api'
import{ useRouter } from '@nuxtjs/composition-api'
import AddContractDialog from './AddContractDialog.vue';

export default defineComponent ({
  components: { AddContractDialog },
  setup(){
    const router = useRouter()
    const handleClickSignInButton = () => {
      router.push('/ContractManage')
    }
    return {handleClickSignInButton}
  }
});
</script>

<style scoped>
.list-header{
  background-color:#707070;
  color: #fff;
  text-align: center;
}
.list-row{
  background-color: white;
}
.contract-num-column{
  width: 72px;
}
.contractor-column{
  min-width: 152px;
}
.service-user-column{
  min-width: 152px
}
.service-name-column{
  min-width: 152px
}
.update-num-column{
  width: 72px;
}
.apply-num-column{
  width: 72px;
}
.sales-staff-column{
  max-width: 152px;
}
.contract-date-column{
  width: 96px;
}
.state-date-column{
  width: 96px;
}
.end-date-column{
  width: 96px;
}
.contract-manager-column{
  max-width: 152px;
}
.edit-btn-column{
  width:48px;
}
</style>

</style>
