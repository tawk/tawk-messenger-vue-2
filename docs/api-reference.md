# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [load](#load)
  - [statusChange](#statuschange)
  - [beforeLoad](#beforeload)
  - [chatMaximized](#chatmaximized)
  - [chatMinimized](#chatminimized)
  - [chatHidden](#chathidden)
  - [chatStarted](#chatstarted)
  - [chatEnded](#chatended)
  - [prechatSubmit](#prechatsubmit)
  - [offlineSubmit](#offlinesubmit)
  - [chatMessageVisitor](#chatmessagevisitor)
  - [chatMessageAgent](#chatmessageagent)
  - [chatMessageSystem](#chatmessagesystem)
  - [agentJoinChat](#agentjoinchat)
  - [agentLeaveChat](#agentleavechat)
  - [chatSatisfaction](#chatsatisfaction)
  - [visitorNameChanged](#visitornamechanged)
  - [fileUpload](#fileupload)
  - [tagsUpdated](#tagsupdated)
  - [unreadCountChanged](#unreadcountchanged)
  - [visitor](#visitor)
  - [maximize](#maximize)
  - [minimize](#minimize)
  - [toggle](#toggle)
  - [popup](#popup)
  - [getWindowType](#getwindowtype)
  - [showWidget](#showwidget)
  - [hideWidget](#hidewidget)
  - [toggleVisibility](#togglevisibility)
  - [getStatus](#getstatus)
  - [isChatMaximized](#ischatmaximized)
  - [isChatMinimized](#ischatminimized)
  - [isChatHidden](#ischathidden)
  - [isChatOngoing](#ischatongoing)
  - [isVisitorEngaged](#isvisitorengaged)
  - [onLoaded](#onloaded)
  - [onBeforeLoaded](#onbeforeloaded)
  - [widgetPosition](#widgetposition)
  - [endChat](#endchat)
  - [setAttributes](#setattributes)
  - [addEvent](#addevent)
  - [addTags](#addtags)
  - [removeTags](#removetags)
  - [secureMode](#securemode)
  - [switchWidget](#switchwidget)
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)

<br/>

## load
Listen on event that invoked right after the widget is rendered. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('load', () => {
    // place your code here
});
```

<br/>

## statusChange
Listen on event that invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('statusChage', (status) => {
    // place your code here
});
```

<br/>

## beforeLoad
Listen on event that invoked right when Tawk_API is ready to be used and before the widget is rendered. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('beforeLoad', () => {
    // place your code here
});
```

<br/>

## chatMaximized
Listen on event that invoked when the widget is maximized. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatMaximized', () => {
    // place your code here
})
```

<br/>

## chatMinimized
Listen on event that invoked when the widget is minimized. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatMinimized', () => {
    // place your code here
});
```

<br/>

## chatHidden
Listen on event that invoked when the widget is hidden. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatHidden', () => {
    // place your code here
});
```

<br/>

## chatStarted
Listen on event that invoked when the widget is started.

```js
this.$tawkMessenger.$on('chatStarted', () => {
    // place your code here
});
```

<br/>

## chatEnded
Listen on event that invoked when the widget is ended. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatEnded', () => {
    // place your code here
});
```

<br/>

## prechatSubmit
Listen on event that invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('prechatSubmit', (data) => {
    // place your code here
});
```

<br/>

## offlineSubmit
Listen on event that invoked when the Offline form is submitted. The submitted form data is passed to the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('offlineSubmit', (data) => {
    // place your code here
});
```

<br/>

## chatMessageVisitor
Listen on event that invoked when message is sent by the visitor. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatMessageVisitor', (message) => {
    // place your code here
});
```

<br/>

## chatMessageAgent
Listen on event that invoked when message is sent by the agent. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatMessageAgent', (message) => {
    // place your code here
});
```

<br/>

## chatMessageSystem
Listen on event that invoked when message is sent by the system. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatMessageSystem', (message) => {
    // place your code here
});
```

<br/>

## agentJoinChat
Listen on event that invoked when an agent joins the chat. The data is passed to the function. Will contain {name : ”, position : ”, image : ”, id : ”}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('agentJoinChat', (data) => {
    // place your code here
});
```

<br/>

## agentLeaveChat
Listen on event that invoked when an agent leaves the chat. The data is passed to the function. Will contain {name : ”, id : ”}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('agentLeaveChat', (data) => {
    // place your code here
});
```

<br/>

## chatSatisfaction
Listen on event that invoked when an agent leaves the chat. The satisfaction is passed to the function. -1 = dislike | 0 = neutral | 1 = like. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('chatSatisfaction', (satisfaction) => {
    // place your code here
});
```

<br/>

## visitorNameChanged
Listen on event that invoked when the visitor manually changes his name. The visitorName is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('visitorNameChanged', (visitorName) => {
    // place your code here
});
```

<br/>

## fileUpload
Listen on event that invoked when a file is uploaded. The link to the uploaded file is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('fileUpload', (link) => {
    // place your code here
});
```

<br/>

## tagsUpdated
Listen on event that invoked when a tag is updated.

```js
this.$tawkMessenger.$on('tagsUpdated', (data) => {
    // place your code here
});
```

<br/>

## unreadCountChanged
Listen on event that returns count of unread messages.

```js
this.$tawkMessenger.$on('unreadCountChanged', (count) => {
    // place your code here
});
```

<br/>

## visitor
Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then use the [setAttributes](#setAttributes) function instead.

```js
this.$tawkMessenger.visitor({
    name : 'Name',
    email : 'email@email.com'
});
```

<br/>

## maximize
Maximizes the chat widget.

```js
this.$tawkMessenger.maximize();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.maximize();
});
```

<br/>

## minimize
Minimizes the chat widget.

```js
this.$tawkMessenger.minimize();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.minimize();
});
```

<br/>

## toggle
Minimizes or Maximizes the chat widget based on the current state.

```js
this.$tawkMessenger.toggle();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.toggle();
});
```

<br/>

## popup
Opens the chat widget as a pop out.

```js
this.$tawkMessenger.popup();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.popup();
});
```

<br/>

## getWindowType
Returns the current widget type whether it’s inline or embed.

```js
this.$tawkMessenger.getWindowType();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.getWindowType() === 'inline') {
        // do something if it's inline
    } else {
        // do something if it's embed
    }
});
```

<br/>

## showWidget
Shows the chat widget.

```js
this.$tawkMessenger.showWidget();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.showWidget();
});
```

<br/>

## hideWidget
Hide the chat widget.

```js
this.$tawkMessenger.hideWidget();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.hideWidget();
});
```

<br/>

## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
this.$tawkMessenger.toggleVisibility();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.toggleVisibility();
});
```

<br/>

## getStatus
Returns the current page status (online, away or offline).

```js
this.$tawkMessenger.getStatus();

// Example

this.$tawkMessenger.$on('load', () => {
    const pageStatus = this.$tawkMessenger.getStatus();

    if (pageStatus === 'online') {
        // do something for online
    } else if (pageStatus === 'away') {
        // do something for away
    } else {
        // do something for offline
    }
});
```

<br/>

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
this.$tawkMessenger.isChatMaximized();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatMaximized()) {
        // do something it it's maximized
    }
});
```

<br/>

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
this.$tawkMessenger.isChatMinimized();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatMinimized()) {
        // do something if it's minimized
    }
});
```

<br/>

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
this.$tawkMessenger.isChatHidden();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatHidden()) {
        // do something if chat widget is hidden
    }
});
```

<br/>

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
this.$tawkMessenger.isChatOngoing();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isChatOngoing()) {
        // do something if there's ongoing chat
    }
});
```

<br/>

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

```js
this.$tawkMessenger.isVisitorEngaged();

// Example

this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.isVisitorEngaged()) {
        // do something if visitor engaged in chat
    }
});
```

<br/>

## onLoaded
Returns a boolean value (true or undefined) indicating when the plugin is ready.

```js
this.$tawkMessenger.onLoaded();

// Example
if (this.$tawkMessenger.onLoaded()) {
    // do something when widget is ready
}
```

## onBeforeLoaded
Returns a boolean value (true or undefined) indicating when plugin is initialize.

```js
this.$tawkMessenger.onBeforeLoaded();

// Example
if (this.$tawkMessenger.onBeforeLoaded()) {
    // do something before onload
}
```

## widgetPosition
Returns a string for current position of the widget.

```js
this.$tawkMessenger.widgetPosition();

// Example
this.$tawkMessenger.$on('load', () => {
    if (this.$tawkMessenger.widgetPosition() === 'br') {
        // do something if the widget is at bottom right
    }
});
```

<br/>

## endChat
Ends the current ongoing chat.

```js
this.$tawkMessenger.endChat();

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.endChat();
});
```

<br/>

## setAttributes
Set custom metadata regarding this chat/visitor.

This function takes in two values: attribute and callback.

The attribute value is of the object data type, which is a key value pair.

The key is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash).

You can also use this function to set the visitor name and email. However, you will need to enable the secure mode first and also supply the calculated hash value in this function.

Refer to the secure mode section below on how to do this.

The reason it needs to be in [secure mode](#securemode) is to ensure data integrity — to ensure the value sent from the widget to the dashboard is true and has not been tampered with.

The callback, which is a function, will be invoked to notify whether the save failed.

Error messages returned:

1. INVALID_ATTRIBUTES: No attributes were sent
1. SESSION_EXPIRED: The visitor’s current session has expired
1. SERVER_ERROR: Internal server error
1. ACCESS_ERROR: Error in accessing the page
1. ATTRIBUTE_LIMIT_EXCEEDED: Total custom attributes (excluding name, email and hash) is 50
1. CONTAINS_INVALID_KEY: Custom key is not alphanumeric or dash (keys will be lower case)
1. CONTAINS_INVALID_VALUE: Custom value is empty or the total length is more than 255 characters

```js
this.$tawkMessenger.setAttributes(attributes, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.setAttributes({
            id : 'A1234',
            store : 'Midvalley'
        }, function(error) {
            // do something if error
        });
});

// Example for setting name and email

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.setAttributes({
            name : 'Name',
            email : 'email@email.com',
            hash : 'hash value'
        }, function(error) {
            // do something if error
        });
});
```

<br/>

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
this.$tawkMessenger.addEvent(eventName, metaData, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.addEvent(
        'requested-quotation',
        function(error) {
            // do something if error
        }
    );

    this.$tawkMessenger.addEvent(
        'product-add-to-cart',
        {
            sku : 'A0012',
            name : 'Jeans',
            price : '50'
        },
        function(error) {
            // do something if error
        }
    );
});
```

<br/>

## addTags
Add tags to the chat.
This function takes in two values; tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessengerVue.addTags(tags, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.addTags(
        [
            'hello',
            'world'
        ],
        function(error) {
            // do something if error
        }
    );
});
```

<br/>

## removeTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessengerVue.removeTags(tags, callback);

// Example

this.$tawkMessenger.$on('load', () => {
    this.$tawkMessenger.removeTags(
        [
            'hello',
            'world'
        ],
        function (error) {
            // do something if error
        }
    );
});
```

<br/>

## secureMode
Secure method is to ensure the data you are sending is actually from you.

To enable secure mode, embed following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

```js
this.$tawkMessenger.visitor({
    name : 'Name',
    email : 'email@email.com',
    hash : '<calculate-hash>'
});
```

<br/>

## switchWidget
Disconnect the current widget connection, logout if it has existing user login and switch to
another widget.

```js
this.$tawkMessenger.switchWidget({
    propertyId : 'property_id',
    widgetId : 'widget_id'
}, function() {
    // do something
});
```

<br/>

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this object in a function, as the values need to be available before the widget script is downloaded. Setting or changing the values after the widget script has been downloaded will not update the widget’s style.

### zIndex
```js
// ZIndex
Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : Integer | String 
    }
});

// Example

Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : 1000
    }
});

Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : '1000'
    }
});

Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : '1000 !important'
    }
});
```

<br/>

### Visibility
```js
// ZIndex
Vue.use(TawkMessengerVue, {
    customStyle : {
        visibility : {
            dekstop : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            },

            mobile : {
                xOffset : String | Integer, // '20' || 20
                yOffset : String | Integer,
                position : '' // 'br', 'bl', 'cr', 'cl', 'tr', 'tl'
            }
        }
    }
});

// Example

Vue.use(TawkMessengerVue, {
    customStyle : {
        visibility : {
            dekstop : {
                xOffset : '15',
                yOffset : '15',
                position : 'cr'
            },

            mobile : {
                xOffset : 15,
                yOffset : 15,
                position : 'bl'
            }
        }
    }
});
```