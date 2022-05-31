class building {
    constructor(height, length, width, age) {
        this.height = height;
        this.length = length;
        this.width = width;
        this.age = age;
    }
}

class school extends building{
    constructor(height, length, width, age, children, teacher, cabinet, window, door, lab) {
        super(height, length, width, age);
        this.children = children;
        this.teacher = teacher;
        this.cabinet = cabinet;
        this.window = window;
        this.door = door;
        this.lab = lab;
    }
}

const Adastra =new school(
    10,
    60,
    40,
    20,
    1500,
    50,
    40,
    100,
    40,
    5
)
console.log(Adastra)



class home extends building{
    constructor(height, length, width, age, people, window, door, room, tv, sofa) {
        super(height, length, width, age);
        this.people = people;
        this.window = window;
        this.door = door;
        this.room = room;
        this.tv = tv;
        this.sofa = sofa;
    }
}

const sweetHome = new home(
    5,
    10,
    7,
    10,
    7,
    9,
    7,
    6,
    3,
    4
)
console.log(sweetHome)

