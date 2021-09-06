import { Request, Response, Router } from "express";
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";

const routes = Router()

const settingsController = new SettingsController
const usersController = new UsersController
const messagesController = new MessagesController

routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)
routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)

routes.get('/testes', (req: Request, res: Response) => {
  const test = new Date('12-20-2000')
  const test2 = new Date('20-12-2000')
  const test3 = new Date()
  const array = []

  return res.json({
    message: test,
    message2: test2,
    message3: test3,
    message4: array.length,
  })
})

export { routes }