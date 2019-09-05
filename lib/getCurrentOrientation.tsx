// @flow

import Orientation from 'react-native-orientation-locker';

let _currentOrientation = 'portrait';

export default function getCurrentOrientation(): string {
  return _currentOrientation;
}

const updateCurrentOrientation = (orientation: string): void => {
  _currentOrientation = orientation === 'PORTRAIT' ? 'portrait' : 'landscape';
};

Orientation.getOrientation((orientation) => {
  // workaround for API inconsistency
  // https://github.com/walmartlabs/react-native-orientation-listener/issues/10
  if (typeof orientation === 'object' && 'orientation' in orientation) {
    updateCurrentOrientation(orientation);
  } else {
    updateCurrentOrientation(orientation);
  }
});

Orientation.addOrientationListener((orientation) => {
  updateCurrentOrientation(orientation);
});
