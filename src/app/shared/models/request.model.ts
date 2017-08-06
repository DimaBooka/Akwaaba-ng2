export class Request {

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  constructor(private _email: string = "") {

  }

  doRequest(){
    /*
     *
     * Send request to the server with this.email and this.code
     *
     * */
  }

}
