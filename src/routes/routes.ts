import { Router, Request, Response } from 'express';
import Controllers from '../controllers/controllers';

export default class Routers {
    private static router = Router();
    public static Allroutes() {
        this.router.get('/', Controllers.getHomeController());
        this.router.get('/user', Controllers.getUserController());
        return this.router;
    }
}
