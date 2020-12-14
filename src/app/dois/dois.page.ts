import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dois',
  templateUrl: './dois.page.html',
  styleUrls: ['./dois.page.scss'],
})
export class DoisPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Um(){
    this.router.navigateByUrl("home");
  }

}
