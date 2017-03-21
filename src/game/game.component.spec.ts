import { TestBed, inject } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('a game component', () => {
	let component: GameComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GameComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([GameComponent], (GameComponent) => {
		component = GameComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});