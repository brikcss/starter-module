/* eslint-env mocha */
// const assert = require('assert');
const rm = require('rimraf');

describe('lib()', () => {
	afterEach(() => {
		rm.sync('.temp');
	});

	it('should do something amazing');
});
