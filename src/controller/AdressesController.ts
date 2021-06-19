import { getRepository } from "typeorm"
import { Adresses } from '../entity/Adresses'
import { Request, Response } from 'express'

export const getAdresses = async (request: Request, response: Response) => {

  const adresses = await getRepository(Adresses).find()

  return response.json(adresses)
}

export const getAddress = async (request: Request, response: Response) => {
  const { id } = request.params

  const address = await getRepository(Adresses).findOne(id)

  return response.json(address)
}

export const saveAddress = async (request: Request, response: Response) => {

  const address = await getRepository(Adresses).save(request.body)

  return response.json(address)
}

export const updateAddress = async (request: Request, response: Response) => {
  const { id } = request.params

  const address = await getRepository(Adresses).update(id, request.body)

  if (address.affected === 1) {
    const addressUpdated = await getRepository(Adresses).findOne(id)

    return response.json(addressUpdated)
  }

  return response.status(404).json({ message: "Address not found" })
}

export const removeAddress = async (request: Request, response: Response) => {
  const { id } = request.params

  const address = await getRepository(Adresses).delete(id)

  if (address.affected === 1) {
    return response.json({ message: "Address removed" })
  }

  return response.status(404).json({ message: "Address not found" })
}