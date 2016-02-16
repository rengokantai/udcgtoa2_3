/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component,Input} from 'angular2/core';

@Component({
    selector:'binding',
    template:`
    <h2>{{name}}{{yname}}</h2>
    `,
    inputs:['name: myname']
})

export class BindComponent{
    name = '';
    @Input('yourname') yname=1;
}