module.exports = {
	"name": "custom-fastify{{ typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript') ? '-typescript' : '' }}",
	"description": "Fastify template for Custom Runtime",
	"vars": {
		"service": "{{ projectName }}",
		"removeLines": str => str.replace(/^\s*$(?:\r\n?|\n)/gm, '')
	},
	"userPrompt": [
		{
			"type": "list",
			"name": "runtime",
			"message": "Choose a custom runtime(node version):",
			"choices": [
				{ name: "default(aliyunfc/runtime-custom`s node version)", value: "" },
				{ name: "nodejs14(v14.17.4)", value: "14.17.4" },
				{ name: "nodejs16(v16.6.1)", value: "16.6.1" },
				{ name: "nodejs12", value: "12.22.4" },
				{ name: "nodejs10", value: "10.24.1" },
				{ name: "nodejs8", value: "8.17.0" }
			],
			"default": ""
		},
		{
			"type": "list",
			"name": "registry",
			"message": "Choose a registry?",
			"choices": [
				{ name: "Taobao", value: "https://npm.taobao.org/mirrors/node/v{0}/node-v{0}-linux-x64.tar.xz" },
				{ name: "official", value: "https://nodejs.org/dist/v{0}/node-v{0}-linux-x64.tar.xz" },
			],
			"default": "https://npm.taobao.org/mirrors/node/v{0}/node-v{0}-linux-x64.tar.xz",
			"when": answers => typeof answers.runtime !== 'undefined' ? answers.runtime : "{{ typeof runtime !== 'undefined' && runtime }}"
		},
		{
			"type": "confirm",
			"name": "httpTrigger",
			"message": "Apply http trigger?",
			"default": true
		},
		{
			"type": "confirm",
			"name": "customDomain",
			"message": "Apply custom domain?",
			"default": true
		}
	],
	"ignorePaths": [
		"{{ typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript') ? '' : 'tsconfig*.json' }}",
		"{{ typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript') ? '*.js' : '*.ts' }}"
	]
}
