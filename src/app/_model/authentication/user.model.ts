export class User {
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date | string) { }
  get token():string{
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
      return '';
    }
    return this._token;
  }
}
