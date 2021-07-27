module.exports = {
	"name": "custom-fastify{{ typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript') ? '-typescript' : '' }}",
	"description": "Fastify template for Custom Runtime",
	"vars": {
		"service": "{{ projectName }}",
		"removeLines": str => str.replace(/^\s*$(?:\r\n?|\n)/gm, '')
	},
	"userPrompt": [
		{
			"type": "confirm",
			"name": "httpTrigger",
			"message": "Http Trigger?",
			"default": true
		},
		{
			"type": "confirm",
			"name": "customDomain",
			"message": "Custom domain?",
			"default": true
		}
	],
	"ignorePaths": [
		"{{ typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript') ? '' : 'tsconfig*.json' }}",
		"{{ typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript') ? '*.js' : '*.ts' }}"
	]
}
