import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dekd-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @Input() title: string

  constructor() { }

  ngOnInit() {
  }

}
