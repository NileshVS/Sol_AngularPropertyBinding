import { Component } from '@angular/core';

@Component({

    selector:"app-objParentClass",
    template:`
    <app-objChildClass
    [Users]="details"
    (prop)=k($event)  
    ></app-objChildClass>
    `
})
export class objParentClass{
public details=[{
        id:1,
        name:'Nilesh'
    },
    {
        id:2,
        name:'Raj'
    },
    {
        id:3,
        name:'Shashank'
    },
    {
        id:4,
        name:'Fulaji'
    }       

]
    constructor(){}
    k(e){
        console.log(e);
        this.details.push(e);
    }

}