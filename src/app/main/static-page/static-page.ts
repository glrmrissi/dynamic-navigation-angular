import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-static-page',
  standalone: false,
  template: `
    <h1>Profile for {{username()}}</h1>
  `,
  styleUrl: './static-page.scss'
})
export class StaticPage {
  username = signal('rissi')
}
