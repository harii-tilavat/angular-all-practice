export class User {
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) { }
  get token():string{
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
      return '';
    }
    console.warn("Token===",this._token);
    return this._token;
  }
}
