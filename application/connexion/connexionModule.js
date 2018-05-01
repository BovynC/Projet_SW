import angular from "angular";

import {connexion} from "./connexionComponent";

//Module declaration
const connexionModule = angular.module('connexion', []);
bookFormModule
    .component('connexion', connexion)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('main.connexion', {
            url: "/connexion",
            views: {
                "contentView@": {
                    component: "connexion"
                }
            }
        })
    }]);

export default connexionModule.name;