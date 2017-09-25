import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  template: ` <div ng-repeat="toggle in toggles"><div class="burger" ng-click="toggle = !toggle" ng-class="{'cross' : toggle}"><span></span></div></div>`,
  styleUrls: ['./burger-icon.component.css']
})

export class BurgerIconComponent {}
