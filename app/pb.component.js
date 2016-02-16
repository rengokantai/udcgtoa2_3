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
                BindComponent = __decorate([
                    core_1.Component({
                        selector: 'binding',
                        template: "\n    <h2>{{name}}{{yname}}</h2>\n    ",
                        inputs: ['name: myname', 'yname:yourname']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindComponent);
                return BindComponent;
            })();
            exports_1("BindComponent", BindComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJCaW5kQ29tcG9uZW50IiwiQmluZENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO29CQVNJQyxTQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDVkEsVUFBS0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1pBLENBQUNBO2dCQVhERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxTQUFTQTt3QkFDbEJBLFFBQVFBLEVBQUNBLHdDQUVSQTt3QkFDREEsTUFBTUEsRUFBQ0EsQ0FBQ0EsY0FBY0EsRUFBQ0EsZ0JBQWdCQSxDQUFDQTtxQkFDM0NBLENBQUNBOztrQ0FLREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQVhBLEFBV0NBLElBQUE7WUFYRCx5Q0FXQyxDQUFBIiwiZmlsZSI6InBiLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xNi5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2JpbmRpbmcnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGgyPnt7bmFtZX19e3t5bmFtZX19PC9oMj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6WyduYW1lOiBteW5hbWUnLCd5bmFtZTp5b3VybmFtZSddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmluZENvbXBvbmVudHtcclxuICAgIG5hbWUgPSAnJztcclxuICAgIHluYW1lPTE7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
