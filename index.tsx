
import ReactNative from 'react-native';

import configureLayoutAnimation from './lib/configureLayoutAnimation';
import { createResponsiveComponent } from './lib/createResponsiveComponent';
import createResponsiveStyleSheet from './lib/createResponsiveStyleSheet';

const wrap = createResponsiveComponent;
  // wrap native components
export const ActivityIndicator = wrap(ReactNative.ActivityIndicator)
export const ActivityIndicatorIOS = wrap(ReactNative.ActivityIndicatorIOS) // To support older RN
export const Button = wrap(ReactNative.Button)
export const DatePickerIOS = wrap(ReactNative.DatePickerIOS)
export const DrawerLayoutAndroid = wrap(ReactNative.DrawerLayoutAndroid)
export const Image = wrap(ReactNative.Image)
export const KeyboardAvoidingView = wrap(ReactNative.KeyboardAvoidingView)
export const ListView = wrap(ReactNative.ListView)
export const Modal = wrap(ReactNative.Modal)
export const Picker = wrap(ReactNative.Picker)
export const PickerIOS = wrap(ReactNative.PickerIOS)
export const ProgressBarAndroid = wrap(ReactNative.ProgressBarAndroid)
export const ProgressViewIOS = wrap(ReactNative.ProgressViewIOS)
export const ScrollView = wrap(ReactNative.ScrollView)
export const SegmentedControlIOS = wrap(ReactNative.SegmentedControlIOS)
export const SnapshotViewIOS = wrap(ReactNative.SnapshotViewIOS)
export const Switch = wrap(ReactNative.Switch)
export const RecyclerViewBackedScrollView = wrap(ReactNative.RecyclerViewBackedScrollView)
export const RefreshControl = wrap(ReactNative.RefreshControl)
export const StatusBar = wrap(ReactNative.StatusBar)
export const SwitchIOS = wrap(ReactNative.SwitchIOS) // To support older RN
export const TabBarIOS = wrap(ReactNative.TabBarIOS)
export const Text = wrap(ReactNative.Text)
export const TextInput = wrap(ReactNative.TextInput)
export const ToolbarAndroid = wrap(ReactNative.ToolbarAndroid)
export const TouchableHighlight = wrap(ReactNative.TouchableHighlight)
export const TouchableNativeFeedback = wrap(ReactNative.TouchableNativeFeedback)
export const TouchableOpacity = wrap(ReactNative.TouchableOpacity)
export const TouchableWithoutFeedback = wrap(ReactNative.TouchableWithoutFeedback)
export const View = wrap(ReactNative.View)

export const StyleSheet = {
  ...ReactNative.StyleSheet,

  /**
   * override StyleSheet.create({...}) to support
   * custom `landscape` and `portrait` keys
   */
  create: createResponsiveStyleSheet,

  /**
   * Expose a method for making custom responsive components
   *
   * class CustomComponent extends React.Component { ... }
   * export default StyleSheet.makeResponsive(CustomComponent)
   */
  makeResponsive: createResponsiveComponent,

  /**
   * if you want to animate the orientation change
   * transitions, call this with one of the valid
   * LayoutAnimation types: 'spring'|'easeInEaseOut'|'linear':
   *
   * StyleSheet.configureLayoutAnimation('spring')
   *
   * Alternatively acceps a function to call when
   * orientation changes
   */
  configureLayoutAnimation,

  /**
   * A convenience style to hide an element entirely, e.g.
   * StyleSheet.create({
   *  elementStyle: {
   *    portrait: StyleSheet.hidden,
   *    landscape: {flex: 1}
   *  }
   * })
   */
  hidden: {
    flex: 0,
    width: 0,
    height: 0,
    overflow: 'hidden'
  }
}

