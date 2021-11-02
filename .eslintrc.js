module.exports = {
	root : true,
	env : {
		node : true,
		jest : true,
		es2020 : true
	},
	extends : [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	ignorePatterns : ['/dist/**'],
	rules : {
		'no-console' : process.env.NODE_ENV !== 'development' ?  ['error', { allow : ['warn', 'error'] }] : 'off',
		'no-debugger' : process.env.NODE_ENV !== 'development' ? 'error' : 'off',
		'vue/component-name-in-template-casing' : ['error', 'kebab-case'],
		'no-var' : 'off',
		semi : ['error', 'always'],
		indent : [1, 'tab'],
		'space-before-function-paren' : [
			'warn',
			{
				anonymous : 'always',
				named : 'never'
			}
		],
		'key-spacing' : [
			'warn',
			{
				beforeColon : true
			}
		],
		'operator-linebreak' : ['error', 'after'],
		'no-nested-ternary' : 'error',
		quotes : ['error', 'single'],
		'arrow-parens' : ['error', 'always']
	},
	plugins : ['vue'],
	parserOptions : {
		parser : 'babel-eslint'
	}
};
