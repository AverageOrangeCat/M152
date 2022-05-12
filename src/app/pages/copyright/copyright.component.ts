import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: [ './copyright.component.scss' ]
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: 'c-mouse',
      delay: 2500,
      duration: 2000,
      opacity: [0, 1],
    });
  }

}
