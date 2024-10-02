
import {Router} from 'express'
import { addNewSite, deleteSites, getSites, updateSites } from './sites.controller.js'

const siteRouter = Router()

siteRouter.post('/',addNewSite)
siteRouter.get('/',getSites)
siteRouter.put('/',updateSites)
siteRouter.delete('/',deleteSites)
export default siteRouter