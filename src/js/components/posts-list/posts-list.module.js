import angular from 'angular';
import postsListComponent from './posts-list.component';

const postsListModule = angular.module('postsList', [])
    .component('postsList', postsListComponent);

export default postsListModule.name;
