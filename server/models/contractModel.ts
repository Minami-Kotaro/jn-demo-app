export interface ContractModel{
  contractId:number;
  contractorName:string;
  contractManagerName:string;
  contractManagerMailAddress:string;
  userName:string;
  userMailAddress:string;
  renewalCount:number;
  salesStaffName:string;
  contractDate:Date;
  validStartDate:Date;
  validEndDate:Date;
  isDeleted:boolean;
  createDate:Date;
  updateDate:Date;
}

export interface InsertUpdateContractModel{
  contractId:number;
  contractorName:string;
  contractManagerId:number;
  userId:number;
  renewalCount:number;
  salesStaffName:string;
  contractDate:Date;
  validStartDate:Date;
  validEndDate:Date;
  isDeleted:boolean;
  createDate:Date;
  updateDate:Date
}
