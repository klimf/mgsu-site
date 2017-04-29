import express from "express";
import {prerender, handleErrors, notFoundCatch} from "./Render/RequestHandlers";
import path from "path";

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.use(prerender);

const PORT = 2000;

app.listen(PORT, () => console.log('isomorphic server started on port ' + PORT));
