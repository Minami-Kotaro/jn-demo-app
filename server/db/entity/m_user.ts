import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm"
import { M_Contract_Manager } from "./m_contoract_manager"
import { M_Contract } from "./m_contract"

@Entity({ name: "m_users" })
export class M_User extends BaseEntity {
  @PrimaryColumn("integer",{name:"user_id"})
  userId: number

  @Column("varchar",{name:"user_name"})
  userName: string

  @Column("varchar",{name:"user_mail_address"})
  userMailAddress: string

  @Column("timestamp",{name:"create_date"})
  createDate: Date

  @Column("timestamp",{name:"update_date"})
  updateDate: Date

  @OneToMany(() => M_Contract, contract => contract.user)
  contracts: M_Contract[]
}
