import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductComponent} from './product.component';

@Component({
  selector:    'app-product-desktop',
  templateUrl: './product.component.desktop.html',
  styleUrls:   ['./product.component.desktop.scss']
})
export class ProductComponentDesktop extends ProductComponent {

  constructor(router: Router,
    sanitizer: DomSanitizer) {
    super(router, sanitizer);
  }

}
