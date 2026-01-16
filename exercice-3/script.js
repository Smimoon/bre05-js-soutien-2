let users = [
    {
        username : "Grunav",
        isActive : true
    },
    
    {
        username : "Alexouille la fripouille",
        isActive : false
    },
    {
        username : "Oompa-Lüna",
        isActive : false
    }
];

for(let user of users) {
    if(user.isActive === true) {
        console.log(`${user.username} est connecté.e.`);
    }
    else {
        console.log(`${user.username} est déconnecté.e.`);
    }
}
