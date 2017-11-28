var messageSuccess = 'Dados gravados com sucesso!';
var messageError = 'Um erro ocorreu no servidor!';
var apiKey = '94691e13c1acbaf793009ca16d60fe4b';
/**
 * @ngdoc overview
 * @name  dataSeverProvider
 *
 * @description Angular module responsible to conunication between front end and back end
 *
 *
 */
angular.module('dataSeverProvider', [])
/**
 * @ngdoc controller
 * @name  dataSeverProvider.controller:serverDataProvider
 *
 * @description Controller of module angular dataSeverProvider
 *
 *
 */
/*.controller('serverDataProvider', ['$scope', '$sce', function ($scope, $sce) {
	console.log('LOL')
}]);*/
/**
 * @ngdoc service
 * @name  dataSeverProvider.factory:serverDataProvider
 * @requires  dataProvider
 * @requires  $http
 * @description Factory to control calls between front end and back end
 *
 *
 */
.factory('serverDataProvider', ['$http',  function($http) {
 	
	var dataProvider;

	var getDicoveryMovies = function(callback){

		var url = 'https://api.themoviedb.org/3/discover/movie?api_key='+ model 
		+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
 		$http({
 			method:'GET',
 			url:url
 		})
 		.then(function(response){
 			console.log(response);
 			//dataProvider = response.data.results;
 			//callback(response.data.results);
 		})
 		.catch(function(response){
 			console.log(response.status);
 			//callback(response);	
 		});

	}
 	/*var searchProduct = function(model, callback){
 	
 		console.log('serverDataProvider'+model);
 		var url = 'https://api.themoviedb.org/3/collection/10'+model;
 		$http({
 			method:'GET',
 			url:url
 		})
 		.then(function(response){
 			console.log(response.status);
 			dataProvider = response.data.results;
 			callback(response.data.results);
 		})
 		.catch(function(response){
 			console.log(response.status);
 			callback(response);	
 		});
 		
 	}

 	/*var autosuggest = function(model, callback){
 		var url = 'https://http2.mlstatic.com/resources/sites/MLB/autosuggest?callback=autocomplete.jsonpCallback&showFilters=true&limit=9&api_version=2&q='+model;
 		$http({
 			method:'GET',
 			url:url
 		})
 		.then(function(response){
 			callback(response.data);
 		})
 		.catch(function(response){
 			callback(response);	
 		});
 	}

 	var searchItem = function(id,callback){
 		var url = 'https://api.mercadolibre.com/items/'+id;
 		$http({
 			method:'GET',
 			url:url
 		})
 		.then(function(response){
 			callback(response.data);
 		})
 		.catch(function(response){
 			callback(response);	
 		});
 	}

 	var getDescriptionItem = function(id,callback){
 		var url = 'https://api.mercadolibre.com/items/'+id+'/description';
 		$http({
 			method:'GET',
 			url:url
 		})
 		.then(function(response){
 			callback(response.data);
 		})
 		.catch(function(response){
 			callback(response);	
 		});
 	}*/

 	return{
 		searchProduct:searchProduct,
 		autosuggest:autosuggest,
 		dataProvider:dataProvider,
 		getDescriptionItem:getDescriptionItem,
 		searchItem:searchItem
 	}

 }]);