function after(count, func) {
    let counter = 0;
    return (val) => {
      if (++counter >= count) func(val);
      else console.log("nothing printed")
    }
  }
  
  const called = function() { console.log('hello') };
  const afterCalled = after(3, called);
  
 afterCalled(); // -> nothing is printed
 afterCalled(); // -> nothing is printed
 afterCalled(); // -> 'hello' is printed
afterCalled(); // -> 'hello' is printed