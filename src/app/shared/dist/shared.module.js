"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_routing_module_1 = require("./shared-routing.module");
var dropdown_select_component_1 = require("./components/dropdown-select/dropdown-select.component");
var dropdown_info_component_1 = require("./components/dropdown-info/dropdown-info.component");
var dropdown_info_detail_component_1 = require("./components/dropdown-info/dropdown-info-detail/dropdown-info-detail.component");
var form_change_component_1 = require("./components/form-change/form-change.component");
var form_add_component_1 = require("./components/form-add/form-add.component");
var forms_1 = require("@angular/forms");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                dropdown_select_component_1.DropdownSelectComponent,
                dropdown_info_component_1.DropdownInfoComponent,
                dropdown_info_detail_component_1.DropdownInfoDetailComponent,
                form_change_component_1.FormChangeComponent,
                form_add_component_1.FormAddComponent,
            ],
            imports: [common_1.CommonModule, shared_routing_module_1.SharedRoutingModule, forms_1.FormsModule],
            exports: [
                dropdown_select_component_1.DropdownSelectComponent,
                dropdown_info_component_1.DropdownInfoComponent,
                dropdown_info_detail_component_1.DropdownInfoDetailComponent,
                form_change_component_1.FormChangeComponent,
                form_add_component_1.FormAddComponent,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
