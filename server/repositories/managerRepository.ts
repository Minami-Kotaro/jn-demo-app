import { getRepository } from "typeorm"
import { M_Manager } from "../db/entity/m_manager"
import { ManagerModel } from "../models/managerModel"

const managerRepository = getRepository(M_Manager)

export async function SelectManager(
  mailAddress: string,
  password: string
): Promise<ManagerModel | undefined> {
  const manager = await managerRepository.findOne({
    where: { managerMailAddress: mailAddress, password: password },
  })

  if (!manager) return undefined

  return {
    managerId: manager.managerId,
    managerName: manager.managerName,
    managerMailAddress: manager.managerMailAddress,
    password: manager.password,
  }
}
