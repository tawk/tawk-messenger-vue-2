# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

<br/>

## Table of contents
- [API Reference](#api-reference)
  - [Table of contents](#table-of-contents)
  - [tawkLoad](#tawkload)
  - [tawkStatusChange](#tawkstatuschange)
  - [tawkBeforeLoad](#tawkbeforeload)
  - [tawkChatMaximized](#tawkchatmaximized)
  - [tawkChatMinimized](#tawkchatminimized)
  - [tawkChatHidden](#tawkchathidden)
  - [tawkChatStarted](#tawkchatstarted)
  - [tawkChatEnded](#tawkchatended)
  - [tawkPrechatSubmit](#tawkprechatsubmit)
  - [tawkOfflineSubmit](#tawkofflinesubmit)
  - [tawkChatMessageVisitor](#tawkchatmessagevisitor)
  - [tawkChatMessageAgent](#tawkchatmessageagent)
  - [tawkChatMessageSystem](#tawkchatmessagesystem)
  - [tawkAgentJoinChat](#tawkagentjoinchat)
  - [tawkAgentLeaveChat](#tawkagentleavechat)
  - [tawkChatSatisfaction](#tawkchatsatisfaction)
  - [tawkVisitorNameChanged](#tawkvisitornamechanged)
  - [tawkFileUpload](#tawkfileupload)
  - [tawkTagsUpdated](#tawktagsupdated)
  - [tawkUnreadCountChanged](#tawkunreadcountchanged)
  - [tawkVisitor](#tawkvisitor)
  - [tawkMaximize](#tawkmaximize)
  - [tawkMinimize](#tawkminimize)
  - [tawkToggle](#tawktoggle)
  - [tawkPopup](#tawkpopup)
  - [tawkGetWindowType](#tawkgetwindowtype)
  - [tawkShowWidget](#tawkshowwidget)
  - [tawkHideWidget](#tawkhidewidget)
  - [tawkToggleVisibility](#tawktogglevisibility)
  - [tawkGetStatus](#tawkgetstatus)
  - [tawkIsChatMaximized](#tawkischatmaximized)
  - [tawkIsChatMinimized](#tawkischatminimized)
  - [tawkIsChatHidden](#tawkischathidden)
  - [tawkIsChatOngoing](#tawkischatongoing)
  - [tawkIsVisitorEngaged](#tawkisvisitorengaged)
  - [tawkOnLoaded](#tawkonloaded)
  - [tawkOnBeforeLoaded](#tawkonbeforeloaded)
  - [tawkWidgetPosition](#tawkwidgetposition)
  - [tawkEndChat](#tawkendchat)
  - [tawkSetAttributes](#tawksetattributes)
  - [tawkAddEvent](#tawkaddevent)
  - [tawkAddTags](#tawkaddtags)
  - [tawkRemoveTags](#tawkremovetags)
  - [secureMode](#securemode)
  - [customstyle](#customstyle)
    - [zIndex](#zindex)
    - [Visibility](#visibility)

<br/>

## tawkLoad
Listen on event that invoked right after the widget is rendered. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkLoad', () => {
    // place your code here
});
```

<br/>

## tawkStatusChange
Listen on event that invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkStatusChage', (status) => {
    // place your code here
});
```

<br/>

## tawkBeforeLoad
Listen on event that invoked right when Tawk_API is ready to be used and before the widget is rendered. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkBeforeLoad', () => {
    // place your code here
});
```

<br/>

## tawkChatMaximized
Listen on event that invoked when the widget is maximized. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatMaximized', () => {
    // place your code here
})
```

<br/>

## tawkChatMinimized
Listen on event that invoked when the widget is minimized. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatMinimized', () => {
    // place your code here
});
```

<br/>

## tawkChatHidden
Listen on event that invoked when the widget is hidden. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatHidden', () => {
    // place your code here
});
```

<br/>

## tawkChatStarted
Listen on event that invoked when the widget is started.

```js
this.$tawkMessenger.$on('tawkChatStarted', () => {
    // place your code here
});
```

<br/>

## tawkChatEnded
Listen on event that invoked when the widget is ended. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatEnded', () => {
    // place your code here
});
```

<br/>

## tawkPrechatSubmit
Listen on event that invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkPrechatSubmit', (data) => {
    // place your code here
});
```

<br/>

## tawkOfflineSubmit
Listen on event that invoked when the Offline form is submitted. The submitted form data is passed to the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkOfflineSubmit', (data) => {
    // place your code here
});
```

<br/>

## tawkChatMessageVisitor
Listen on event that invoked when message is sent by the visitor. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatMessageVisitor', (message) => {
    // place your code here
});
```

<br/>

## tawkChatMessageAgent
Listen on event that invoked when message is sent by the agent. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatMessageAgent', (message) => {
    // place your code here
});
```

<br/>

## tawkChatMessageSystem
Listen on event that invoked when message is sent by the system. The message is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatMessageSystem', (message) => {
    // place your code here
});
```

<br/>

## tawkAgentJoinChat
Listen on event that invoked when an agent joins the chat. The data is passed to the function. Will contain {name : ”, position : ”, image : ”, id : ”}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkAgentJoinChat', (data) => {
    // place your code here
});
```

<br/>

## tawkAgentLeaveChat
Listen on event that invoked when an agent leaves the chat. The data is passed to the function. Will contain {name : ”, id : ”}. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkAgentLeaveChat', (data) => {
    // place your code here
});
```

<br/>

## tawkChatSatisfaction
Listen on event that invoked when an agent leaves the chat. The satisfaction is passed to the function. -1 = dislike | 0 = neutral | 1 = like. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkChatSatisfaction', (satisfaction) => {
    // place your code here
});
```

<br/>

## tawkVisitorNameChanged
Listen on event that invoked when the visitor manually changes his name. The visitorName is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkVisitorNameChanged', (visitorName) => {
    // place your code here
});
```

<br/>

## tawkFileUpload
Listen on event that invoked when a file is uploaded. The link to the uploaded file is passed to the function. This is not supported in pop out chat window.

```js
this.$tawkMessenger.$on('tawkFileUpload', (link) => {
    // place your code here
});
```

<br/>

## tawkTagsUpdated
Listen on event that invoked when a tag is updated.

```js
this.$tawkMessenger.$on('tawkTagsUpdated', (data) => {
    // place your code here
});
```

<br/>

## tawkUnreadCountChanged
Listen on event that returns count of unread messages.

```js
this.$tawkMessenger.$on('tawkUnreadCountChanged', (count) => {
    // place your code here
});
```

<br/>

## tawkVisitor
Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then use the [setAttributes](#setAttributes) function instead.

```js
this.$tawkMessenger.tawkVisitor({
    name : 'Name',
    email : 'email@email.com'
});
```

<br/>

## tawkMaximize
Maximizes the chat widget.

```js
this.$tawkMessenger.tawkMaximize();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkMaximize();
});
```

<br/>

## tawkMinimize
Minimizes the chat widget.

```js
this.$tawkMessenger.tawkMinimize();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkMinimize();
});
```

<br/>

## tawkToggle
Minimizes or Maximizes the chat widget based on the current state.

```js
this.$tawkMessenger.tawkToggle();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkToggle();
});
```

<br/>

## tawkPopup
Opens the chat widget as a pop out.

```js
this.$tawkMessenger.tawkPopup();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkPopup();
});
```

<br/>

## tawkGetWindowType
Returns the current widget type whether it’s inline or embed.

```js
this.$tawkMessenger.tawkGetWindowType();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    if (this.$tawkMessenger.tawkGetWindowType() === 'inline') {
        // do something if it's inline
    } else {
        // do something if it's embed
    }
});
```

<br/>

## tawkShowWidget
Shows the chat widget.

```js
this.$tawkMessenger.tawkShowWidget();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkShowWidget();
});
```

<br/>

## tawkHideWidget
Hide the chat widget.

```js
this.$tawkMessenger.tawkHideWidget();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkHideWidget();
});
```

<br/>

## tawkToggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
this.$tawkMessenger.tawkToggleVisibility();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkToggleVisibility();
});
```

<br/>

## tawkGetStatus
Returns the current page status (online, away or offline).

```js
this.$tawkMessenger.tawkGetStatus();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    const pageStatus = this.$tawkMessenger.tawkGetStatus();

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

## tawkIsChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
this.$tawkMessenger.tawkIsChatMaximized();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    if (this.$tawkMessenger.tawkIsChatMaximized()) {
        // do something it it's maximized
    }
});
```

<br/>

## tawkIsChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
this.$tawkMessenger.tawkIsChatMinimized();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    if (this.$tawkMessenger.tawkIsChatMinimized()) {
        // do something if it's minimized
    }
});
```

<br/>

## tawkIsChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
this.$tawkMessenger.tawkIsChatHidden();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    if (this.$tawkMessenger.tawkIsChatHidden()) {
        // do something if chat widget is hidden
    }
});
```

<br/>

## tawkIsChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
this.$tawkMessenger.tawkIsChatOngoing();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    if (this.$tawkMessenger.tawkIsChatOngoing()) {
        // do something if there's ongoing chat
    }
});
```

<br/>

## tawkIsVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

```js
this.$tawkMessenger.tawkIsVisitorEngaged();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    if (this.$tawkMessenger.tawkIsVisitorEngaged()) {
        // do something if visitor engaged in chat
    }
});
```

<br/>

## tawkOnLoaded
Returns a boolean value (true or undefined) indicating when the plugin is ready.

```js
this.$tawkMessenger.tawkOnLoaded();

// Example
if (this.$tawkMessenger.tawkOnLoaded()) {
    // do something when widget is ready
}
```

## tawkOnBeforeLoaded
Returns a boolean value (true or undefined) indicating when plugin is initialize.

```js
this.$tawkMessenger.tawkOnBeforeLoaded();

// Example
if (this.$tawkMessenger.tawkOnBeforeLoaded()) {
    // do something before onload
}
```

## tawkWidgetPosition
Returns a string for current position of the widget.

```js
this.$tawkMessenger.tawkWidgetPosition();

// Example
this.$tawkMessenger.$on('tawkLoad', () => {
    if (this.$tawkMessenger.tawkWidgetPosition() === 'br') {
        // do something if the widget is at bottom right
    }
});
```

<br/>

## tawkEndChat
Ends the current ongoing chat.

```js
this.$tawkMessenger.tawkEndChat();

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkEndChat();
});
```

<br/>

## tawkSetAttributes
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
this.$tawkMessenger.tawkSetAttributes(attributes, callback);

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkSetAttributes({
            id : 'A1234',
            store : 'Midvalley'
        }, function(error) {
            // do something if error
        });
});

// Example for setting name and email

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkSetAttributes({
            name : 'Name',
            email : 'email@email.com',
            hash : 'hash value'
        }, function(error) {
            // do something if error
        });
});
```

<br/>

## tawkAddEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
this.$tawkMessenger.tawkAddEvent(eventName, metaData, callback);

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkAddEvent(
        'requested-quotation',
        function(error) {
            // do something if error
        }
    );

    this.$tawkMessenger.tawkAddEvent(
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

## tawkAddTags
Add tags to the chat.
This function takes in two values; tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessengerVue.tawkAddTags(tags, callback);

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkAddTags(
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

## tawkRemoveTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessengerVue.tawkRemoveTags(tags, callback);

// Example

this.$tawkMessenger.$on('tawkLoad', () => {
    this.$tawkMessenger.tawkRemoveTags(
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
this.$tawkMessenger.tawkVisitor({
    name : 'Name',
    email : 'email@email.com',
    hash : '<calculate-hash>'
})
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