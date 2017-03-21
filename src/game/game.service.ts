import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GameComponent } from './game.component';
@Injectable()
export class GameService {
    private gamesUrl = 'http://www.giantbomb.com/api/game/3030-4725/?api_key=ba7f6d8f2c8745428376a7602ea0860bf0ed8364';  // URL to web API
    constructor(private http: Http) { }
    getGames(): Observable<GameService[]> {
        return this.http.get(this.gamesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(body.data);
        return body.data || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
