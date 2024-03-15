/* interface */
import { CardsResponse } from "../model/carsResponse.interface";
import { CardRequest } from "../model/cardsRequest.interface";

/*module*/
import { environment } from "src/environments/environment";

/* service */
import { HttpClientService } from "./http-client.service";

/*package*/
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { throwError } from "rxjs/internal/observable/throwError";
import { retry, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CardService {
  url: string = environment.endPoints.tcgApi;
  constructor(private _http: HttpClientService) {}

  getCards(cardRequest: CardRequest): Observable<CardsResponse> {
    let url = this.url + "cards";

    if (cardRequest && cardRequest.pageSize)
      url += `?pageSize=${cardRequest.pageSize}`;
    if (cardRequest && cardRequest.q) url += `q=${cardRequest.q}`;
    if (cardRequest && cardRequest.page) url += `page=${cardRequest.page}`;
    if (cardRequest && cardRequest.orderBy)
      url += `orderBy=${cardRequest.orderBy}`;

    return this._http.get<CardsResponse>({
      url: url,
      cacheMins: 60,
    });
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
