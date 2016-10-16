import template from './%name%.html';
import controller from './%name%.controller';
import './%name%.scss';

let %camel_case%Component = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: '%camel_case%Ctrl'
};

export default %camel_case%Component;
