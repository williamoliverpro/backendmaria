import { getRepository } from "typeorm"
import { OrderDetails } from '../entity/OrderDetails'
import { Request, Response } from 'express'

export const getOrdersDetails = async (request: Request, response: Response) => {

  const ordersDetails = await getRepository(OrderDetails).find()

  return response.json(ordersDetails)
}

export const getOrderDetails = async (request: Request, response: Response) => {
  const { id } = request.params

  const orderDetails = await getRepository(OrderDetails).findOne(id)

  return response.json(orderDetails)
}

export const saveOrderDetails = async (request: Request, response: Response) => {

  const orderDetails = await getRepository(OrderDetails).save(request.body)

  return response.json(orderDetails)
}

export const updateOrderDetails = async (request: Request, response: Response) => {
  const { id } = request.params

  const orderDetails = await getRepository(OrderDetails).update(id, request.body)

  if (orderDetails.affected === 1) {
    const orderDetailsUpdated = await getRepository(OrderDetails).findOne(id)

    return response.json(orderDetailsUpdated)
  }

  return response.status(404).json({ message: "Order details not found" })
}

export const removeOrderDetails = async (request: Request, response: Response) => {
  const { id } = request.params

  const order = await getRepository(OrderDetails).delete(id)

  if (order.affected === 1) {
    return response.json({ message: "Order details removed" })
  }

  return response.status(404).json({ message: "Order details not found" })
}