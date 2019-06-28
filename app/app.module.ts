import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {likes} from './likeButton.component';
import { objParentClass } from './objectParent.component';
import {objChildClass} from './objectChild.component';
import {propertyComponent} from './property.component';
import {TaskComponent} from './task.component';
import {TaskOneComponent} from './taskone.component';
import {class1} from './app.class1';
import {class2} from './app.class2';
import {store} from './store.component';
import {tvComponent} from './television.component';
import {ac} from './ac.component';
import {laptopComponent} from './laptop.component';
import {phoneComponent} from './phone.component';
@NgModule({
  declarations: [
    AppComponent,
    likes,
    objParentClass,
    objChildClass,
    propertyComponent,
    TaskComponent,
    TaskOneComponent,
    class1,
    class2,
    store,
    tvComponent,
    ac,
    laptopComponent,
    phoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
