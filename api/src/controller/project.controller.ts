import { Request, Response } from "express"
export const getProjects = async (req: Request, res: Response) => {
  try {
  } catch(error) {
    res.status(501).send(error)
  }
}
