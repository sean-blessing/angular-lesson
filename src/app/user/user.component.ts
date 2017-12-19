import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

	user: User;
	userIdTxt: string;

  buttonClick(): void {
		this.user = new User(1,'bmarley','reggae','Bob','Marley','555-555-5555','bob@marley.com','true', 'true');
		//this.userIdTxt="An admin clicked the button.";
		this.userIdTxt = this.user.id;
	}

  constructor() { }

  ngOnInit() {
  }

}
