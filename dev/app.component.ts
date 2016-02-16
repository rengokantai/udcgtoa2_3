import {Component} from 'angular2/core';
import{BindComponent}from './pb.component';
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
    <section class="parent">
    <input type="text" [(ngModel)]="name">

    <section class="child">
    <binding [myname]="name" [yourname]="2"></binding>
    </section></section>
    `,
    directives:[BindComponent]
})
export class AppComponent {
    name='';
}