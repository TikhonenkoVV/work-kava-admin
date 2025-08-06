export const sizes = {
  onlymobile: '1023',
  mobile: '414',
  tablet: '1024',
  desktop: '1440'
};

export const devices = {
  onlymobile: `max-width: ${sizes.onlymobile}px`,
  mobile: `min-width: ${sizes.mobile}px`,
  tablet: `min-width: ${sizes.tablet}px`,
  desktop: `min-width: ${sizes.desktop}px`,
  retina: 'min-device-pixel-ratio: 2'
};

export const lightTheme = Object.freeze({
  colors: {
    primaryBackground: '#ffffff',
    primaryText: '#303030ff',
    backdrop: 'rgba(0, 0, 0, 0.40)',
    validationError: '#ED4337'
  }
});

export const darkTheme = Object.freeze({
  colors: {
    primaryBackground: '#303030ff',
    primaryText: '#ffffff',
    backdrop: 'rgba(0, 0, 0, 0.40)',
    validationError: '#ED4337'
  }
});

export const theme = Object.freeze({
  sizes,

  // useWebp: document.querySelector('html').classList.contains('webp'),

  devices,

  baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)'
});
