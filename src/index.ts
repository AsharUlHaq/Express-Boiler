import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { APP_CONSTANT } from "./common/constant/app.constant";

import { LoggerService } from "./utils/logger.util";
import { errorHandler } from "./middleware/error.middleware";
import { AppModule } from "./app.module";
import { connectDb } from "./utils/db.util";

const app = express();

app.use(bodyParser.json());
app.use(cors());

AppModule.init(app);
app.use(errorHandler);

app.listen(APP_CONSTANT.PORT, async () => {
  await connectDb();
  LoggerService().log(APP_CONSTANT.BOOTSTRAP_MESSAGE);
});
