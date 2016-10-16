import template from './contact.html';
import controller from './contact.controller';
import './contact.scss';

let contactComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'contactCtrl'
};

export default contactComponent;
