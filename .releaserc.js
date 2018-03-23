/** ------------------------------------------------------------------------------------------------
 *  @filename  .releaserc.js
 *  @author  brikcss  <https://github.com/brikcss>
 *  @description
 *      https://github.com/semantic-release/semantic-release/blob/caribou/docs/usage/configuration.md#configuration
 ** --------------------------------------------------------------------------------------------- */

const config = {
	// See https://github.com/semantic-release/github/
	github: {
		path: '@semantic-release/github',
		assignees: ['thezimmee']
		// assets: [
		// 	{
		// 		name: 'pre-commit-lint.js',
		// 		path: './bin/pre-commit-lint.js',
		// 		label: 'Runs eslint, stylelint, and prettier on staged files.'
		// 	},
		// 	{
		// 		name: 'commit-msg-stamp-branch.sh',
		// 		path: './bin/commit-msg-stamp-branch.sh',
		// 		label:
		// 			'Appends the source branch name to the commit message.'
		// 	},
		// 	{
		// 		name: 'check-stage.sh',
		// 		path: './bin/pre-push/check-stage.sh',
		// 		label: 'Git pre-push hook which prevents pushing files with a dirty stage.'
		// 	}
		// ],
	},
	// See https://github.com/semantic-release/npm.
	npm: '@semantic-release/npm'
};
module.exports = {
	branch: 'master',
	verifyConditions: [config.npm, config.github],
	analyzeCommits: {
		preset: 'angular',
		releaseRules: [
			{
				breaking: true,
				release: 'major'
			},
			{
				scope: 'BREAKING',
				release: 'major'
			},
			{
				scope: 'minor',
				release: 'minor'
			},
			{
				type: 'patch',
				release: 'patch'
			},
			{
				type: 'feat',
				release: 'minor'
			},
			{
				type: 'feature',
				release: 'minor'
			},
			{
				type: 'fix',
				release: 'patch'
			},
			{
				type: 'docs',
				release: 'patch'
			},
			{
				type: 'perf',
				release: 'patch'
			},
			{
				type: 'performance',
				release: 'patch'
			},
			{
				type: 'test',
				release: 'patch'
			},
			{
				type: 'build',
				release: 'patch'
			},
			{
				type: 'tools',
				release: 'patch'
			},
			{
				type: 'refactor',
				release: 'patch'
			},
			{
				type: 'style',
				release: 'patch'
			},
			{
				type: 'chore',
				release: 'patch'
			},
			{
				type: 'revert',
				release: 'patch'
			}
		],
		parserOpts: {
			noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
		}
	},
	verifyRelease: [],
	generateNotes: ['@semantic-release/release-notes-generator'],
	prepare: [config.npm],
	publish: [config.npm, config.github],
	success: [config.github],
	fail: [config.github]
};
