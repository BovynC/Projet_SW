// use angularjs
import angular from "angular";

// see docs : https://babeljs.io/docs/usage/polyfill/
import "babel-polyfill";

// import application configuration
import configuration from "./config"

// jquery for bootstrap dependency
import "jquery";

// Style framework
import uiBootstrap from "angular-ui-bootstrap";

// CSS injection
import "../assets/styles/main.less";


angular.module('AppAngularJS', [uiBootstrap])
    .run(['$rootScope', ($rootScope) => {
        // set owner from configuration file
        $rootScope.owner = configuration.OWNER;
    }]);
