System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BindComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BindComponent = (function () {
                function BindComponent() {
                    this.name = '';
                    this.yname = 1;
                }
                __decorate([
                    core_1.Input('yourname'), 
                    __metadata('design:type', Object)
                ], BindComponent.prototype, "yname", void 0);
                BindComponent = __decorate([
                    core_1.Component({
                        selector: 'binding',
                        template: "\n    <h2>{{name}}{{yname}}</h2>\n    ",
                        inputs: ['name: myname']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindComponent);
                return BindComponent;
            })();
            exports_1("BindComponent", BindComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJCaW5kQ29tcG9uZW50IiwiQmluZENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO29CQVNJQyxTQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDU0EsVUFBS0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxDQUFDQTtnQkFER0Q7b0JBQUNBLFlBQUtBLENBQUNBLFVBQVVBLENBQUNBOzttQkFBQ0EsZ0NBQUtBLFVBQUdBO2dCQVYvQkE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsU0FBU0E7d0JBQ2xCQSxRQUFRQSxFQUFDQSx3Q0FFUkE7d0JBQ0RBLE1BQU1BLEVBQUNBLENBQUNBLGNBQWNBLENBQUNBO3FCQUMxQkEsQ0FBQ0E7O2tDQUtEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBWEEsQUFXQ0EsSUFBQTtZQVhELHlDQVdDLENBQUEiLCJmaWxlIjoicGIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYmluZGluZycsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8aDI+e3tuYW1lfX17e3luYW1lfX08L2gyPlxyXG4gICAgYCxcclxuICAgIGlucHV0czpbJ25hbWU6IG15bmFtZSddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmluZENvbXBvbmVudHtcclxuICAgIG5hbWUgPSAnJztcclxuICAgIEBJbnB1dCgneW91cm5hbWUnKSB5bmFtZT0xO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
