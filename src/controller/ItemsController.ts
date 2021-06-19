import { getRepository } from "typeorm"
import { Items } from '../entity/Items'
import { Request, Response } from 'express'

export const getItems = async (request: Request, response: Response) => {

  const items = await getRepository(Items).find()

  return response.json(items)
}

export const getItem = async (request: Request, response: Response) => {
  const { id } = request.params

  const item = await getRepository(Items).findOne(id)

  return response.json(item)
}

export const saveItem = async (request: Request, response: Response) => {

  const item = await getRepository(Items).save(request.body)

  return response.json(item)
}

export const updateItem = async (request: Request, response: Response) => {
  const { id } = request.params

  const item = await getRepository(Items).update(id, request.body)

  if (item.affected === 1) {
    const itemUpdated = await getRepository(Items).findOne(id)

    return response.json(itemUpdated)
  }

  return response.status(404).json({ message: "Item not found" })
}

export const removeItem = async (request: Request, response: Response) => {
  const { id } = request.params

  const item = await getRepository(Items).delete(id)

  if (item.affected === 1) {
    return response.json({ message: "Item removed" })
  }

  return response.status(404).json({ message: "Item not found" })
}