import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ServicesModule } from '../services/services.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';


registerLocaleData(zh);


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports: [ShareModule, AppRoutingModule]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    console.log('aaaa');
    if (parentModule) {
      throw new Error('CoreModule 只能被appModule 引入')
    }
  }
}
