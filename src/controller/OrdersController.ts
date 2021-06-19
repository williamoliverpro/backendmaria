import { getRepository } from "typeorm"
import { Orders } from '../entity/Orders'
import { Request, Response } from 'express'

export const getOrders = async (request: Request, response: Response) => {

  const orders = await getRepository(Orders).find()

  return response.json(orders)
}

export const getOrder = async (request: Request, response: Response) => {
  const { id } = request.params

  const order = await getRepository(Orders).findOne(id)

  return response.json(order)
}

export const saveOrder = async (request: Request, response: Response) => {

  const order = await getRepository(Orders).save(request.body)

  return response.json(order)
}

export const updateOrder = async (request: Request, response: Response) => {
  const { id } = request.params

  const order = await getRepository(Orders).update(id, request.body)

  if (order.affected === 1) {
    const orderUpdated = await getRepository(Orders).findOne(id)

    return response.json(orderUpdated)
  }

  return response.status(404).json({ message: "Order not found" })
}

export const removeOrder = async (request: Request, response: Response) => {
  const { id } = request.params

  const order = await getRepository(Orders).delete(id)

  if (order.affected === 1) {
    return response.json({ message: "Order removed" })
  }

  return response.status(404).json({ message: "Order not found" })
}