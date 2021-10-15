import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  isOpen = false;
  collapse() {
    return (this.isOpen = !this.isOpen);
  }
}
