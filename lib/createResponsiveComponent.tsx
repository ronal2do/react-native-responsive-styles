// @flow

import React, { useState, useEffect, ReactNode } from 'react';
import Orientation, { OrientationType } from 'react-native-orientation-locker';

import getCurrentOrientation from './getCurrentOrientation';
import getStyleByOrientation from './getStyleByOrientation';

interface OrientationProps { children: ReactNode; style: number | void | { [key: string]: {}; } | StyleDefinition[]; }

export function createResponsiveComponent<P extends object>(BaseComponent: React.ComponentType<P>) {
  if (!BaseComponent) {
    return BaseComponent;
  }

  return class extends React.Component<OrientationProps> {
    state = {
      orientation: getCurrentOrientation()
    }

    componentDidMount() {
      Orientation.addOrientationListener(this._setOrientation);
    }

    componentWillUnmount() {
      Orientation.removeOrientationListener(this._setOrientation);
    }

    _setOrientation = (orientation: OrientationType) => {
      this.setState({
        orientation: orientation === 'PORTRAIT' ? 'portrait' : 'landscape'
      });
    }

    render() {
      const { orientation } = this.state;
      const { style, children, ...props } = this.props;

      const getStyle = (styleObj) => getStyleByOrientation(styleObj, orientation);

      const resolvedStyle = Array.isArray(style)
        ? style.map(getStyle)
        : getStyle(style);

      return (
        <BaseComponent style={resolvedStyle} {...props}>
          {children}
        </BaseComponent>
      );
    }
  };
}

// export const createResponsiveComponent = BaseComponent => props => {
//   if (!BaseComponent) {
//     return BaseComponent;
//   }

//   const [ orientation, setOrientation ] = useState('portrait')

//   useEffect(() => {
//     Orientation.addOrientationListener(_setOrientation);
//     return () => {
//       Orientation.removeOrientationListener(_setOrientation);
//     };
//   }, [])

//   function _setOrientation(orientation) {
//     console.warn('@@ orientation', orientation)
//     setOrientation(orientation === 'PORTRAIT' ? 'portrait' : 'landscape');
//   }

//   const { style, children, ...rest } = props;

//   const getStyle = (styleObj) => getStyleByOrientation(styleObj, orientation);
//   console.log('@@ getStyle', getStyle(style))
//   const resolvedStyle = Array.isArray(style)
//     ? style.map(getStyle)
//     : getStyle(style);

//   return (
//     <BaseComponent style={resolvedStyle} {...props}>
//       {children}
//     </BaseComponent>
//   );
// };