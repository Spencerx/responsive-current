function showFlashPlayer(streamURL, videoFileName) {
     /*
        use flashembed to place flowplayer into HTML element 
        whose id is "example" (below this script tag)
     */
    flashembed("flashPlayerContainer", 
	
        /* 
	        first argument supplies standard Flash parameters. See full list:
	        http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701
        */
        {
            id: 'theFlashPlayer',
	        src:'http://video.syr.edu/flowplayer/FlowPlayerLight.swf',
	        width: 480,
	        height: 298
        },
		
        /*
	        second argument is Flowplayer specific configuration. See full list:
	        http://flowplayer.org/player/configuration.html
        */

        {config: {   
	        autoPlay: false,
	        
autoBuffering: true,
	        
bufferLength: 1,
	        
controlBarBackgroundColor:'0x333333',
	        initialScale: 'scale',
	        videoFile: videoFileName,
	        streamingServerURL: streamURL,
	        showWatermark: 'fullscreen',
	        watermarkLinkUrl: 'http://www.syr.edu',
	        menuItems: [false, false, false, false, true, true, false],
	        timeDisplayFontColor: '0xf78f1e',
	        loop: false
        }} 
    );
}

function showFlashPlayerLIVE(streamURL, videoFileName) {
     /*
        use flashembed to place flowplayer into HTML element 
        whose id is "example" (below this script tag)
     */
    flashembed("flashPlayerContainer", 
	
        /* 
            first argument supplies standard Flash parameters. See full list:
            http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701
        */
        {
            id: 'theFlashPlayer',
            src:'http://video.syr.edu/flowplayer/FlowPlayerLight.swf',
            width: 440,
            height: 308,
            wmode: 'transparent'
            
        },
		
        /*
            second argument is Flowplayer specific configuration. See full list:
            http://flowplayer.org/player/configuration.html
        */

        {config: {   
            autoPlay: true,
            
autoBuffering: false,
            
controlBarBackgroundColor:'0x333333',
            initialScale: 'scale',
            videoFile: videoFileName,
            streamingServerURL: streamURL,
            streamingServer: 'fms',
            showWatermark: 'fullscreen',
            watermarkLinkUrl: 'http://www.syr.edu',
            menuItems: [false, false, false, false, true, true, false],
            timeDisplayFontColor: '0xf78f1e',
            bufferBarColor1: '0xf78f1e',
            bufferBarColor2: '0xf78f1e',
            loop: false,
            showPlayButton: false
        },
        clip: {
            live: true,
            combine: true
        }} 
    );
}

function showFlashPlayerLIVEVPU(streamURL, videoFileName) {
     /*
        use flashembed to place flowplayer into HTML element 
        whose id is "example" (below this script tag)
     */
    flashembed("flashPlayerContainer", 
	
        /* 
            first argument supplies standard Flash parameters. See full list:
            http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701
        */
        {
            id: 'theFlashPlayer',
            src:'http://video.syr.edu/flowplayer/FlowPlayerLight.swf',
            width: 420,
            //height: 226,
            wmode: 'transparent'
            
        },
		
        /*
            second argument is Flowplayer specific configuration. See full list:
            http://flowplayer.org/player/configuration.html
        */

        {config: {   
            autoPlay: true,
            
autoBuffering: false,
            
controlBarBackgroundColor:'0x333333',
            initialScale: 'scale',
            videoFile: videoFileName,
            streamingServerURL: streamURL,
            streamingServer: 'fms',
            showWatermark: 'fullscreen',
            watermarkLinkUrl: 'http://www.syr.edu',
            menuItems: [false, false, false, false, true, true, false],
            timeDisplayFontColor: '0xf78f1e',
            bufferBarColor1: '0xf78f1e',
            bufferBarColor2: '0xf78f1e',
            loop: false,
            showPlayButton: false
        },
        clip: {
            live: true,
            combine: true
        }} 
    );
}

function showFlashPlayerArtsPresenter(streamURL, videoFileName) {
     /*
        use flashembed to place flowplayer into HTML element 
        whose id is "example" (below this script tag)
     */
    flashembed("flashPlayerContainer", 
	
        /* 
	        first argument supplies standard Flash parameters. See full list:
	        http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701
        */
        {
            id: 'theFlashPlayer',
	        src:'http://video.syr.edu/flowplayer/FlowPlayerLight.swf',
	        width: 720,
	        height: 500
        },
		
        /*
	        second argument is Flowplayer specific configuration. See full list:
	        http://flowplayer.org/player/configuration.html
        */

        {config: {   
	        autoPlay: true,
	        
autoBuffering: true,
	        
bufferLength: 1,
	        
controlBarBackgroundColor:'0x333333',
	        initialScale: 'scale',
	        videoFile: videoFileName,
	        streamingServerURL: streamURL,
	        showWatermark: 'fullscreen',
	        watermarkLinkUrl: 'http://www.syr.edu',
	        menuItems: [false, false, false, false, true, true, false],
	        timeDisplayFontColor: '0xf78f1e',
	        loop: false
        }} 
    );
}
