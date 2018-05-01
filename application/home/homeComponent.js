import homeComponentHtml from "./homeComponent.html";

class HomeComponentController {

    // constructor to reference injections in the controller instance
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

}

// rootScope injection to find the configuration owner
HomeComponentController.$inject = ['$rootScope'];

// export component with html and controller class
export const home = {
    template: homeComponentHtml,
    controller: HomeComponentController
};
