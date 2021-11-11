# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

## Table of contents
- [onLoad](#onload)
- [onStatusChange](#onstatuschange)
- [onBeforeLoad](#onbeforeload)
- [onChatMaximized](#onchatmaximized)
- [onChatMinimized](#onchatminimized)
- [onChatHidden](#onchathidden)
- [onChatStarted](#onchatstarted)
- [onChatEnded](#onchatended)
- [onPrechatSubmit](#onprechatsubmit)
- [onOfflineSubmit](#onofflinesubmit)
- [onChatMessageVisitor](#onchatmessagevisitor)
- [onChatMessageAgent](#onchatmessageagent)
- [onChatMessageSystem](#onchatmessagesystem)
- [onAgentJoinChat](#onagentjoinchat)
- [onAgentLeaveChat](#onagentleavechat)
- [onChatSatisfaction](#onchatsatisfaction)
- [onVisitorNameChanged](#onvisitornamechanged)
- [onFileUpload](#onfileupload)
- [onTagsUpdated](#ontagsupdated)
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
- [endChat](#endchat)
- [setAttributes](#setattributes)
- [addEvent](#addevent)
- [addTags](#addtags)
- [removeTags](#removetags)
- [secureMode](#securemode)
- [customStyle](#customstyle)

## onLoad
Listen on event that invoked right after the widget is rendered. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onLoad', () => {
    // place your code here
});
```

## onStatusChange
Listen on event that invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onStatusChage', (status) => {
    // place your code here
});
```

## onBeforeLoad
Listen on event that invoked right when Tawk_API is ready to be used and before the widget is rendered. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onBeforeLoad', () => {
    // place your code here
});
```

## onChatMaximized
Listen on event that invoked when the widget is maximized. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatMaximized', () => {
    // place your code here
})
```

## onChatMinimized
Listen on event that invoked when the widget is minimized. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatMinimized', () => {
    // place your code here
});
```

## onChatHidden
Listen on event that invoked when the widget is hidden. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatHidden', () => {
    // place your code here
});
```

## onChatStarted
Listen on event that invoked when the widget is started.

```js
this.$tawkMessenger.$on('onChatStarted', () => {
    // place your code here
});
```

## onChatEnded
Listen on event that invoked when the widget is ended. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatEnded', () => {
    // place your code here
});
```

## onPrechatSubmit
Listen on event that invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onPrechatSubmit', (data) => {
    // place your code here
});
```

## onOfflineSubmit
Listen on event that invoked when the Offline form is submitted. The submitted form data is passed to the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onOfflineSubmit', (data) => {
    // place your code here
});
```

## onChatMessageVisitor
Listen on event that invoked when message is sent by the visitor. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatMessageVisitor', (message) => {
    // place your code here
});
```

## onChatMessageAgent
Listen on event that invoked when message is sent by the agent. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatMessageAgent', (message) => {
    // place your code here
});
```

## onChatMessageSystem
Listen on event that invoked when message is sent by the system. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatMessageSystem', (message) => {
    // place your code here
});
```

## onAgentJoinChat
Listen on event that invoked when an agent joins the chat. The data is passed to the function. Will contain {name : ”, position : ”, image : ”, id : ”}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onAgentJoinChat', (data) => {
    // place your code here
});
```

## onAgentLeaveChat
Listen on event that invoked when an agent leaves the chat. The data is passed to the function. Will contain {name : ”, id : ”}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onAgentLeaveChat', (data) => {
    // place your code here
});
```

## onChatSatisfaction
Listen on event that invoked when an agent leaves the chat. The satisfaction is passed to the function. -1 = dislike | 0 = neutral | 1 = like. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onChatSatisfaction', (satisfaction) => {
    // place your code here
});
```

## onVisitorNameChanged
Listen on event that invoked when the visitor manually changes his name. The visitorName is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onVisitorNameChanged', (visitorName) => {
    // place your code here
});
```

## onFileUpload
Listen on event that invoked when a file is uploaded. The link to the uploaded file is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('onFileUpload', (link) => {
    // place your code here
});
```

## onTagsUpdated
Listen on event that invoked when a tag is updated.

```js
this.$tawkMessenger.$on('onTagsUpdated', (data) => {
    // place your code here
});
```

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

## maximize
Maximizes the chat widget.

```js
this.$tawkMessenger.maximize();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.maximize();
});
```

## minimize
Minimizes the chat widget.

```js
this.$tawkMessenger.minimize();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.minimize();
});
```

## toggle
Minimizes or Maximizes the chat widget based on the current state.

```js
this.$tawkMessenger.toggle();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.toggle();
});
```

## popup
Opens the chat widget as a pop out.

```js
this.$tawkMessenger.popup();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.popup();
});
```

## getWindowType
Returns the current widget type whether it’s inline or embed.

```js
this.$tawkMessenger.getWindowType();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    if (this.$tawkMessenger.getWindowType() === 'inline') {
        // do something if it's inline
    } else {
        // do something if it's embed
    }
});
```

## showWidget
Shows the chat widget.

```js
this.$tawkMessenger.showWidget();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.showWidget();
});
```

## hideWidget
Hide the chat widget.

```js
this.$tawkMessenger.hideWidget();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.hideWidget();
});
```


## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
this.$tawkMessenger.toggleVisibility();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.toggleVisibility();
});
```

## getStatus
Returns the current page status (online, away or offline).

```js
this.$tawkMessenger.getStatus();

// Example

this.$tawkMessenger.$on('onLoad', () => {
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

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
this.$tawkMessenger.isChatMaximized();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    if (this.$tawkMessenger.isChatMaximized()) {
        // do something it it's maximized
    }
});
```

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
this.$tawkMessenger.isChatMinimized();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    if (this.$tawkMessenger.isChatMinimized()) {
        // do something if it's minimized
    }
});
```

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
this.$tawkMessenger.isChatHidden();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    if (this.$tawkMessenger.isChatHidden()) {
        // do something if chat widget is hidden
    }
});
```

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
this.$tawkMessenger.isChatOngoing();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    if (this.$tawkMessenger.isChatOngoing()) {
        // do something if there's ongoing chat
    }
});
```

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

```js
this.$tawkMessenger.isVisitorEngaged();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    if (this.$tawkMessenger.isVisitorEngaged()) {
        // do something if visitor engaged in chat
    }
});
```

## endChat
Ends the current ongoing chat.

```js
this.$tawkMessenger.endChat();

// Example

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.endChat();
});
```

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

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.setAttributes({
            id : 'A1234',
            store : 'Midvalley'
        }, function(error) {
            // do something if error
        });
});

// Example for setting name and email

this.$tawkMessenger.$on('onLoad', () => {
    this.$tawkMessenger.setAttributes({
            name : 'Name',
            email : 'email@email.com',
            hash : 'hash value'
        }, function(error) {
            // do something if error
        });
});
```

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
this.$tawkMessenger.addEvent(eventName, metaData, callback);

// Example

this.$tawkMessenger.$on('onLoad', () => {
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

this.$tawkMessenger.$on('onLoad', () => {
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

this.$tawkMessenger.$on('onLoad', () => {
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
})
```

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this object in a function, as the values need to be available before the widget script is downloaded. Setting or changing the values after the widget script has been downloaded will not update the widget’s style.

```js
Vue.use(TawkMessengerVue, {
    customStyle : {
        zIndex : Integer|String
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
