import {Input, Directive, Component, Injectable} from "@angular/core";
import {NavigationExtras} from "@angular/router";

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Directive({
  selector: '[routerLinkActiveOptions]'
})
export class RouterLinkStubActiveOptions {
  @Input('routerLinkActiveOptions') params: any;
}

@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent { }

@Injectable()
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) { }
}
