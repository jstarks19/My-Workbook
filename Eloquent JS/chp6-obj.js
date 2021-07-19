class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sum(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    length() {
        return Math.sqrt(this.x ** 2, this.y ** 2);
    }
}



class Group {
    constructor() {
        this.group = [];
    }

    add(elem) {
        if (this.group.indexOf(elem) === -1) {
            this.group.push(elem);
        }
    }

    delete(elem) {
        let index = this.group.indexOf(elem);
        if (index !== -1) {
            this.group.splice(index,1);
        }
    }

    has(elem) {
        if (this.group.indexOf(elem) !== -1) {
            return true;
        }
    }

    static from(gp) {
        let g = new Group();
        for (let elem of gp) {
            g.add(elem);
        }
        return g;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}



class GroupIterator {
    constructor(group) {
        this.ind = 0;
        this.group = group.group;
    }

    next() {
        if (this.ind === this.group.length) {
            return {done: true};
        }

        let value = this.group[this.ind];
        this.ind++;
        return {value, done:false};

    }


}


let g = new Group();

g.add(1);
g.add(1);
g.add(2);

let g2 = Group.from([1,2,3,4]);

for (let elem of g2) {
    console.log(elem);
}



class PGGroup {
    constructor() {
        this.group = [];
    }

    add(elem) {
        if (this.group.indexOf(elem) === -1) {
            this.group.push(elem);
        }
    }

    delete(elem) {
        let index = this.group.indexOf(elem);
        if (index !== -1) {
            this.group.splice(index,1);
        }
    }

    has(elem) {
        if (this.group.indexOf(elem) !== -1) {
            return true;
        }
    }

}