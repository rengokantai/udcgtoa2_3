/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'binding',
    template:`
    <h2>{{name}}{{yname}}</h2>
    `,
    inputs:['name: myname','yname:yourname']
})

export class BindComponent{
    name = '';
    yname=1;
}