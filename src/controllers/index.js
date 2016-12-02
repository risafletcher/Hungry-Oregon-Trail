import angular  from 'angular';
import food from './food';

//controllers will go into this 'bucket'
const controllers = angular.module('controllers',[]);

controllers.controller('food', food);

export default controllers.name;
