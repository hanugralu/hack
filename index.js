fetch('/notes/1').then(r=>r.text()).then(d=>fetch('/notes',{method:'POST',body:'title=X&content=aaa'}))
