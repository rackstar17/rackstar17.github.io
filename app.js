angular.module('himanshuProfile', ['ngMaterial'])
	
	.controller('mainApp',['$scope', function ($scope) {
		
		$scope.companies = [
			{
				"name": "DoSelect",
				"position": "Front-end Intern", 
				"start": "Jun 2016",
				"end": "Aug 2016"
			},
			{
				"name": "Dure Technolgies",
				"position": "Web Intern", 
				"start": "Jun 2015",
				"end": "Aug 2015"
			}
		]
		$scope.schools = [
			{
				"name": "Jaypee Institute of Information Technology",
				"position": "B.Tech",
				"start": 2013,
				"end": "present"
			}
		]

		$scope.himanshu = {
			"name": "Himanshu Aggarwal",
			"bio": "I like to listen Music and have a special interest towards web development \n Functional UI gives me joy and I love to add functionality to user interfaces and create amazing web stuff",
			"skills": ["AngularJS", "Javascript", "Python", "C++", "NodeJS", "ExpressJS", "MongoDB"],
			"currentStatus": ($scope.companies[0] ? $scope.companies[0].position : $scope.schools[0].position) + ' at ' + ($scope.companies[0] ? $scope.companies[0].name : $scope.schools[0].name),
			"currentLocation": "Noida"
		}

	}])