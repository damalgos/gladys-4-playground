/**
 * @description Get list of backups
 * @returns {Promise} Resolve with list of backups.
 * @example
 * getBackups();
 */
function getBackups() {
  return this.gladysGatewayClient.getBackups();
}

module.exports = {
  getBackups,
};
