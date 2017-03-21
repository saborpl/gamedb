import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service'

@Component({
	selector: 'game',
	templateUrl: 'game.component.html'
})

export class GameComponent implements OnInit {
	errorMessage: string;
	games: Game[];
	mode = 'Observable';
	constructor(private gameService: GameService) { }
	ngOnInit() { this.getGames(); }
	getGames() {
		this.gameService.getGames()
			.subscribe(
			games => this.games = games,
			error => this.errorMessage = <any>error);
	}
	addGame(name: string) {
		if (!name) { return; }
		this.gameService.create(name)
			.subscribe(
			game => this.games.push(game),
			error => this.errorMessage = <any>error);
	}
}
