import { getRepository } from "typeorm"
import { Customers } from '../entity/Customers'
import { Request, Response } from 'express'

export const getCustomers = async (request: Request, response: Response) => {

  const customers = await getRepository(Customers).find()

  return response.json(customers)
}

export const getCustomer = async (request: Request, response: Response) => {
  const { id } = request.params

  const customer = await getRepository(Customers).findOne(id)

  return response.json(customer)
}

export const saveCustomer = async (request: Request, response: Response) => {

  const customer = await getRepository(Customers).save(request.body)

  return response.json(customer)
}

export const updateCustomer = async (request: Request, response: Response) => {
  const { id } = request.params

  const customer = await getRepository(Customers).update(id, request.body)

  if (customer.affected === 1) {
    const customerUpdated = await getRepository(Customers).findOne(id)

    return response.json(customerUpdated)
  }

  return response.status(404).json({ message: "Customer not found" })
}

export const removeCustomer = async (request: Request, response: Response) => {
  const { id } = request.params

  const customer = await getRepository(Customers).delete(id)

  if (customer.affected === 1) {
    return response.json({ message: "Customer removed" })
  }

  return response.status(404).json({ message: "Customer not found" })
}