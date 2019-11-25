import { Application, Request, Response } from 'express';

const routes = (app: Application): void => {
  app.get('/ping', (req: Request, res: Response) => {
    res.send("Ping");
  })

  app.route('/*')
      .get((req: Request, res: Response) => {
        res.sendStatus(404);
      });
};

export default routes;