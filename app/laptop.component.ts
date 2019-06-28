import { Component,Input,Output,EventEmitter} from "@angular/core";

@Component({
selector: 'app-laptop',
template:`
<button (click)="Action()" type='button' class='btn btn-danger'>Laptops</button>
<ul *ngFor= "let details of laptopUrls">
<li><img src="{{details}}"></li>
</ul>
`
})

export class laptopComponent{
    @Input() public laptopUrls:any[];
    public imageUrl=['../assets/img/laptop.jpg'];

    @Output() laptopDetails = new EventEmitter();

    Action(){
        this.laptopDetails.emit(this.imageUrl);
    }
}