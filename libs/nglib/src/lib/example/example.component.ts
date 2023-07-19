import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-play-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  @Input() title = 'My Example Component';
}
