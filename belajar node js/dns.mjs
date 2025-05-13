import dns from "dns/promises";

const address= await dns.lookup("www.cloud.lucidlynk.my.id");
console.info(address.address);
console.info(address.family);