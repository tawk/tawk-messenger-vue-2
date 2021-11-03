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
Callback function invoked right after the widget is rendered. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onLoad : function () {
		// place your code here
	}
});
```

## onStatusChange
Callback function invoked when the page status changes. The function will receive the changed status which will be either online, away or offline. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onStatusChange : function (status) {
		// place your code here
	}
});
```

## onBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onBeforeLoad : function () {
		// place your code here
	}
});
```

## onChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onChatMaximized : function () {
		// place your code here
	}
});
```

## onChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onChatMinimized : function () {
		// place your code here
	}
});
```

## onChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onChatHidden : function () {
		// place your code here
	}
});
```

## onChatStarted
Callback function invoked when the widget is started.

```js
Vue.use(TawkMessengerVue, {
	onChatStarted : function () {
		// place your code here
	}
});
```

## onChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onChatEnded : function () {
		// place your code here
	}
});
```

## onPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onPrechatSubmit : function (data) {
		// place your code here
	}
});
```

## onOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to the callback. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onOfflineSubmit : function (data) {
		// place your code here
	}
});
```

## onChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the callback. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onOfflineSubmit : function (message) {
		// place your code here
	}
});
```

## onChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the callback. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onChatMessageAgent : function (message) {
		// place your code here
	}
});
```

## onChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the callback. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onChatMessageSystem : function (message) {
		// place your code here
	}
});
```

## onAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the callback. Will contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onAgentJoinChat : function (data) {
		// place your code here
	}
});
```

## onAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the callback. Will contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onAgentLeaveChat : function (data) {
		// place your code here
	}
});
```

## onChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the callback. -1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onChatSatisfaction : function (satisfaction) {
		// place your code here
	}
});
```

## onVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to the callback. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onVisitorNameChanged : function (visitorName) {
		// place your code here
	}
});
```

## onFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the callback. This callback is not supported in pop out chat window.

```js
Vue.use(TawkMessengerVue, {
	onFileUpload : function (link) {
		// place your code here
	}
});
```

## onTagsUpdated
Callback function invoked when a tag is updated.

```js
Vue.use(TawkMessengerVue, {
	onTagsUpdated : function (data) {
		// place your code here
	}
});
```

## visitor
Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then use the [setAttributes](#setAttributes) function instead.

```js
Vue.use(TawkMessengerVue, {
	visitor : {
		name : 'Name',
		email : 'email@email.com'
	}
});
```

## maximize
Maximizes the chat widget.

```js
$tawkMessengerVue.maximize();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.maximize();
	}
});
```

## minimize
Minimizes the chat widget.

```js
$tawkMessengerVue.minimize();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.minimize();
	}
});
```

## toggle
Minimizes or Maximizes the chat widget based on the current state.

```js
$tawkMessengerVue.toggle();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.toggle();
	}
});
```

## popup
Opens the chat widget as a pop out.

```js
$tawkMessengerVue.popup();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.popup();
	}
});
```

## getWindowType
Returns the current widget type whether it’s inline or embed.

```js
$tawkMessengerVue.getWindowType();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		if ($tawkMessengerVue.getWindowType() === 'inline') {
			// do something if it's inline
		} else {
			// do something if it's embed
		}
	}
});
```

## showWidget
Shows the chat widget.

```js
$tawkMessengerVue.showWidget();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.showWidget();
	}
});
```

## hideWidget
Hide the chat widget.

```js
$tawkMessengerVue.hideWidget();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.hideWidget();
	}
});
```


## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```js
$tawkMessengerVue.toggleVisibility();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.toggleVisibility();
	}
});
```

## getStatus
Returns the current page status (online, away or offline).

```js
$tawkMessengerVue.getStatus();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		const pageStatus = $tawkMessengerVue.getStatus();

		if (pageStatus === 'online') {
			// do something for online
		} else if (pageStatus === 'away') {
			// do something for away
		} else {
			// do something for offline
		}
	}
});
```

## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
$tawkMessengerVue.isChatMaximized();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		if ($tawkMessengerVue.isChatMaximized()) {
			// do something it it's maximized
		}
	}
});
```

## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
$tawkMessengerVue.isChatMinimized();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		if ($tawkMessengerVue.isChatMinimized()) {
			// do something if it's minimized
		}
	}
});
```

## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
$tawkMessengerVue.isChatHidden();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		if ($tawkMessengerVue.isChatHidden()) {
			// do something if chat widget is hidden
		}
	}
});
```

## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
$tawkMessengerVue.isChatOngoing();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		if ($tawkMessengerVue.isChatOngoing()) {
			// do something if there's ongoing chat
		}
	}
});
```

## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.

```js
$tawkMessengerVue.isVisitorEngaged();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		if ($tawkMessengerVue.isVisitorEngaged()) {
			// do something if visitor engaged in chat
		}
	}
});
```

## endChat
Ends the current ongoing chat.

```js
$tawkMessengerVue.endChat();

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.endChat();
	}
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
$tawkMessengerVue.setAttributes(attributes, callback);

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.setAttributes({
			id : 'A1234',
			store : 'Midvalley'
		}, function (error) {
			// do something if error
		});
	}
});

// Example for setting name and email

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.setAttributes({
			name : 'Name',
			email : 'email@email.com',
			hash : 'hash value'
		}, function (error) {
			// do something if error
		});
	}
});
```

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY, CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
$tawkMessengerVue.addEvent(eventName, metaData, callback);

// Example

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.addEvent(
			'requested-quotation',
			function (error) {
				// do something if error
			}
		);

		$tawkMessengerVue.addEvent(
			'product-add-to-cart',
			{
				sku : 'A0012',
				name : 'Jeans',
				price : '50'
			},
			function (error) {
				// do something if error
			}
		);
	}
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

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.addTags(
			[
				'hello',
				'world'
			],
			function (error) {
				// do something if error
			}
		);
	}
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

Vue.use(TawkMessengerVue, {
	onLoad : function () {
		$tawkMessengerVue.removeTags(
			[
				'hello',
				'world'
			],
			function (error) {
				// do something if error
			}
		);
	}
});
```

## secureMode
Secure method is to ensure the data you are sending is actually from you.

To enable secure mode, embed following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

```js
$tawkMessengerVue.removeTags(tags, callback);

// Example

Vue.use(TawkMessengerVue, {
	visitor : {
		name : 'Name',
		email : 'email@email.com',
		hash : '<calculate-hash>'
	}
});
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
