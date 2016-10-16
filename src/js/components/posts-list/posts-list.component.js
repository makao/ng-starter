import template from './posts-list.html';
import controller from './posts-list.controller';
import './posts-list.scss';

let postsListComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'postsListCtrl'
};

export default postsListComponent;
