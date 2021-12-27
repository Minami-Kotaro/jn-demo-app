import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm"
import { M_Contract } from "./m_contract"

@Entity({ name: "m_contract_managers" })
export class M_Contract_Manager extends BaseEntity {
  @PrimaryColumn("integer",{name:"contract_manager_id"})
  contractManagerId: number

  @Column("varchar",{name:"contract_manager_name"})
  contractManagerName: string

  @Column("varchar",{name:"contract_manager_mail_address"})
  contractManagerMailAddress: string

  @Column("timestamp",{name:"create_date"})
  createDate: Date

  @Column("timestamp",{name:"update_date"})
  updateDate: Date

  @OneToMany(() => M_Contract, contract => contract.contractManager)
  contracts: M_Contract[]
}
