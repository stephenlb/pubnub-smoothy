# PubNub Smoothy Stream Add-on

Data streamed to your screen using PubNub Data Stream Network
and painted in smoothy.js canvas.
[Smoothie Charts: A JavaScript Charting Library for Streaming Data](http://smoothiecharts.org/)
can receive live updates in realtime using the Smoothy Stream library add-on.

![Stream Live Data to Smoothy.js Chart](http://stephenlb.github.io/pubnub-smoothy/smoothy-stream.gif)

> Originally the need for this library was requested on [StackOverflow for Creating a line chart with smoothie graphs from a PubNub Stream](http://stackoverflow.com/questions/27511102/creating-a-line-chart-with-smoothie-graphs-from-a-pubnub-stream).

You should also check out the live [PubNub Smoothy Stream Add-on Live Demo](http://stephenlb.github.io/pubnub-smoothy/) to see this in action.
But don't skip the usage example below.

## Usage Example - Smoothy.js Data Stream Demo

Start a smoothy stream using a PubNub Data Channel.
You can receive mouse coordinates or stock prices or server cpu usage
in realtime from a remote source anywhere on the internet.
The following example will receive stock prices from a live
data stream feed
[Streaming JavaScript Market Orders](http://www.pubnub.com/developers/data-streams/market-orders)
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
        x             : function (message) { return new Date().getTime() },
        y             : function (message) { return message.bid_price    },
        chart         : 'chart1',
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
