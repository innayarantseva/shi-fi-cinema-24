type LogLevel = "error" | "warn" | "info" | "debug";

interface LogParams {
  error?: string;
  [key: string]: unknown;
}

class Logger {
  private log(level: LogLevel, message: string, params?: LogParams) {
    const timestamp = new Date().toISOString();
    const logData = {
      timestamp,
      level,
      message,
      ...params,
    };

    // In development, pretty print the log
    if (process.env.NODE_ENV === "development") {
      console[level](message, params);
      return;
    }

    // In production, you might want to send this to a logging service
    // This is a basic implementation that stringifies the log data
    console[level](JSON.stringify(logData));
  }

  error(message: string, params?: LogParams) {
    this.log("error", message, params);
  }

  warn(message: string, params?: LogParams) {
    this.log("warn", message, params);
  }

  info(message: string, params?: LogParams) {
    this.log("info", message, params);
  }

  debug(message: string, params?: LogParams) {
    this.log("debug", message, params);
  }
}

export const logger = new Logger();
