import angular  from 'angular';

//controllers will go into this 'bucket'
const controllers = angular.module('controllers',[]);

controllers.controller('controllerName', controllerFn);

export default controllers.name;