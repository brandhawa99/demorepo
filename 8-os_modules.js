const os = require('os'); 

// info about current user 
const user = os.userInfo()


// methods returns system uptime in seconds


const currentOs = {
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOs)
s