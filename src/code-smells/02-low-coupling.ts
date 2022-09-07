(() => {
    // Aplicando el principio de responsabilidad única
    // Prioriza la composición frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {         // En este caso si nos mandan hacer lo mismo que en el en archivo high-coupling
        name: string;               //  tendremos menor depencia, menor acoplamiento y menores problemas a la hora de hacer modificacione
        gender: Gender;             // <-- Aqui colocamos el firstName y lastName
        birthdate: Date;            //  luego mas abajo veremos que no se haran tantos cambios/modificaciones al codigo por su baja dependencia/acoplamiento
        firstName: string;
        lastName: string;
    }

    class Person {
        public name: string;
        public gender: Gender; // <-- Hacemos el cambio a la Clase
        public birthdate: Date;
        public firstName: string;
        public lastName: string;

        constructor({ name, gender, birthdate, firstName, lastName }: PersonProps) { // <-- 
            this.firstName = firstName  // <---
            this.lastName = lastName    // <--
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email: string;
        role: string; // <-- No hicimos cambios... porque no dependen y/o no tienen un alto acoplamiento 
    }
    class User {

        public email: string;
        public role: string;
        private lastAccess: Date; // <-- No hicimos cambios... porque no dependen y/o no tienen un alto acoplamiento 

        constructor({ email, role }: UserProps) { // <-- No hicimos cambios... porque no dependen y/o no tienen un alto acoplamiento 
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastFolderOpen: string;
        workingDirectory: string; // <-- No hicimos cambios... porque no dependen y/o no tienen un alto acoplamiento 
    }

    class Settings {
        public workingDirectory: string;
        public lastFolderOpen: string; // <-- No hicimos cambios... porque no dependen y/o no tienen un alto acoplamiento 

        constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
            this.workingDirectory = workingDirectory; // <-- No hicimos cambios... porque no dependen y/o no tienen un alto acoplamiento 
            this.lastFolderOpen = lastFolderOpen;
        }
    }


    // Nuevo User Settings
    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastFolderOpen: string; // <-- Aqui si hay cambios... porque dependen y porque hay que mostrar el resultado ya que en el constructor
        name: string;           // llamamos a la clase Person
        role: string;
        workingDirectory: string;
        firstName: string;
        lastName: string;
    }

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastFolderOpen,
            firstName, lastName  // <--
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate, firstName, lastName });  // <-- Cambios porque usamos la clase Person
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen })
        }
    }



    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastFolderOpen: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
        firstName: 'Jean', // <-- Colocamos los datos para usarlo del Person
        lastName: 'Rondon', // para poder usar y mostrar en la consola.
    });

    console.log({ userSettings, credentials: userSettings.user.checkCredentials() });

})()