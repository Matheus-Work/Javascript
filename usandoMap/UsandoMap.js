function getAdmins (map) {
    let admins =[];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}
const usuarios = new Map();
 usuarios.set('Matheus', 'Admin');
 usuarios.set('Alessandro', 'Admin');
 usuarios.set('Lucas', 'Admin');
 usuarios.set('Roberto', 'User');
 
 console.log(getAdmins(usuarios));