import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductComponent} from './product.component';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product.component.mobile.html',
  styleUrls: ['./product.component.mobile.scss']
})
export class ProductComponentMobile extends ProductComponent {

  constructor(router: Router,
    sanitizer: DomSanitizer) {
    super(router,sanitizer);
   }

}
