import { AuthService } from '@core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  model: NgbDateStruct;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.start();
  }

}
