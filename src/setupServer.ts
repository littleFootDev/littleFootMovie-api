import Koa from 'koa';
import koaCors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';

import {registerRoutes} from "./routes";

dotenv.config();

async function serverSetup() {
    const server : Koa = new Koa();

    middleware(server);
    await startServer(server);
};

function middleware(server : Koa) {
    server.use(bodyParser());
    server.use(koaCors());

    const routes = registerRoutes().routes();

    server.use(routes);
};

async function startServer(server : Koa) {
    try {
        const port = process.env.PORT;
        const serverStarted: Promise<void> =new Promise(resolve => {
            server.listen(port, resolve);
            console.log(`Server started on port ${port}`);
            
        });

        await serverStarted;
        
    } catch (err) {
        console.log(err);
        return err
    }
};

export {serverSetup};