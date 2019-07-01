import {Component} from '@angular/core';

@Component({

    selector:'app-store',
    template:
    `
        <div class='container'>
            <h3>Online Store</h3>
        </div>
        <div align='center' class='container'>
            <button 
                (click)="selected='mobiles'"
            class='btn btn-danger'>Mobile phones</button> 
            <button 
                (click)="selected='laptop'"
            class='btn btn-danger'>Laptops</button>
            <button 
                (click)="selected='ac'"
            class='btn btn-danger'>Air-Conditioners</button>
            <button 
                (click)="selected='tv'"
            class='btn btn-danger'>Televisions</button>
            <button
                (click)="selected='clear'"
            class="btn btn-default">Clear all</button><br>
        </div>
        <div [ngSwitch]="selected"  class='container'>
            <span *ngSwitchCase="'mobiles'">
                <table border=1>
                    <td *ngFor="let url of mobiles">
                        <tr><img src="{{url}}"></tr>
                    </td>
                </table>    
            </span>
            <span *ngSwitchCase="'tv'">
                <table border=1 >
                    <td *ngFor="let url of tv">
                        <tr><img src="{{url}}"></tr>
                    </td>
                </table>    
            </span>
            <span *ngSwitchCase="'laptop'">
                <table border=1 >
                    <td *ngFor="let url of laptop">
                        <tr><img src="{{url}}"></tr>
                    </td>
                </table>    
            </span>
            <span *ngSwitchCase="'ac'">
                <table border=1 >
                    <td *ngFor="let url of ac">
                        <tr><img src="{{url}}"></tr>
                    </td>
                </table>    
            </span>
            <span *ngSwitchCase="'clear'">
                <br><p align="center">Cleared!!!</p>
            </span>
            <span *ngSwitchDefault>
                <h3 align='center'>Please select a category</h3>
            </span>
            
        </div> 
    `
})

export class store{
    selected;
    public mobiles=['./assets/images/mobiles/1.jpg','./assets/images/mobiles/2.jpg','./assets/images/mobiles/3.jpg','./assets/images/mobiles/4.jpg','./assets/images/mobiles/5.jpg','./assets/images/mobiles/6.jpg'];
    public tv=['./assets/images/tv/1.jpg','./assets/images/tv/2.jpg','./assets/images/tv/3.jpg','./assets/images/tv/4.jpg','./assets/images/tv/5.jpg','./assets/images/tv/6.jpg'];
    public laptop=['./assets/images/laptop/1.jpg','./assets/images/laptop/2.jpg','./assets/images/laptop/3.jpg','./assets/images/laptop/4.jpg','./assets/images/laptop/5.jpg','./assets/images/laptop/6.jpg'];
    public ac=['./assets/images/ac/1.jpg','./assets/images/ac/2.jpg','./assets/images/ac/3.jpg','./assets/images/ac/4.jpg','./assets/images/ac/5.jpg','./assets/images/ac/6.jpg'];
    constructor(){}
}