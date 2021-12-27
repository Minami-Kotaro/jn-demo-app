import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { use } from "vue/types/umd"
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
}
