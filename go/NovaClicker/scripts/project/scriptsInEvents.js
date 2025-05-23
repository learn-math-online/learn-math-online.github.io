

	function SubmitLeaderboardScore(newScore)
	{
		
	}

	function InitExternEval() 
    {
		console.log('InitExternEval');
	
		if (window.firstInit == undefined)
		{
			window.firstInit = 1;
		}
		else
		{
			ExternEval();
		}
    }
	
	function TakeReward()
	{
		console.log('TakeReward');
	
		window.adReward = 0;
	}
	
	function RewardErrorHandled()
	{
		console.log('RewardErrorHandled');
	
		window.rewardError = 0;
	}
	
	function InitApi(_appId) 
    {
		var dateNow = new Date();
		var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
		
		console.log('InitApi');
		
		window.callTime = secondsSinceEpoch - 181;
    }
    
    function ExternEval() 
    {
        console.log("ExternEval");
		
		var dateNow = new Date();
		var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
		
		if (window.callTime != undefined && 
			secondsSinceEpoch - window.callTime > 180)
		{
			console.log('ExternEval 2');
			
			window.callTime = secondsSinceEpoch;
			
			if (typeof preroll !== 'undefined')
			{
				if (window[preroll.config.loaderObjectName] != undefined)
				{
					window.adRunning = 1;
				
					try {
						window[preroll.config.loaderObjectName].refetchAd(ExternEvalResumeGame);
					}
					catch(err) {
						console.log(err.message);
						ExternEvalResumeGame();
					}
				}
			}
		}
    }
	
	function ExternEvalResumeGame()
	{
		console.log("ExternEvalResumeGame");
	
		window.adRunning = 0;
		
	}
	
	function PreloadRewarded() 
    {
        console.log("PreloadRewarded");
	
		if (window.rewardedCallbacks == undefined)
		{
			window.rewardedCallbacks = true;
			
			try {
				window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
					onReady:RewardedReady, 
					onSuccess:RewardedSuccess, 
					onFail:RewardedFail
				});
			}
			catch(err) {
				console.log(err.message);
			}
		}
    }
	
	function ShowRewarded() 
	{RewardedSuccess()/*
		console.log("ShowRewarded");
	
		if (typeof preroll !== 'undefined')
		{
			if (window[preroll.config.loaderObjectName] != undefined)
			{
				window.canReward = 0;
				window.adRunning = 1;
			
				try {
					window[preroll.config.loaderObjectName].showRewardAd();
				}
				catch(err) {
					console.log(err.message);
					window.adRunning = 0;
				}
			}
		}*/
	
	}
	
	function RewardedReady()
	{
		console.log("RewardedReady");
		
		if (window.rewardedCount == undefined)
		{
			window.rewardedCount = 1;
			window.canReward = 1;
		}
		else{
			window.rewardedCount = window.rewardedCount + 1;
			setTimeout(function(){ window.canReward = 1; }, 30000);
		}
		
	}
	
	function RewardedSuccess()
	{
		console.log("RewardedSuccess");
	
		window.adRunning = 0;
		window.adReward = 1;
	}
	
	function RewardedFail()
	{
		console.log("RewardedFail");
	
		window.adRunning = 0;
	}
	
	function OpenLink()
	{
		
	}
	
		window.adRunning = 0;
		window.adRunningRewarded = 0;
		window.adReward = 0;
		window.rewardError = 0;
		window.canReward = 0;
		
		window.callTime = 0;
		window.adPlatform = 4;
		window.myLeaderboardScore = 0;
		window.gameLang = "en";
		
		InitApi(0);
	



const scriptsInEvents = {

	async Egame_Event385_Act1(runtime, localVars)
	{
		function clamp(value, min, max) {
		  return Math.min(Math.max(value, min), max);
		}
		function linearFunc(x1, x2, y1, y2, x) {
			x = clamp(x, x1, x2);
		  if (x1 < x2 && x >= x1 && x <= x2) {
		    return ((x - x1) / (x2 - x1)) * (y2 - y1) + y1;
		  }
		
		  console.warn("Error linear function! " + x1 + ", " + x2 + ", " + y1 + ", " + y2 + ", " + x);
		  return y1;
		}
		
		var currentGold = Math.round(runtime.objects.Variables.getFirstInstance().getAt(1, 0));
		//console.log(currentGold);
		
		if (currentGold > 1000000000000)
		{
			runtime.globalVars.ascendIncTimer = linearFunc(1000000000000, 1000000000000000, 2, 1, currentGold);
		}
		else
		{
			runtime.globalVars.ascendIncTimer = linearFunc(0, 1000000000000, 10, 2, currentGold);
		}
		
		runtime.globalVars.ascendIncTimer = clamp(runtime.globalVars.ascendIncTimer, 0.1, 10);
		
		//console.log(runtime.globalVars.ascendIncTimer);
	},

	async Efreezenovaads_Event4_Act5(runtime, localVars)
	{
		ShowRewarded();
	},

	async Efreezenovaads_Event5_Act1(runtime, localVars)
	{
		TakeReward();
	},

	async Ads_Event1_Act1(runtime, localVars)
	{
		ExternEval();
	},

	async Ads_Event2_Act2(runtime, localVars)
	{
		InitExternEval();
	},

	async Ads_Event2_Act3(runtime, localVars)
	{
		PreloadRewarded();
		
	},

	async Ads_Event3_Act1(runtime, localVars)
	{
		if (typeof window.freezenova !== 'undefined') {
			runtime.globalVars.linktxt = window.freezenova;
		}
		
	},

	async Ads_Event3_Act2(runtime, localVars)
	{
		runtime.globalVars.adActive = window.adRunning;
	},

	async Ads_Event3_Act3(runtime, localVars)
	{
		runtime.globalVars.adReward = window.adReward;
	},

	async Ads_Event3_Act4(runtime, localVars)
	{
		runtime.globalVars.canReward = window.canReward;
	},

	async Ads_Event7_Act1(runtime, localVars)
	{
		console.log("Pressed K");
		window.adRunning = 1;
	},

	async Ads_Event8_Act1(runtime, localVars)
	{
		console.log("Pressed L");
		window.adRunning = 0;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

