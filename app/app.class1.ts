import {Component} from '@angular/core';

@Component({
selector:'app-class1',
template:`
<h1>Parent:</h1>
<app-class2 [usersChild]='usersParent'

(addSurname)="surname($event)"
></app-class2>
<h1>{{s}}</h1>

`
}) 

export class class1{
usersParent:string='Nilesh';

surname(s){
    console.log(s);
}
}