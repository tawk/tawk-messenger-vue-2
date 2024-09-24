# Server Side Rendering
The plugin is fully compatible in Nuxt JS, but we need to setup few things.

<br/>

## Setup
Create a file **tawk-messenger.client.js** in **plugins/** directory in your project, and add the
code below.

```js
import Vue from 'vue';
import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-2';

export default function () {
    Vue.use(TawkMessengerVue, {
        propertyId : 'property_id',
        widgetId : 'widget_id'
    });
}
```

<br/>

## Import in config
In **nuxt.config.js** file we need to add the path of the plugin, and set the mode as client.

```js
module.exports = {
    ...
    plugins : [
        {
            src: '~/plugins/tawk-messenger.client.js',
            mode : 'client'
        }
    ],
    ...
}
```

<br/>

## Instance property
To access the API functions, call the **$tawkMessenger** anywhere in your components.

```js
this.$tawkMessenger.tawkToggle();
```

<br/>

## Event handling
You can listen on events emitted by the plugin, It must be exactly match the name used to listen
to that event.

```js
this.$tawkMessenger.$on('tawkLoad', () => {
    // place your code here
});
```

<br/>

You can see the list of APIs in [API reference](api-reference.md).