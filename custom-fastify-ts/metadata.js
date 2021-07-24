module.exports = {
	"name": "custom-fastify-typescript",
	"description": "Fastify Typescript Template for Custom Runtime",
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
	]
}
