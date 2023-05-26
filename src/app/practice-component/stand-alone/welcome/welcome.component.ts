import { Component, OnInit } from '@angular/core';
import { DirectivesModule } from 'src/app/_directives/directives.module';

@Component({
  standalone: true,
  imports: [DirectivesModule],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
