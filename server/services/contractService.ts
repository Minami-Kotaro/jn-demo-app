import { ContractListResponse } from "../apiModels/response";
import * as contractRepository  from "../repositories/contractRepository";

export async function FetchContracts():Promise<ContractListResponse[]>{

  const contracts = await contractRepository.SelectContracts();
  return contracts.map(x=>({
    contractId:x.contractId,
    contractorName: x.contractorName,
    contractManagerName:x.contractManagerName,
    contractManagerMailAddress:x.contractManagerMailAddress,
    userName:x.userName,
    userMailAddress:x.userMailAddress,
    renewalCount:x.renewalCount,
    salesStaffName:x.salesStaffName,
    contractDate:x.contractDate,
    validStartDate:x.validStartDate,
    validEndDate:x.validEndDate,
    isDeleted:x.isDeleted,
  })
  )
}
