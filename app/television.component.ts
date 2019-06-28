import { Component,Input,Output,EventEmitter} from "@angular/core";

@Component({
selector: 'app-television',
template:`
<button (click)="Action()" type='button' class='btn btn-danger'>Televisions</button>
<ul *ngFor= "let details of tvUrls">
<li><img src="{{details}}"></li>
</ul>
`
})

export class tvComponent{
    @Input() public tvUrls:any[];
    public imageUrl=['../assets/img/TV.jpg'];

    @Output() tvDetails = new EventEmitter();

    Action(){
        this.tvDetails.emit(this.imageUrl);
    }
}