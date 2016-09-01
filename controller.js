angular.module('himanshuProfile')
	
	.controller('mainApp', ['$scope', 'utilsFactory', function ($scope, utilsFactory) {

		utilsFactory.getProfile()
			.then(function (resp) {
				$scope.profileData = resp.data
				$scope.profileData.basicInfo.currentStatus = (resp.data.companies[0] ? resp.data.companies[0].position : resp.data.schools[0].position) + ' at ' + (resp.data.companies[0] ? resp.data.companies[0].name : resp.data.schools[0].name)
			})
		
	}])