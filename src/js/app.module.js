import angular from 'angular';
import appComponent from './app.component';
import commonModule from './common/common.module';
import componentsModule from './components/components.module';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

angular.module('app', [
    commonModule,
    componentsModule,
    uiRouter,
    ngAnimate
])
.component('app', appComponent)
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider.state({
        name:       'app',
        redirectTo: 'home',
        component:  'app'
    });
});
