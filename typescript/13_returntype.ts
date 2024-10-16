// Definizione dell'interfaccia per l'oggetto utente
interface UserPreferences {
  theme: string;
  notifications: boolean;
}

interface User {
  id: number;
  name: string;
  preferences: UserPreferences;
}

// Funzione che restituisce un oggetto utente
const getUser = (id: number): User => {
  return {
    id,
    name: "Alice",
    preferences: {
      theme: "dark",
      notifications: true,
    },
  };
};

// Utilizzo di ReturnType per ottenere il tipo di ritorno della funzione getUser
type UserType = ReturnType<typeof getUser>;

// Funzione di esempio che accetta un oggetto di tipo UserType
const printUserDetails = (user: UserType): void => {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Theme: ${user.preferences.theme}`);
  console.log(`Notifications enabled: ${user.preferences.notifications}`);
};

// Chiamata della funzione e test
const user = getUser(1);
printUserDetails(user);
