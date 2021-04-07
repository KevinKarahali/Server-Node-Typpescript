import { Request, Response } from 'express';

export default class Controllers {
    private static getHome: any;
    public static getHomeController() {
        return (this.getHome = (req: Request, res: Response) => {
            res.json({
                msg: 'Hola home desde controller',
            });
        });
    }
    public static getUserController() {
        return (this.getHome = (req: Request, res: Response) => {
            res.json({
                msg: 'Get USer Controller',
            });
        });
    }
}
