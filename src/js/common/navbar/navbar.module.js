import angular from 'angular';
import navbarComponent from './navbar.component';
import uiBootstrapCollapse from 'angular-ui-bootstrap/src/collapse';
import uiBootstrapDropdown from 'angular-ui-bootstrap/src/dropdown';

const navbarModule = angular.module('navbar', [uiBootstrapCollapse, uiBootstrapDropdown])
    .component('navbar', navbarComponent);

export default navbarModule.name;
