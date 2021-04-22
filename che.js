function cycleIterator(array) {
    let i=0;
   function inner(){
      if (i<array.length)
        {
         x=array[i];
            i++;
            return x;
        }
          else
          {
            i=0;
           x=array[i];
            i++;
            return x;
          }
    }
    return inner;
  }
  
  // /*** Uncomment these to check your work! ***/
   const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
   const getDay = cycleIterator(threeDayWeekend);
   console.log(getDay());
   console.log(getDay());
   console.log(getDay());
   console.log(getDay());
   console.log(getDay());
   console.log(getDay());
   console.log(getDay());
