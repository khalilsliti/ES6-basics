const compose = (fn1,fn2)=>
{
    return (arg)=> {
        return result=fn2(arg)
        return fn1(result)
    };
    }
  
