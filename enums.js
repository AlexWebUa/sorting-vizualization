const SortTypes = Object.freeze({
    ALL: 0,
    BUBBLE: 1,
    SHAKER: 2,
    QUICK: 3,
    COMB: 4,
    SELECTION: 5,
    INSERTION: 6,
    SHELL: 7,
    MERGE: 8
});

const ArrTypes = Object.freeze({
    ALL: 0,
    RANDOM: 1,
    REVERSED: 2,
    CLUSTERED: 3,
    ALMOST_SORTED: 4,
    FEW_UNIQUE: 5
});

module.exports.SortTypes = SortTypes;
module.exports.ArrTypes = ArrTypes;