


class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(v1, v2) {
    for(;;) {    
        try {
            return primitiveMultiply(v1,v2);
        } catch (e) {
            
        }   

    }
}


const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    // Your code here.
    try {
        box.unlock();
        body();
        box.lock();
    } catch (e) {

    } finally {
        box.lock();
    }


  }
  

  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });

  console.log(box);

