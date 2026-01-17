import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class RagFlowApi implements ICredentialType {
	name = 'ragFlowApi';

	displayName = 'RAGFlow API';

	documentationUrl = 'https://ragflow.io/docs/dev/http_api_reference';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:9380/v1',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: 'Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.baseUrl}}',
			url: '/api/new_conversation', 
            method: 'GET',
		},
	};
}
