import { Component,Input,Output,EventEmitter} from "@angular/core";

@Component({
selector: 'app-ac',
template:`
<button (click)="Action()" type='button' class='btn btn-danger'>Air-Conditioners</button>
<ul *ngFor= "let details of acUrls">
<li><img src="{{details}}"></li>
</ul>
`
})

export class ac{
    @Input() public acUrls:any[];
    public imageUrl=['../assets/img/AC.jpg'];

    @Output() acDetails = new EventEmitter();

    Action(){
        this.acDetails.emit(this.imageUrl);
    }
}