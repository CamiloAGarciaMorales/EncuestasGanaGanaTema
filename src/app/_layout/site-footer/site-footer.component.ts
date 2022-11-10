import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {

  test : Date = new Date();

  constructor(private router: Router ) {}

  ngOnInit() {

  }
  getPath(){
    return this.router.url;
  }

}
