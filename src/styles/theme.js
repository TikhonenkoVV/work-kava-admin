export const sizes = {
  onlyMobile: '1023',
  lessMobile: '413',
  mobile: '414',
  tablet: '1024',
  desktop: '1440'
};

export const devices = {
  lessMobile: `max-width: ${sizes.lessMobile}px`,
  onlymobile: `max-width: ${sizes.onlyMobile}px`,
  mobile: `min-width: ${sizes.mobile}px`,
  tablet: `min-width: ${sizes.tablet}px`,
  desktop: `min-width: ${sizes.desktop}px`,
  retina: 'min-device-pixel-ratio: 2'
};

export const lightTheme = Object.freeze({
  colors: {
    primaryBackground: '#ffffffff',
    elementsBackground: '#ebebebff',
    buttonsBackground: '#c1c1c1ff',
    primaryText: '#303030ff',
    backdrop: 'rgba(0, 0, 0, 0.40)',
    validationError: '#ED4337',
    langMenuBackground: '#dbdbdbff',
    themeTogglerBackground: '#ffffff'
  }
});

export const darkTheme = Object.freeze({
  colors: {
    primaryBackground: '#303030ff',
    elementsBackground: '#3f3f3fff',
    buttonsBackground: '#252525ff',
    primaryText: '#ffffff',
    backdrop: 'rgba(0, 0, 0, 0.40)',
    validationError: '#ED4337',
    langMenuBackground: '#252525ff',
    themeTogglerBackground: '#747474ff'
  }
});

export const theme = Object.freeze({
  sizes,

  // useWebp: document.querySelector('html').classList.contains('webp'),

  devices,

  baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)'
});
