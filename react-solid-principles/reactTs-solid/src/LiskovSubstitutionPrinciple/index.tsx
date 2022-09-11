export class SwimmingAnimal {
    swim(distance: number) {
        console.log(distance)
    }
}

export class WalkingAnimal {
    walk(distance: number) {
        console.log(distance)
    }
}

export class Dog extends SwimmingAnimal {
    swim(distance: number) {
        console.log(distance)
    }
}

export class Cat extends WalkingAnimal {
    walk(distance: number): void {
        console.log(distance + 'mts')
    }
}

const cat = new Cat();

cat.walk(20);