import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}

}
