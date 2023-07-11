import { Router } from "express";
import { getProjects } from "../controller/project.controller";

const router = Router()

router.get('/', getProjects)

export {router}
