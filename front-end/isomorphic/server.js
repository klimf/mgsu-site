import express from "express";
import RequestHandler from "./RequestHandler";

const app = express();

app.use(RequestHandler);

const PORT = 2000

app.listen(PORT, () => console.log('isomorphic server started on port ' + PORT));
