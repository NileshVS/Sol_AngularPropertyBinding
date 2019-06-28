import {Component} from '@angular/core';

@Component({
selector:'app-store',
template:`
<div type='container' class='leftPanel'>
<app-television [tvUrls]="tvUrls"
(tvDetails)=printTvDetails($event)
></app-television>
<app-ac [acUrls]="acUrls"
(acDetails)=printAcDetails($event)
></app-ac>
<app-phone [phoneUrls]="phoneUrls"
(phoneDetails)=printPhoneDetails($event)
></app-phone>

<app-laptop [laptopUrls]="laptopUrls"
(laptopDetails)=printLaptopDetails($event)
></app-laptop>

</div>
`
})
export class store{
    public tvUrls=[];
    public acUrls=[];
    public laptopUrls=[];
    public phoneUrls=[];
    printTvDetails(data){
        this.tvUrls.push(data);
    }
    printAcDetails(data){
        this.acUrls.push(data);
    }
    printLaptopDetails(data){
        this.acUrls.push(data);
    }
    printPhoneDetails(data){
        this.phoneUrls.push(data);
    }
}