<p align="center">
    <img width="250"
        src="./images/tawk-vue-logo.png"
        alt="Tawk Vue logo">
</p>

## Features
- Compatible on Vue 2, Vue 3 and Nuxt
- Documented and Self explaining methods
- Small size without any external libraries
- All Javascript API are avaiable
- Maintained by [tawk.to](https://www.tawk.to]) team

<br/>

## Installation
The plugin are available in node and yarn package managers.
```bash
# Node
npm install tawk-messenger-vue

# Yarn
yarn add tawk-messenger-vue
```

<br/>

## Quickstart
Import the **tawk-messenger-vue** in your main component. The **propertyId** and **widgetId** will
be found on your tawk dashboard **Administration > Chat Widget**.

```js
import TawkMessengerVue from 'tawk-messenger-vue';

Vue.use(TawkMessengerVue, {
    propertyId : 'property_id',
    widgetId : 'widget_id'
});
```

<br/>

If you will use the plugin the Nuxt JS here is the [guide for setup](docs/ssr-setup.md).

<br/>

## Documentation

This project includes a `docs` folder with more details on:
1.  [SPA setup](docs/spa-setup.md)
1.  [SSR setup](docs/ssr-setup.md)
1.  [API Reference](docs/api-reference.md)

<br/>

## Other JS frameworks plugin
- [Vue Js](https://github.com/tawk/tawk-messenger-vue)
- [React Js](https://github.com/tawk/tawk-messenger-react)
- [Angular Js](https://github.com/tawk/tawk-messenger-angular)
- [Ember Js](https://github.com/tawk/tawk-messenger-ember)

<br/>

## Frequently Asked Questions

**Where you can approach us for suggestion or bug report?**

You can mention us on [Twitter](https://twitter.com/tawktotawk) or in our [Website](https://www.tawk.to/) just message us.
