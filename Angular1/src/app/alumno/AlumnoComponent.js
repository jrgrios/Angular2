"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AlumnoComponent = (function () {
    function AlumnoComponent() {
        this.columnas = 2;
        this.nombre = 'perico';
        this.apellidos = 'Delgado';
        this.direccion = 'Segovia City';
        this.edad = 60;
        this.visibles = false;
    }
    AlumnoComponent.prototype.alternar2 = function () {
        this.visibles = !this.visibles;
    };
    return AlumnoComponent;
}());
AlumnoComponent = __decorate([
    core_1.Component({
        selector: 'el-alumno',
        templateUrl: "app/alumno/Alumno.component.html",
    })
], AlumnoComponent);
exports.AlumnoComponent = AlumnoComponent;
//# sourceMappingURL=AlumnoComponent.js.map