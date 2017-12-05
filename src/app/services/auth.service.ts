import { HttpService  } from "./httpservice.service";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { ApiUrls } from "../shared/classes/apiurls";

@Injectable()
export class AuthService{
	constructor( private _httpService : HttpService){

	}

	login( data ){
	
		return this._httpService.post( ApiUrls.login , data   );
	}

	register( data ){
		return this._httpService.post( ApiUrls.createUser , data );
	}
}