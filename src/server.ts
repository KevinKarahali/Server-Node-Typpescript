import express, { Application, Request, Response } from 'express';
import Routers from './routes/routes';

export default class Server {
    private PORT: number;
    private app: Application;

    constructor(PORT: number) {
        this.PORT = PORT;
        this.app = express();
        this.listen();
        this.routes();
    }

    private listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server on port ${this.PORT}`);
        });
    }

    private routes() {
        //this.app.get('/', (req: Request, res: Response) =>
        //res.send('Hello World class')
        this.app.use(Routers.Allroutes());
    }
}
