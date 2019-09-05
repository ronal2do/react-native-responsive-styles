import isResponsive from './isResponsive';

type StyleDefinition = number | void | {
  [key: string]: {}
}

export default function getStyleByOrientation(
  style: StyleDefinition,
  orientation: string
): StyleDefinition {
  console.log('@@ => getStyleByOrientation', style, '!isResponsive(style)', !isResponsive(style))
  if (!style || typeof style === 'number' || !isResponsive(style)) {
    return style;
  }

  //eslint-disable-next-line no-unused-vars
  const { landscape, portrait, ...rest } = style;
  const activeStyle = style[orientation];
  console.log('activeStyle', activeStyle)
  if (typeof activeStyle === 'object') {
    return { ...rest, ...activeStyle };
  } else {
    return rest;
  }
}
