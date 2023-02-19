import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({format: "DD/MM/YYYY HH:mm:ss"}),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/app.log",
      level: "info"
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error"
    })
  ]
});
