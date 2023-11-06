import "dotenv/config";

export const config = {
  port: process.env.PORT || 4000,
  host: process.env.HOST || "localhost",
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  mongoDbUri: process.env.MONGODB_URI || "mongodb://localhost:27017",
  mongoDbName: process.env.MONGODB_NAME || "fome-api-local",
  emailAddres: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASSWORD,
};
