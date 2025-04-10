function getdata(id){
    return new Promise((response,reject)=>{
        setTimeout(() => {
            console.log("Your number is ",id);
            response(200)
        }, 2000);
    })}


    async function showdata() {
        for(let i =0 ;i <=5;i++){
            console.log("getting data",i);
            await getdata(i)
        }        
    }
// ---------------- ---------------- ---------------- by Promise ---------------- ---------------- ---------------- ----------------
function getdatabypromise(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Your number is ",id);
            response(200)
        }, 2000);
    })
}

console.log("getting data 1...");

getdatabypromise(1).
                    then((response)=>{
                        console.log("getting data 2...");
                        getdatabypromise(2)
                    })
                    .then((response)=>{
                        console.log("getting data3 ...");
                        getdatabypromise(3)
                    })
// ---------------- ---------------- ---------------- by Callback ---------------- ---------------- ---------------- ----------------


function getdatac(id, callback) {
    setTimeout(() => {
        console.log("Your number is", id);
        callback();
    }, 1000);
}

getdata(1, () => {
    console.log("Getting data 1...");
    getdata(2, () => {
        console.log("Getting data 2...");
    });
});
