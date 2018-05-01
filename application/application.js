// use angularjs
import angular from "angular";
// see docs : https://babeljs.io/docs/usage/polyfill/
import "babel-polyfill";
//import uirouter
import uiRouter from "@uirouter/angularjs";
// import application configuration
import configuration from "./config";
// jquery for bootstrap dependency
import "jquery";
// Style framework
import uiBootstrap from "angular-ui-bootstrap";
// CSS injection
import "../assets/styles/main.less";

import homeModule from "./home/homeModule";
import {menu} from "./menu/menuComponent";
import {footer} from "./footer/footerComponent";
import {connexion} from "./connexion/connexionComponent";

angular.module('AppAngularJS', [uiBootstrap, uiRouter, homeModule])
        .component('menu', menu)
        .component('footer', footer)
        .component('connexion', connexion)
        .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise("main/home");
            $urlRouterProvider.when("", "main/home");
            $urlRouterProvider.when("/", "main/home");

            $stateProvider
                .state('main', {
                    url: "/main",
                    abstract: true,
                    //Déclaration des views pour les appeler dans l'index
                    views: {
                        "headerView@": {
                            component: "menu"
                        },
                        "footerView@": {
                            component: "footer"
                        },
                    }
                })
        }]);

