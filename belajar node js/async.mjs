function samplePromise(){
    return  Promise.resolve("Iwan")
}



const name= await samplePromise();
console.info(name);


