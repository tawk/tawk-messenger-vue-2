# Changelog
**Keep track of every change of the tawk-messenger-vue-2.**
This changelog list all additions and updates to the plugin, in chronological order.
All notable changes in this project will be documented in this file.

## [1.1.0] - 2025-06-12
### Breaking Changes
- **library:** Rename all API names to have `tawk` prefix to avoid name collissions ([#22](https://github.com/tawk/tawk-messenger-vue-2/pull/22)).

### Major Changes
- **library:** Add `tawkSwitchWidget` new API to allow switching to different property or widget ([#6](https://github.com/tawk/tawk-messenger-vue-2/pull/6)).
- **library:** Add `autoStart`, `tawkStart`, `tawkShutdown` new APIs to manually start and end the socket connection ([#18](https://github.com/tawk/tawk-messenger-vue-2/pull/18)).

## [1.0.3] - 2023-04-17
- **plugin:** Increment the version base on package. ([12e2f09](https://github.com/tawk/tawk-messenger-vue-2/commit/12e2f09afdfb47f752b0c9f7f10523dc2632bf58)).
- **package:** Move `vue` as peerDependencies, and `core-js`, `webpack-cli` as devDependencies ([b59172e](https://github.com/tawk/tawk-messenger-vue-2/commit/b59172e21f5a41b04f8ba658ce69a8ab0edd0524)).
- **documentation:** Add version of vue due to file name changes ([f883611](https://github.com/tawk/tawk-messenger-vue-2/commit/f883611387d16f06f4e1f3401497d9c8cb52e3bc)).
- **package:** Update `description` property ([0009b57](https://github.com/tawk/tawk-messenger-vue-2/commit/0009b576864349c55f2539db806ea743ca26129e)).