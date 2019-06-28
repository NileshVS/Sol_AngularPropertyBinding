import {Component} from '@angular/core';
@Component({
    selector:'app-likeButton',
    template:`
    <h2><span
    (click)="likeAction()"
    class="
    glyphicon glyphicon-heart"
    [class.glyphicon]="isLiked"
    ></span></h2>
`
/*     styles: [`
    .glyphicon{
        font-size:30px;
        cursor:pointer;
    }
    .glyphicon1 {
        color:red;
    }
    `] */
})
export class likes{
    isLiked:boolean=true;

    constructor(){
        
    }
    likeAction(){
        this.isLiked= !this.isLiked;
    }
} 