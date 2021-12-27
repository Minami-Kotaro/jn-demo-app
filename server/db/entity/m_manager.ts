import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { M_Contract } from "./m_contract"

@Entity({ name: "m_managers" })
export class M_Manager extends BaseEntity {
  @PrimaryColumn("integer",{name:"manager_id"})
  managerId: number

  @Column("varchar",{name:"manager_name"})
  managerName: string

  @Column("varchar",{name:"manager_mail_address"})
  managerMailAddress: string

  @Column("varchar",{name:"password"})
  password: string

  @Column("timestamp",{name:"create_date"})
  createDate: Date

  @Column("timestamp",{name:"update_date"})
  updateDate: Date
}
