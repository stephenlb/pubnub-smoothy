# PubNub Smoothy Stream Chart

Data streamed to your screen using PubNub Data Stream Network
and painted in smoothy.js canvas.

## Smoothy.js Data Stream Usage Example

Start a smoothy stream using a PubNub Data Channel.

```javascript
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
```

## Stopping a Smoothy Stream

You can also stop a stream using the `.stop();` method.

```javascript
stream.stop();
```
