
const makeTimer = ()=> {
    let elapsed=0;
   
    const stopwatch = ()=> {return elapsed;}
    const incr = ()=>{ elapsed++}
    setInterval(incr, 1000);
    return stopwatch;
};
t=makeTimer();
x=t()
console.log(t())
