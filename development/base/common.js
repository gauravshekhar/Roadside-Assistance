angular.module('Common', [])

.factory('Common', function()
{
	var Common = 
	{
		online : function()
		{
			return true;
		},
		waitForDOM : function(selector, callback)
		{
			var timer, loop;

			loop = function()
			{
				clearTimeout(timer);

				if($(selector).length === 0)
				{	
					timer = window.setTimeout(loop, 50);
				}	
				else
				{
					callback();
				}
			};

			loop();
		},
		setErrors : function(scope, boolean, message)
		{
			scope.error = 
			{
				found : boolean,
				message : message
			};
		},
		startFresh : function()
		{
			$('.modal').modal('hide');
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();
		},
		showLoading : function()
		{
			$('#loading').show();
		},
		hideLoading : function()
		{
			$('#loading').hide();
		},
		showModal : function(id)
		{
			$('#' + id).modal('show');
		},
		hideModal : function(id)
		{
			$('#' + id).modal('hide');
		}
	};

	return Common;
});