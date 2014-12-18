# PubNub Smoothy Stream Chart

Data streamed to your screen using PubNub Data Stream Network
and painted in smoothy.js canvas.

![Stream Live Data to Smoothy.js Chart](http://stephenlb.github.io/pubnub-smoothy/smoothy-stream.gif)

## Usage Example - Smoothy.js Data Stream Demo

Start a smoothy stream using a PubNub Data Channel.
You can receive mouse coordinates or stock prices or server cpu usage
in realtime from a remote source anywhere on the internet.
The following example will receive stock prices from a live
data stream feed
[Steraming JavaScript Market Orders](http://www.pubnub.com/developers/data-streams/market-orders)
on PubNub DSN (Data Stream Network).

```html
<canvas id="chart1" width="400" height="100"></canvas>

<script src="https://cdn.pubnub.com/pubnub.min.js"></script>
<script src="js/smoothy.min.js"></script>
<script src="js/smoothstream.js"></script>
<script>(function(){

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Start Smooth Stream
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var stream = smoothstream({
        channel       : "pubnub-market-orders",
        subscribe_key : "sub-c-4377ab04-f100-11e3-bffd-02ee2ddab7fe",

        chart         : 'chart1',
        key           : function (message) { return message.bid_price },
        strokeStyle   : 'rgba(185,230,199,1)',
        fillStyle     : 'rgba(222,238,191,0.7)',
        lineWidth     : 5
    });

})();</script>
```

## Stopping a Smoothy Stream

You can also stop a stream using the `.stop();` method.

```javascript
stream.stop();
```
