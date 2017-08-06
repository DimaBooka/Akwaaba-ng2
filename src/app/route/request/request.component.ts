import { Component, OnInit } from '@angular/core';
import { Request } from '../../shared/models/request.model';

@Component({
  selector: 'request-invite',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  private requestModel: Request = new Request();

  constructor() { }

  ngOnInit() {
  }

  submitForRequest() {
    console.log(this.requestModel);
  }
}
