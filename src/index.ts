import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import axios from "axios";

// Boot express
const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hi there");
});

app.post("/echo", async (req: Request, res: Response) => {
  try {
    const response = await axios.post(
      "https://api-qa.kushkipagos.click/wallet-reseller/webhook",
      req.body
    );

    console.log(response.data);

    res.send(response.data);
  } catch (e) {
    console.log(e);
    res.send("Bypass error");
  }
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
