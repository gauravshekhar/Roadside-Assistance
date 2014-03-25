angular.module('Cache', [])

.factory('Cache', function()
{
	var Cache = 
	{
		user: null,
		userPartners: [],
		allPartners: []
	};

	return Cache;
});