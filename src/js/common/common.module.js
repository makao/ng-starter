import angular from 'angular';
import postsModel from './models/posts.model';
import navbarModule from './navbar/navbar.module';

const commonModule = angular.module('common', [
    navbarModule
])
.service('postsModel', postsModel);

export default commonModule.name;
