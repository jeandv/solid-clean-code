interface Bird {
    eat(): void;
}

interface RunningBird {
    run(): void;
}

interface FlyingBird {
    fly(): number;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly() { return 1100 }
    public eat() { }

}

class Colibri implements Bird, FlyingBird {

    public fly() { return 400 }
    public eat() { }

}

class Ostrich implements Bird, RunningBird {

    public eat() { }
    public run() { }

}

class Pinguino implements Bird, SwimmerBird {

    public eat() { }
    public swim() { }

}