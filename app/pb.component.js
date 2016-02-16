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
                    this.myname = '';
                    this.yourname = 1;
                }
                BindComponent = __decorate([
                    core_1.Component({
                        selector: 'binding',
                        template: "\n    <h2>{{myname}}{{yourname}}</h2>\n    ",
                        inputs: ['myname', 'yourname']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindComponent);
                return BindComponent;
            })();
            exports_1("BindComponent", BindComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJCaW5kQ29tcG9uZW50IiwiQmluZENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO29CQVNJQyxXQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDWkEsYUFBUUEsR0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2ZBLENBQUNBO2dCQVhERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxTQUFTQTt3QkFDbEJBLFFBQVFBLEVBQUNBLDZDQUVSQTt3QkFDREEsTUFBTUEsRUFBQ0EsQ0FBQ0EsUUFBUUEsRUFBQ0EsVUFBVUEsQ0FBQ0E7cUJBQy9CQSxDQUFDQTs7a0NBS0RBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FYQSxBQVdDQSxJQUFBO1lBWEQseUNBV0MsQ0FBQSIsImZpbGUiOiJwYi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidiaW5kaW5nJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxoMj57e215bmFtZX19e3t5b3VybmFtZX19PC9oMj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6WydteW5hbWUnLCd5b3VybmFtZSddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmluZENvbXBvbmVudHtcclxuICAgIG15bmFtZSA9ICcnO1xyXG4gICAgeW91cm5hbWU9MTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
