import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * On window scroll add class header-fixed.
   */
  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollTop >= 200) {
      document.querySelector('app-main').classList.add('header-fixed');
    } else {
      document.querySelector('app-main').classList.remove('header-fixed');
    }
  }

  /**
   * As router outlet will emit an activate event any time a new component is being instantiated.
   */
  onActivate(e) {
    window.scroll(0, 0);
  }

}
