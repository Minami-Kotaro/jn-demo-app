import { contractModel } from "../models/contractModel";
import { getRepository } from "typeorm";
import { M_Contract } from "../db/entity/m_contract";

const contractRepository = getRepository(M_Contract)

export async function SelectContracts():Promise<contractModel[]> {

  const contracts = await contractRepository.find({relations:["user","contractManager"]})
  return contracts.map(x => (
    {
      contractId:x.contractId,
      contractorName: x.contractorName,
      contractManagerName:x.contractManager.contractManagerName,
      contractManagerMailAddress:x.contractManager.contractManagerMailAddress,
      userName:x.user.userName,
      userMailAddress:x.user.userMailAddress,
      renewalCount:x.renewalCount,
      salesStaffName:x.salesStaffName,
      contractDate:x.contractDate,
      validStartDate:x.validStartDate,
      validEndDate:x.validEndDate,
      isDeleted:x.isDeleted,
    }
  ))
}
