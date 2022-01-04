<template>
<div>
  <div class="d-flex list-header mt-4 mx-4">
    <div class="pa-1 contract-num-column">契約番号</div>
    <div class="pa-1 contractor-column flex-grow-1">契約先名</div>
    <div class="pa-1 service-user-column flex-grow-1">利用先</div>
    <div class="pa-1 update-count-column">更新回数</div>
    <div class="pa-1 sales-staff-column">営業担当</div>
    <div class="pa-1 contract-date-column">契約日</div>
    <div class="pa-1 start-date-column">開始日</div>
    <div class="pa-1 end-date-column">終了日</div>
    <div class="pa-1 contract-manager-column">契約責任者</div>
    <div class="pa-1 edit-btn-column"></div>
  </div>
  <div class="d-flex list-row mt-4 mx-4"
    v-for="item in contracts" :key="item.contractId"
  >
    <div class="pa-1 contract-num-column">{{item.contractId}}</div>
    <div class="pa-1 contractor-column flex-grow-1">{{item.contractorName}}</div>
    <div class="pa-1 service-user-column flex-grow-1">{{item.userName}}</div>
    <div class="pa-1 update-count-column">{{item.renewalCount}}</div>
    <div class="pa-1 sales-staff-column">{{item.salesStaffName}}</div>
    <div class="pa-1 contract-date-column">{{formatDate(item.contractDate)}}</div>
    <div class="pa-1 start-date-column">{{formatDate(item.validStartDate)}}</div>
    <div class="pa-1 end-date-column">{{formatDate(item.validEndDate)}}</div>
    <div class="pa-1 contract-manager-column">{{item.contractManagerName}}</div>
    <div class="pa-1 edit-btn-column"><v-btn x-small>Edit</v-btn></div>
  </div>
  <div class="mt-4 mx-4">
    <AddContractDialog />
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent} from '@vue/composition-api'
import { useRouter } from '@nuxtjs/composition-api'
import { contractListStore } from '~/store';

export default defineComponent ({
  setup(){
    const router = useRouter()
    const contracts = computed(() => contractListStore.contracts);
    const handleClickSignInButton = () => {
      router.push('/ContractManage')
    }
    function formatDate(data:Date){
      const date = new Date(data)
      const year = date.getFullYear()
      const month = date.getMonth()+1
      const day = date.getDate();
      return `${year}/${month}/${day}`
    }

    //created
    contractListStore.getContracts()

    return {contracts, handleClickSignInButton,formatDate}
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
  text-align: center;
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
.update-count-column{
  width: 72px;
}
.apply-num-column{
  width: 72px;
}
.sales-staff-column{
  width: 152px;
}
.contract-date-column{
  width: 96px;
}
.start-date-column{
  width: 96px;
}
.end-date-column{
  width: 96px;
}
.contract-manager-column{
  width: 152px;
}
.edit-btn-column{
  width:48px;
}
</style>

</style>
