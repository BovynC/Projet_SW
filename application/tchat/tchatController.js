import tchat from "./tchat.html";

class tchatController {

    // constructor to reference injections in the controller instance
    constructor($rootScope) {
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.$stateParams = $stateParams;
    }
    
    constructor(){
    	this.userList = [];
    	this.messageList = [];
    }
}

// rootScope injection to find the configuration owner
tchatController.$inject = ['$rootScope'];

// export component with html and controller class
export const tchat = {
    template: tchatHtml,
    controller: tchatController
};
