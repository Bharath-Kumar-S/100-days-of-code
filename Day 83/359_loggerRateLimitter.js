var Logger = function () {
  this.messageTimestamps = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (!this.messageTimestamps.has(message)) {
    // If the message is not in the map, print it and store the timestamp
    this.messageTimestamps.set(message, timestamp);
    return true;
  }

  const lastTimestamp = this.messageTimestamps.get(message);

  if (timestamp - lastTimestamp >= 10) {
    // If the current timestamp is at least 10 seconds later than the last timestamp, print the message
    this.messageTimestamps.set(message, timestamp);
    return true;
  } else {
    // Otherwise, do not print the message
    return false;
  }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
