export class Login {

  get email() {
    return this._email;
  }

  get code() {
    return this._code;
  }

  set email(email: string) {
    this._email = email;
  }

  set code(code: string) {
    this._code = code;
  }

  constructor(private _email: string = "", private _code: string = "") {

  }

  doLogin(){
    /*
    *
    * Send request to the server with this.email and this.code
    *
    * */
  }

}
