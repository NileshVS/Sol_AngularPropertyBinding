import {Component,Input,Output,EventEmitter} from '@angular/core';
//import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
    selector:'app-objChildClass',
    template:`
    <div class="container">
    <ul *ngFor="let users of Users">
        <li>
        {{users.id}}
        </li>
        <li>{{users.name}}</li>

    </ul>
    </div>

    <button (click)="Action()">Tranfer value to Parent</button>
    `
})
export class objChildClass{
    @Input() public Users:any[];

    public k= {
        id:21,
        name:'Child'
    }
    @Output() prop= new EventEmitter();

    Action(){
        this.prop.emit(this.k);
        //console.log(this.k);
    }  
    constructor(){}
}