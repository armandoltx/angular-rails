import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	documents: Document[] = [
		{
			title: "Myfirst Doc",
			description: "asdf;alsdkf;lasdkjf asdflkjas;dlkfj asdf",
			file_url: 'http://armandoltx.com',
			updated_at: '11/11/16',
			image_url: 'http://www.fillmurray.com/g/300/300'
		},
		{
			title: "My Second Doc",
			description: "asdf;alsdkf;lasdkjf asdflkjas;dlkfj asdf",
			file_url: 'http://marca.com',
			updated_at: '11/12/16',
			image_url: 'http://www.fillmurray.com/g/300/300'
		},
		{
			title: "My Last Doc",
			description: "asdf;alsdkf;lasdkjf asdflkjas;dlkfj asdf",
			file_url: 'http://armandoltx.com',
			updated_at: '11/11/16',
			image_url: 'http://www.fillmurray.com/g/300/300'
		}
	]
}