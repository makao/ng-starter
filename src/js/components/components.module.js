import angular from 'angular';
import homeModule from './home/home.module';
import contactModule from './contact/contact.module';
import postsListModule from './posts-list/posts-list.module';

const componentsModule = angular.module('app.components', [
    homeModule,
    contactModule,
    postsListModule
]);

export default componentsModule.name;
