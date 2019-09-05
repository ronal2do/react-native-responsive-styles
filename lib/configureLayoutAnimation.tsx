// @flow

import Orientation from 'react-native-orientation-locker';
import { LayoutAnimation } from 'react-native';

let _animate = null;

Orientation.addOrientationListener(() => {
  if (_animate) {
    _animate();
  }
});

// export default function configureLayoutAnimation(animation: string | () => void): void {
export default function configureLayoutAnimation(animation: string): void {
  _animate = typeof animation === 'function'
    ? animation
    : LayoutAnimation[animation];
}
