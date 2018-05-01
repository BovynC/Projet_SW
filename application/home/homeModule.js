import angular from "angular";

import {home} from "./homeComponent";

const homeModule = angular.module('home', []);

homeModule
    .component("home", home)
    .config(['$stateProvider',($stateProvider)    => {
        $stateProvider
            .state("main.home", {
                url: "/home",
                views: {
                    "contentView@" : {
                        component: "home"
                    }
                }
            });
    }]);

export default homeModule.name;
