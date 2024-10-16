// Funzione che restituisce un oggetto utente
var getUser = function (id) {
    return {
        id: id,
        name: "Alice",
        preferences: {
            theme: "dark",
            notifications: true,
        },
    };
};
// Funzione di esempio che accetta un oggetto di tipo UserType
var printUserDetails = function (user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Theme: ".concat(user.preferences.theme));
    console.log("Notifications enabled: ".concat(user.preferences.notifications));
};
// Chiamata della funzione e test
var user = getUser(1);
printUserDetails(user);
