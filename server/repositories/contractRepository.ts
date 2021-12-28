import {
  ContractModel,
  InsertUpdateContractModel,
} from "../models/contractModel"
import { getManager, getRepository } from "typeorm"
import { M_Contract } from "../db/entity/m_contract"

const contractRepository = getRepository(M_Contract)

export async function GetNextContractId(): Promise<number> {
  const query = getManager()
  const result = await query
    .query("select nextval('seq_contract_id')")
    .then((data) => Number(data[0].nextval))

  return result
}

export async function SelectContracts(): Promise<ContractModel[]> {
  const contracts = await contractRepository.find({
    relations: ["user", "contractManager"],
  })
  return contracts.map((x) => ({
    contractId: x.contractId,
    contractorName: x.contractorName,
    contractManagerName: x.contractManager.contractManagerName,
    contractManagerMailAddress: x.contractManager.contractManagerMailAddress,
    userName: x.user.userName,
    userMailAddress: x.user.userMailAddress,
    renewalCount: x.renewalCount,
    salesStaffName: x.salesStaffName,
    contractDate: x.contractDate,
    validStartDate: x.validStartDate,
    validEndDate: x.validEndDate,
    isDeleted: x.isDeleted,
    createDate: x.createDate,
    updateDate: x.updateDate,
  }))
}

export async function SelectContract(
  contractId: number
): Promise<ContractModel | undefined> {
  const contract = await contractRepository.findOne({
    relations: ["user", "contractManager"],
    where: { contractId: contractId },
  })

  if (!contract) return undefined

  return {
    contractId: contract.contractId,
    contractorName: contract.contractorName,
    contractManagerName: contract.contractManager.contractManagerName,
    contractManagerMailAddress:
      contract.contractManager.contractManagerMailAddress,
    userName: contract.user.userName,
    userMailAddress: contract.user.userMailAddress,
    renewalCount: contract.renewalCount,
    salesStaffName: contract.salesStaffName,
    contractDate: contract.contractDate,
    validStartDate: contract.validStartDate,
    validEndDate: contract.validEndDate,
    isDeleted: contract.isDeleted,
    createDate: contract.createDate,
    updateDate: contract.updateDate,
  }
}

export async function InsertContracts(
  contract: InsertUpdateContractModel
): Promise<void> {
  const newContract = new M_Contract()
  newContract.setData(contract)
  await contractRepository.save(newContract)
}

export async function UpdateContract(
  contract: InsertUpdateContractModel
): Promise<void> {
  const updateContract = await contractRepository.findOne({
    where: { contractId: contract.contractId },
  })
  if (!updateContract) return

  updateContract.update({ ...contract })

  await contractRepository.save(updateContract)
}

export async function DeleteContract(contractId: number): Promise<void> {
  await contractRepository.update(contractId, { isDeleted: true })
}
