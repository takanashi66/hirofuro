import SweetScroll from 'sweet-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const sweetScroll = new SweetScroll({
      trigger: "a[href^='#']"
  });
}, false)