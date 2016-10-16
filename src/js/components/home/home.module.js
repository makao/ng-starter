import angular from 'angular';
import homeComponent from './home.component';
import uiRouter from 'angular-ui-router';

const homeModule = angular.module('home', [uiRouter])
    .component('home', homeComponent)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider.state({
            name: 'home',
            url: '/',
            component: 'home',
            parent: 'app'
        });
    });

export default homeModule.name;
