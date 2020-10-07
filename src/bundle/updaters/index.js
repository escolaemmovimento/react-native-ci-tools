const plistUpdater = require('./ios/plist');
const stringsUpdater = require('./android/strings');
const manifestUpdater = require('./android/manifest');
const gradleUpdater = require('./android/gradle');
const mainAppUpdater = require('./android/main_app');
const mainActivityUpdater = require('./android/main_activity');
const xcodeProjUpdater = require('./ios/xcodeproj');

module.exports = { plistUpdater, stringsUpdater, manifestUpdater, gradleUpdater, mainAppUpdater, mainActivityUpdater, xcodeProjUpdater };