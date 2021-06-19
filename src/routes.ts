import { Router, Request, Response } from 'express'

import { getAddress, getAdresses, removeAddress, saveAddress, updateAddress } from './controller/AdressesController'
import { getCategories, getCategory, removeCategory, saveCategory, updateCategory } from './controller/CategoriesController'
import { getCustomer, getCustomers, removeCustomer, saveCustomer, updateCustomer } from './controller/CustomersController'
import { getItem, getItems, removeItem, saveItem, updateItem } from './controller/ItemsController'
import { getOrderDetails, getOrdersDetails, removeOrderDetails, saveOrderDetails, updateOrderDetails } from './controller/OrderDetailsController'
import { getOrder, getOrders, removeOrder, saveOrder, updateOrder } from './controller/OrdersController'
import { getUser, getUsers, removeUser, saveUser, updateUser } from './controller/UsersController'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})

routes.get('/items', getItems)
routes.get('/items/:id', getItem)
routes.post('/items', saveItem)
routes.put('/items/:id', updateItem)
routes.delete('/items/:id', removeItem)

routes.get('/categories', getCategories)
routes.get('/categories/:id', getCategory)
routes.post('/categories', saveCategory)
routes.put('/categories/:id', updateCategory)
routes.delete('/categories/:id', removeCategory)

routes.get('/adresses', getAdresses)
routes.get('/adresses/:id', getAddress)
routes.post('/adresses', saveAddress)
routes.put('/adresses/:id', updateAddress)
routes.delete('/adresses/:id', removeAddress)

routes.get('/customers', getCustomers)
routes.get('/customers/:id', getCustomer)
routes.post('/customers', saveCustomer)
routes.put('/customers/:id', updateCustomer)
routes.delete('/customers/:id', removeCustomer)

routes.get('/orders', getOrders)
routes.get('/orders/:id', getOrder)
routes.post('/orders', saveOrder)
routes.put('/orders/:id', updateOrder)
routes.delete('/orders/:id', removeOrder)

routes.get('/ordersdetails', getOrdersDetails)
routes.get('/ordersdetails/:id', getOrderDetails)
routes.post('/ordersdetails', saveOrderDetails)
routes.put('/ordersdetails/:id', updateOrderDetails)
routes.delete('/ordersdetails/:id', removeOrderDetails)

routes.get('/users', getUsers)
routes.get('/users/:id', getUser)
routes.post('/users', saveUser)
routes.put('/users/:id', updateUser)
routes.delete('/users/:id', removeUser)

export default routes