import {Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'app-class2',
    template:`
    <h1>Child:</h1>
    <h1>{{usersChild}}</h1>
    <button (click)="Action()">Click me!</button>
    `

}) 

export class class2{
    @Input() public usersChild;    
    public surname:string='Sawakhande';
    @Output() addSurname=new EventEmitter();
    Action(){
        this.addSurname.emit(this.surname);
    }

}