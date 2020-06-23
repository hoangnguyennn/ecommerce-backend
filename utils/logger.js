const winston = require("winston");
const path = require("path");

module.exports = winston.createLogger({
  format: winston.format.combine(
    winston.format.splat(),
    // time format
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    // colors format
    winston.format.colorize(),
    // logging format
    winston.format.printf((log) => {
      if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
      return `[${log.timestamp}] [${log.level}] ${log.message}`;
    })
  ),
  transports: [
    // display on console
    new winston.transports.Console(),
    // write to file
    new winston.transports.File({
      level: "error",
      filename: path.join("errors.log")
    })
  ]
});
