"use strict";

const errors = require('lambda-errors');

function req (event, cb) {

	if (!event) {
		return cb(errors.internal({
			name: 'lambda-request : missing arguments',
			message: '\"event\" parameter has not been provided.'
		}));
	}

	const _req = {};

	["body", "headers", "cookies", "params"/*acceptsLanguages, */]
	.map(function (key) {
		if (event[key]) {
			_req[key] = event[key];
		}
	});
	return cb(null, _req);
}

module.exports = req;