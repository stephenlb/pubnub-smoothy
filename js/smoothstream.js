(function(){

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Smooth Stream
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var pubnub;
var smoothstream = window.smoothstream = (function(settings){
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Settings
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var  pubnub = pubnub || (pubnub = PUBNUB(settings))
    ,     chart = new SmoothieChart()
    ,    stream = new TimeSeries()
    ,   channel = settings.channel;

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Create Chart
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    settings.strokeStyle = settings.strokeStyle || 'rgba(0,255,0,1)';
    settings.fillStyle   = settings.fillStyle   || 'rgba(0,255,0,0.2)';
    settings.lineWidth   = settings.lineWidth   || 4;

    chart.addTimeSeries( stream, settings );
    chart.streamTo( document.getElementById(settings.chart), 300 );

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Open Data Stream
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    pubnub.subscribe({ channel : channel, message : receiver });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Process Received Vectors
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    function receiver(message) {
        var x = settings.x || function() { return new Date().getTime() }
        ,   y = settings.y || settings.key
                           || function() { return Math.random() * 1000 };

        stream.append( x(message), y(message) );
    }

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Stop Stream
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    return { stop : function() {
        pubnub.unsubscribe({ channel : channel });
        return smoothstream;
    } };
});

})();
