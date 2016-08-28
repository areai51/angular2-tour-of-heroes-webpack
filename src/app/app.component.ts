    import { Component } from '@angular/core';
    @Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
       <nav> <a routerLink="/dashboard"> Dashboard</a>
        <a routerLink="/heroes"> Heroes</a>
        <router-outlet></router-outlet>
     </nav>
      `
    })
    export class AppComponent {
      title = 'Tour of Heroes';
    }
    