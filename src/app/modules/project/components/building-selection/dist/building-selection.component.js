"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BuildingSelectionComponent = void 0;
var core_1 = require("@angular/core");
var exampleProject2_1 = require("../../../../data/examples/exampleProject2");
var BuildingSelectionComponent = /** @class */ (function () {
    function BuildingSelectionComponent(building, userService) {
        this.building = building;
        this.userService = userService;
        // define Arrays
        // buildingsList: string[] = [];
        // fragmentsList: string[] = [];
        // storeysList: string[] = [];
        this.buildings = exampleProject2_1.exampleBuildings;
        this.fragments = exampleProject2_1.exampleFragments;
        this.storeys = exampleProject2_1.exampleStoreys;
        this.selectBuilding = 'Obiekt';
        this.selectFragment = 'Część';
        this.selectStorey = 'Kondygnacja';
    }
    BuildingSelectionComponent.prototype.onBuildingChange = function (buildingSelect) {
        this.buildingIdSelected = buildingSelect;
        this.building.changeBuilding(buildingSelect);
        this.onFragmentChange(null);
    };
    BuildingSelectionComponent.prototype.onFragmentChange = function (fragmentSelect) {
        this.fragmentIdSelected = fragmentSelect;
        this.building.changeFragment(fragmentSelect);
        this.onStoreyChange(null);
    };
    BuildingSelectionComponent.prototype.onStoreyChange = function (storeySelect) {
        this.storeyIdSelected = storeySelect;
        this.building.changeStorey(storeySelect);
    };
    //
    BuildingSelectionComponent.prototype.receiveTestMessage = function ($event) {
        console.log($event);
        this.buildings.push({
            buildingId: 10,
            buildingName: $event
        });
    };
    //
    BuildingSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.editModeSelected.subscribe(function (boolean) { return (_this.editMode = boolean); });
        this.building.buildingIdSelected.subscribe(function (id) { return (_this.buildingIdSelected = id); });
    };
    BuildingSelectionComponent = __decorate([
        core_1.Component({
            selector: 'app-building-selection',
            templateUrl: './building-selection.component.html',
            styleUrls: ['./building-selection.component.scss']
        })
    ], BuildingSelectionComponent);
    return BuildingSelectionComponent;
}());
exports.BuildingSelectionComponent = BuildingSelectionComponent;
