import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-seja-membro',
  templateUrl: './seja-membro.component.html',
  styleUrls: ['./seja-membro.component.css']
})
export class SejaMembroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginModel = new User();
  onSubmit(){
    console.log(this.loginModel)
  }
}
