import { getRepository } from "typeorm"
import { Users } from '../entity/Users'
import { Request, Response } from 'express'

export const getUsers = async (request: Request, response: Response) => {

  const users = await getRepository(Users).find()

  return response.json(users)
}

export const getUser = async (request: Request, response: Response) => {
  const { id } = request.params

  const user = await getRepository(Users).findOne(id)

  return response.json(user)
}

export const saveUser = async (request: Request, response: Response) => {

  const user = await getRepository(Users).save(request.body)

  return response.json(user)
}

export const updateUser = async (request: Request, response: Response) => {
  const { id } = request.params

  const user = await getRepository(Users).update(id, request.body)

  if (user.affected === 1) {
    const userUpdated = await getRepository(Users).findOne(id)

    return response.json(userUpdated)
  }

  return response.status(404).json({ message: "User not found" })
}

export const removeUser = async (request: Request, response: Response) => {
  const { id } = request.params

  const user = await getRepository(Users).delete(id)

  if (user.affected === 1) {
    return response.json({ message: "User removed" })
  }

  return response.status(404).json({ message: "User not found" })
}