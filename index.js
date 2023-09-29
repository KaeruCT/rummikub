const board = [];

const COLORS = ["Y", "R", "A", "B"];

const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, "J"];

function makeTile(color, value) {
    return {
        color,
        value
    };
}

function findGroup(tiles) {
    // group by value
}

function findRun(tiles) {
    // group by color, find sequences
}

function findSets(tiles, minimum = 0) {
    // call both, optimize for maximum amount of tiles used
}

function init() {
    const bag = [];
    const racks = [];
    const board = [];

    for (let i = 0; i < 2; i++) {
        COLORS.forEach(color => {
            VALUES.forEach(value => {
                bag.push(makeTile(color, value));
            });
        });
    }


}