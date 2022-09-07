(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    // Alto Acoplamiento - MAL

    class Person {
        constructor(
            public name: string,        // Imaginemos que nos mandan añadir nuevos datos para que el usuario coloque, nos mandan que añadamos                                    //
            public gender: Gender,      // su primer nombre de la persona y su apellido, (firstName y lastName)
            public birthdate: Date,     // si lo colocamos aqui no tendra ninngun problema porque esta solo en la clase Person, pero si nos vamos
            public firstName: string,   // si vamos a las extensiones de cada clase nos pedira cambiar de nuevo absolutamente todo el codigo y eso
            public lastName: string     // y eso es una mala practica, ya que es un alto acoplamiento. Y debe ser bajo acoplamiento y alta cohesion.
        ) { }
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
            firstName: string,  // <- Se coloca de nuevo porque depende del User
            lastName: string    // porque tiene un alto acoplamiento. Y asi con los demas
        ) {
            super(name, gender, birthdate, firstName, lastName); // <--
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastFolderOpen: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
            firstName: string,  // <- Se coloca de nuevo porque depende del User
            lastName: string    // porque tiene un alto acoplamiento.
        ) {
            super(
                email,
                role,
                new Date(),
                name,
                gender,
                birthdate,
                firstName, // <--
                lastName    // <--
            )
        }
    }



    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        'Fernando',
        'M',
        new Date('1985-10-21'),
        'Rondon', // <--
        'Jean', // <--
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });

})()