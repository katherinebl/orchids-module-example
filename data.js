export const picsArr = [
    {
        id: 1,
        name: "flower 1",
        route: "pics/flower1.jpg"
    },
    {
        id: 2,
        name: "flower 2",
        route: "pics/flower2.jpg"
    },
    {
        id: 3,
        name: "flower 3",
        route: "pics/flower3.jpg"
    },
    {
        id: 4,
        name: "flower 4",
        route: "pics/flower4.jpg"
    },
    {
        id: 5,
        name: "flower 5",
        route: "pics/flower5.jpg"
    },
    {
        id: 6,
        name: "flower 6",
        route: "pics/flower6.jpg"
    },
    {
        id: 7,
        name: "flower 7",
        route: "pics/flower7.jpg"
    },
    {
        id: 8,
        name: "flower 8",
        route: "pics/flower8.jpg"
    }

]

export class Orchid {
    constructor(name, route, id) {
        this.name = name;
        this.route = route;
        this.id = id
    }

    presentation() {
        return this.name;
    }
}
