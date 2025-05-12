function samplePromise(){
    return  Promise.resolve("Iwan")
}



async function run() {
    const name= await samplePromise();
    console.info(name);
}

run();