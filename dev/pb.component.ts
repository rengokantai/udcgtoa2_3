/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'binding',
    template:`
    <h2>{{myname}}{{yourname}}</h2>
    `,
    inputs:['myname','yourname']
})

export class BindComponent{
    myname = '';
    yourname=1;
}