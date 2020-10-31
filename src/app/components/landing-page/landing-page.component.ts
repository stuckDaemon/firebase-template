import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {Endpoints} from '../../service/endpoints';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService
      .sendGetRequest(Endpoints.FOO_LIST)
      .subscribe(
        res => console.log(res),
        err => console.error(err)
      );
  }

}
