const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(a<0|| b<0){
            return reject('Numbers must be none-negative');
        }
        resolve(a+b);
    },3000);
    });
}
//USING ASYNC AWAIT
const doWork = async ()=>{
const sum= await add (5,7);
return sum2= await add(sum,4);
return sum2;
}
doWork().then((result)=>{
console.log(result);
});
//USING PROMISES ONLY
add(5,7).then((sum)=>{
    return add (sum,4);
}).then((sum2)=>{
    console.log(sum2);
});