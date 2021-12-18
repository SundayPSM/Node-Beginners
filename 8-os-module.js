const os=require('os')

// info about current user
const user=os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} in Sec`);
console.log(`The system Uptime is ${(os.uptime())/60} in Min`);
console.log(`The system Uptime is ${(os.uptime())/3600} in hours`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOs);
