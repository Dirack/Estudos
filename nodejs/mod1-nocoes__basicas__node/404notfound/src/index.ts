import express, {ErrorRequestHandler, Request, Response} from 'express';

const server = express();

server.use("/error", (req: Request, res: Response)=>{
	throw new Error("This is a custom error message")
})

server.use((req: Request, res: Response)=>{
	res.status(404).send("Not found");
});

const errorHandler: ErrorRequestHandler = (err,req,res,next)=>{
	console.log(err)
	res.status(500).json({error:"internal server error"})
}

server.use(errorHandler)

server.listen(8081);
