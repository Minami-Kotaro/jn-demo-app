import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { M_Contract_Manager } from "./m_contoract_manager"
import { M_User } from "./m_user"

@Entity({ name: "m_contracts" })
export class M_Contract extends BaseEntity {

  @PrimaryColumn("integer",{name:"contract_id"})
  contractId: number

  @Column("varchar",{name:"contractor_name"})
  contractorName: string

  @Column("integer",{name:"contract_manager_id"})
  contractManagerId: number

  @Column("integer",{name:"user_id"})
  userId: number

  @Column("integer",{name:"renewal_count"})
  renewalCount: number

  @Column("varchar",{name:"sales_staff_name"})
  salesStaffName: string

  @Column("timestamp",{name:"contract_date"})
  contractDate: Date

  @Column("timestamp",{name:"valid_start_date"})
  validStartDate: Date

  @Column("timestamp",{name:"valid_end_date"})
  validEndDate: Date

  @Column("boolean",{name:"is_deleted"})
  isDeleted: boolean

  @Column("timestamp",{name:"create_date"})
  createDate: Date

  @Column("timestamp",{name:"update_date"})
  updateDate: Date

  @ManyToOne(() => M_User,user => user.contracts)
  @JoinColumn({name:"user_id"})
  user: M_User

  @ManyToOne(() => M_Contract_Manager, contractManager => contractManager.contracts)
  @JoinColumn({name:"contract_manager_id"})
  contractManager: M_Contract_Manager

  public setData(data:{
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
  }) {
    this.contractId= data.contractId
    this.contractorName= data.contractorName
    this.contractManagerId= data.contractManagerId
    this.userId= data.userId
    this.renewalCount= data.renewalCount
    this.salesStaffName= data.salesStaffName
    this.contractDate= data.contractDate
    this.validStartDate= data.validStartDate
    this.validEndDate= data.validEndDate
    this.isDeleted= data.isDeleted
    this.createDate= data.createDate
    this.updateDate= data.updateDate
  }

  public update (data:{
    contractorName:string,
    contractManagerId:number,
    userId:number,
    salesStaffName:string,
    contractDate:Date
    validStartDate:Date,
    validEndDate:Date,
    updateDate:Date}):void {
      this.contractorName= data.contractorName
      this.contractManagerId= data.contractManagerId
      this.userId= data.userId
      this.salesStaffName= data.salesStaffName
      this.contractDate= data.contractDate
      this.validStartDate= data.validStartDate
      this.validEndDate= data.validEndDate
      this.updateDate= data.updateDate
  }
}
