/*
 * Replace SVG images with inline SVG
 */

export default function imgToSVG(selector) {
  const imgs = [...document.querySelectorAll(selector)];

  imgs.forEach(img => {
    const imgID    = img.getAttribute('id');
    const imgClass = img.getAttribute('class');
    const imgURL   = img.getAttribute('src');

    const request = new XMLHttpRequest();
    request.open('GET', imgURL, true);
    request.send();

    request.onreadystatechange = () => {
      if (request.readyState != 4) return;

      if (request.status != 200) {
        console.error(`imgToSVG: \n${request.status}: ${request.statusText}\n${imgURL}`);
      } else {

        // Get the SVG tag, ignore the rest
        const svg = request.responseXML.querySelector('svg');

        // Add replaced image's ID to the new SVG
        if (imgID) {
          svg.setAttribute('id', imgID);
        }

        // Add replaced image's classes to the new SVG
        if (imgClass) {
          svg.setAttribute('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        svg.removeAttribute('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        const svgViewBox = svg.getAttribute('viewBox');
        const svgWidth   = svg.getAttribute('width');
        const svgHeight  = svg.getAttribute('height');

        if (!svgViewBox && svgWidth && svgHeight) {
          svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
        }

        // Replace image with new SVG
        img.replaceWith(svg);
      }
    };

  });
}