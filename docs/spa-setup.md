# Single Page Application
Here are the basic of how to use callbacks and expose functions from the plugin.

<br/>

## Instance property
To access the API functions, call the **$tawkMessenger** anywhere in your components. Upon using
the **tawk-messenger-vue-2** it will auto register the global scope.

```js
this.$tawkMessenger.toggle();
```

<br/>

## Event handling
You can listen on events emitted by the plugin, It must be exactly match the name used to listen
to that event, you can see the list of [events](api-reference.md) here.

```js
this.$tawkMessenger.$on('load', () => {
    // place your code here
});
```

<br/><br/>
You can see the list of APIs in [API reference](api-reference.md).