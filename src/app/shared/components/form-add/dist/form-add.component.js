"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormAddComponent = void 0;
var core_1 = require("@angular/core");
var FormAddComponent = /** @class */ (function () {
    function FormAddComponent() {
        this.event = new core_1.EventEmitter();
    }
    FormAddComponent.prototype.onSubmit = function (form) {
        this.componentName = "add" + this.name;
        console.log('Submitted!');
        // console.log(form.value.test);
        this.event.emit(form.value[this.componentName]);
    };
    FormAddComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], FormAddComponent.prototype, "boolean");
    __decorate([
        core_1.Input()
    ], FormAddComponent.prototype, "name");
    __decorate([
        core_1.Output()
    ], FormAddComponent.prototype, "event");
    FormAddComponent = __decorate([
        core_1.Component({
            selector: 'app-form-add',
            templateUrl: './form-add.component.html',
            styleUrls: ['./form-add.component.css']
        })
    ], FormAddComponent);
    return FormAddComponent;
}());
exports.FormAddComponent = FormAddComponent;
