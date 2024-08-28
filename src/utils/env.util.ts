import { z } from "zod";

import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT ?? 5000,
  JWT_SECRET: process.env.JWT_SECRET ?? "SECRET",
};
