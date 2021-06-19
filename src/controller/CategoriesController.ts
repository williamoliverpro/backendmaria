import { getRepository } from "typeorm"
import { Categories } from '../entity/Categories'
import { Request, Response } from 'express'

export const getCategories = async (request: Request, response: Response) => {

  const categories = await getRepository(Categories).find()

  return response.json(categories)
}

export const getCategory = async (request: Request, response: Response) => {
  const { id } = request.params

  const category = await getRepository(Categories).findOne(id)

  if (!category) {
    return response.status(400).json({ message: "Category not found" })
  }

  return response.json(category)
}

export const saveCategory = async (request: Request, response: Response) => {

  const category = await getRepository(Categories).save(request.body)

  if (!category) {
    return response.status(400).json({ message: "Category not found" })
  }

  return response.json(category)
}

export const updateCategory = async (request: Request, response: Response) => {
  const { id } = request.params

  const category = await getRepository(Categories).update(id, request.body)

  if (category.affected === 1) {
    const categoryUpdated = await getRepository(Categories).findOne(id)

    return response.json(categoryUpdated)
  }

  return response.status(404).json({ message: "Category not found" })
}

export const removeCategory = async (request: Request, response: Response) => {
  const { id } = request.params

  const category = await getRepository(Categories).delete(id)

  if (category.affected === 1) {
    return response.json({ message: "Category removed" })
  }

  return response.status(404).json({ message: "Category not found" })
}