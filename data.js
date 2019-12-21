export const picsArr = [
    {
        id: 1,
        name: "orchid 1",
        route: "pics/orchid1.jpg"
    },
    {
        id: 2,
        name: "orchid 2",
        route: "pics/orchid2.jpg"
    },
    {
        id: 3,
        name: "orchid 3",
        route: "pics/orchid3.jpg"
    },
    {
        id: 4,
        name: "orchid 4",
        route: "pics/orchid4.jpg"
    },
    {
        id: 5,
        name: "orchid 5",
        route: "pics/orchid5.jpg"
    },
    {
        id: 6,
        name: "orchid 6",
        route: "pics/orchid6.jpg"
    },
    {
        id: 7,
        name: "orchid 7",
        route: "pics/orchid7.jpg"
    },

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
