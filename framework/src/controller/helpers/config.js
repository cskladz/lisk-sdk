const os = require('os');

/**
 * Object holding important directories paths for application.
 * 
 * @requires os
 * @namespace Framework.helpers
 */
module.exports = {
	dirs: {
		root: process.cwd(),
		temp: `${os.homedir()}/.lisk/temp`,
		sockets: `${os.homedir()}/.lisk/temp/sockets`,
		pids: `${os.homedir()}/.lisk/temp/pids`,
	},
};
