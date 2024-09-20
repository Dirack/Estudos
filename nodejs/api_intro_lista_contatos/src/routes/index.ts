import express, {Request, Response} from 'express'
import { readFile, writeFile } from 'fs/promises'
import { addContato, deleteContato, getContatos } from '../services'

const router = express.Router()

router.post("/contatos", async (req: Request, res: Response)=>{

    let {name} = req.body
    if(!name || name.length < 2){
        return res.json({error:"Name should have more then two characters"})
    }

    await addContato(name)

    return res.status(201).json({contato:name})
})

router.get("/contatos", async (req: Request, res: Response)=>{

    let lista: string[] = await getContatos()

    return res.status(201).json({contatos: lista})
})

router.delete("/contatos", async (req: Request, res: Response)=>{

    let {name} = req.query

    await deleteContato(name as string)

    res.status(201).json({contato:name})

})

export default router