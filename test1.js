actual=null;
(function(){
var sameName="outer";
var fn=function(){
    var sameName="inner";
    
}
actual=sameName;
fn ()
})()
console.log(actual);