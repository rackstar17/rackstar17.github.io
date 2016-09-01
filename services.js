angular.module('himanshuProfile')

	.factory('utilsFactory', ['$http', function ($http) {
		return {
			getProfile: function () {
				return $http({
					method: 'GET',
					url: 'app.json'
				})
			}
		}
	}])