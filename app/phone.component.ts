import { Component,Input,Output,EventEmitter} from "@angular/core";

@Component({
selector: 'app-phone',
template:`
<button (click)="Action()" type='button' class='btn btn-danger'>Phones</button>
<ul *ngFor= "let details of phoneUrls">
<li><img src="{{details}}"></li>
</ul>
`
})

export class phoneComponent{
    @Input() public phoneUrls:any[];
    public imageUrl=['../assets/img/phone.jpg'];

    @Output() phoneDetails = new EventEmitter();

    Action(){
        this.phoneDetails.emit(this.imageUrl);
    }
}