import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import { ContractListResponse } from "server/apiModels/response"
import { Get } from "./http/httpClient"

@Module({
  name: "contractList",
  namespaced: true,
  stateFactory: true,
})
export default class ContractListModule extends VuexModule {
  contracts: ContractListResponse[] = [
    {
      contractId: 0,
      contractorName: "",
      contractManagerName: "",
      contractManagerMailAddress: "",
      userName: "",
      userMailAddress: "",
      renewalCount: 0,
      salesStaffName: "",
      contractDate: new Date(),
      validStartDate: new Date(),
      validEndDate: new Date(),
      isDeleted: false,
    },
  ]

  @Mutation
  SET_CONTRACTS(data: ContractListResponse[]) {
    this.contracts = data
  }

  @Action
  async getContracts() {
    const resp = await Get<ContractListResponse[]>(
      "/contracts/",
      undefined,
      undefined,
      undefined
    )
    resp.data.map((x) => ({
      ...x,
    }))
    this.SET_CONTRACTS(resp.data)
  }
}
