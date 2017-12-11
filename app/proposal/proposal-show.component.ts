import { Component, OnInit } from '@angular/core';//oninit to load things as soon as the app loads
import { ActivatedRoute, Params } from '@angular/router';// the ability to see the route for the proposal and the id
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html',
	styleUrls: ['proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
	id: number;
	routeId: any;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.routeId = this.route.params.subscribe(
				params => {
					this.id = +params['id'];//the + converts the string into a number
				}
			)
	}
}