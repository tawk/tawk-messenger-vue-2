# How to Use

## Import the plugin
Go to your main file which is commonly located at **src/main.js** please add this code.

```js
import TawkMessengerVue from 'tawk-messenger-vue';
```

## Add the plugin
Add this code in your main file, the **propertyId** and **widgetId** will be found on your tawk dashboard **Administration > Chat Widget**.

```js
Vue.use(TawkMessengerVue, {
    propertyId : 'property_id',
    widgetId : 'widget_id'
});
```

## Using API
You can see the documentation of [API reference](api-reference.md) here.

```js
Vue.use(TawkMessengerVue, {
    propertyId : 'property_id',
    widgetId : 'widget_id',
});

// In your vue components you can call the $tawkMessenger globally
this.$tawkMessenger.$on('load', () => {
    // place your code here
});

this.$tawkMessenger.toggle();
```
