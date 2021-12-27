import { NotFoundError } from "routing-controllers";
import { PostContractRequest, PutContractRequest } from "../apiModels/request";
import { ContractListResponse } from "../apiModels/response";
import { InsertUpdateContractModel } from "../models/contractModel";
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

export async function InsertContract(req:PostContractRequest):Promise<void>{
  const id = await contractRepository.GetNextContractId()
  const now = new Date()
  const newContract:InsertUpdateContractModel = {
    contractId:id,
    contractorName:req.contractorName,
    contractManagerId:req.contractManagerId,
    userId:req.userId,
    renewalCount:1,
    salesStaffName:req.salesStaffName,
    contractDate:req.contractDate,
    validStartDate:req.validStartDate,
    validEndDate:req.validEndDate,
    isDeleted:false,
    createDate:now,
    updateDate:now
  }

  await contractRepository.InsertContracts(newContract)

}

export async function UpdateContract(contractId:number,req:PutContractRequest):Promise<void>{
  const contract = await contractRepository.SelectContract(contractId)
  if(!contract) throw new NotFoundError("契約が存在しません。")

  const updatedContract:InsertUpdateContractModel = {
    contractId:contractId,
    contractorName:req.contractorName,
    contractManagerId:req.contractManagerId,
    userId:req.userId,
    renewalCount:contract.renewalCount,
    salesStaffName:req.salesStaffName,
    contractDate:req.contractDate,
    validStartDate:req.validStartDate,
    validEndDate:req.validEndDate,
    isDeleted:false,
    createDate:contract.createDate,
    updateDate:new Date()
  }

  await contractRepository.UpdateContract(updatedContract)

}

export async function DeleteContract(contractId:number):Promise<void>{
  const contract = await contractRepository.SelectContract(contractId)
  if(!contract) throw new NotFoundError("契約が存在しません。")
  await contractRepository.DeleteContract(contractId)

}


