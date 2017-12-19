import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
textForLabel: string = '';

	buttonNaughtyClick(): void {
		this.textForLabel="You were naughty...  lump of coal for you!!!";
	}
	buttonNiceClick(): void {
		this.textForLabel="You were nice...  new laptop for you!!";
	}
	buttonTriedClick(): void {
		this.textForLabel="Hmmm...  I know you tried really hard...  maybe a football?";
	}

  constructor() { }

  ngOnInit() {
  }

}
