import angular from 'angular';
import contactComponent from './contact.component';
import uiRouter from 'angular-ui-router';

const contactModule = angular.module('contact', [uiRouter])
    .component('contact', contactComponent)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider.state({
            name: 'contact',
            url: '/contact',
            component: 'contact',
            parent: 'app'
        });
    });

export default contactModule.name;
