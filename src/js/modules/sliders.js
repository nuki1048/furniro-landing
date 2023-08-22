/* eslint-disable no-unused-vars */
import { tns } from 'tiny-slider';

const mainSlider = tns({
  autoWidth: true,
  items: 1,
  startIndex: 1,
  gutter: 32,
  mouseDrag: true,
  swipeAngle: false,
  container: '#main-slider',
  controlsContainer: '#main-slide-controls-container',
  navContainer: '#main-slider-customize-thumbnails',
  navAsThumbnails: true,
  center: true,
  loop: false,
  speed: 600,
  // autoplay: true,
  autoplayButtonOutput: false,
  responsive: {
    575: {
      items: 1,
    },
    1200: {
      items: 3,
    },
  },
});

const previewSlider = tns({
  container: '#preview-slider',
  items: 1,
  center: true,
  loop: false,
  swipeAngle: false,
  speed: 400,
  autoWidth: true,
  gutter: 24,
  navAsThumbnails: true,
  controlsContainer: '#preview-slider-controls-container',
  navContainer: '#preview-slider-customize-thumbnails',
  responsive: {
    0: {
      items: 1,
      center: true,
    },
    992: {
      items: 2.5,
      center: false,
      autoWidth: false,
    },
  },
});

const thirdSlider = tns({
  autoWidth: true,
  items: 1,
  gutter: 32,
  mouseDrag: true,
  swipeAngle: false,
  container: '#third-slider',
  controlsContainer: '#third-slider-controls-container',
  navContainer: '#third-slider-customize-thumbnails',
  navAsThumbnails: true,
  loop: true,
  speed: 600,
  autoplayButtonOutput: false,
  responsive: {
    0: {
      items: 1,
      center: true,
      gutter: 10,
    },
  },
});
