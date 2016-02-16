System.register(['angular2/core', './pb.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pb_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pb_component_1_1) {
                pb_component_1 = pb_component_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class=\"parent\">\n    <input type=\"text\" [(ngModel)]=\"name\">\n\n    <section class=\"child\">\n    <binding [myname]=\"name\" [yourname]=\"2\"></binding>\n    </section></section>\n    ",
                        directives: [pb_component_1.BindComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO29CQWFJQyxTQUFJQSxHQUFDQSxFQUFFQSxDQUFDQTtnQkFDWkEsQ0FBQ0E7Z0JBZEREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBQ0EsK01BT1JBO3dCQUNEQSxVQUFVQSxFQUFDQSxDQUFDQSw0QkFBYUEsQ0FBQ0E7cUJBQzdCQSxDQUFDQTs7aUNBR0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FkQSxBQWNDQSxJQUFBO1lBZEQsdUNBY0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnR7QmluZENvbXBvbmVudH1mcm9tICcuL3BiLmNvbXBvbmVudCc7XHJcbi8vcGFzcyBbbXluYW1lXSBmcm9tIHBhcmVudCBjb21wb25lbnQgdG8gY2hpbGQgY29tcG9uZW50LmNoaWxkIGNvbXBvbmVudCByZWNlaXZlIGRhdGEgZnJvbSBbaW5wdXRdXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnRcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgIDxiaW5kaW5nIFtteW5hbWVdPVwibmFtZVwiIFt5b3VybmFtZV09XCIyXCI+PC9iaW5kaW5nPlxyXG4gICAgPC9zZWN0aW9uPjwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltCaW5kQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIG5hbWU9Jyc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
