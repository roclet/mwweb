import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../Core/menu-items/menu-items';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuComponent implements OnInit {

  expanded: boolean;
  cpanelAdmin: string;
  constructor(public menuItems: MenuItems, public router: Router) { }

  ngOnInit() {
  }

  public onItemSelected(item: any) {
    if (item.children && item.children.length) {
       this.expanded = !this.expanded;
    }
 }


 public redirectTo(subchildState) {
    this.router.navigate([subchildState.state], { queryParams: { category: subchildState.queryState }});
 }

 public logout(stateUrl) {
  //  this.embryoService.logOut();
   this.router.navigate([stateUrl]);
 }

}
