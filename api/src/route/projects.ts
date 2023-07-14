import { Router } from "express";
import { getProjects, postProject } from "../controller/project.controller";

const router = Router()

router.get('/', getProjects)
router.post('/', postProject)

export {router}
