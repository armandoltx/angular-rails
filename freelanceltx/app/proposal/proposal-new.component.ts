import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-new',
	templateUrl: 'proposal-new.component.html',
	styleUrls: ['proposal-new.component.css']
})
export class ProposalNewComponent {
	proposal = new Proposal; //It comes from the constructor
	submitted: boolean = false; //to make the button dissapear when is submittedvthe form
}