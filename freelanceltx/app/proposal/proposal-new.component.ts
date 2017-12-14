import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
	moduleId: module.id,
	selector: 'proposal-new',
	templateUrl: 'proposal-new.component.html',
	styleUrls: ['proposal-new.component.css'],
	providers: [ ProposalService ]
})
export class ProposalNewComponent {
	proposal = new Proposal; //It comes from the constructor
	submitted: boolean = false; //to make the button dissapear when is submitted the form

	constructor(
		private proposalService: ProposalService
	) {}

	createProposal(proposal) {
		this.submitted = true;  //to make the button dissapear when is submitted the form
		this.proposalService.createProposal(proposal)//function running from the service
				.subscribe(
					data => { return true },
					error => {
						console.log("Error saving proposal");
						return Observable.throw(error);
					}
				);
	}
}