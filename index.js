/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Importance} from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  }});

  PushNotification.popInitialNotification((notification) => {
    console.log('Initial Notification', notification);
  });

  PushNotification.createChannel(
    {
      channelId: "fcm_fallback_notification_channel", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );


  PushNotification.getChannels(function(channels) {
    console.log('getchannels gives us', channels);
  });

AppRegistry.registerComponent(appName, () => App);
