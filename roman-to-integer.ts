const represented: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInt(s: string): number {
    let result = represented[s[0]];

    for (let i = 1; i < s.length; i++) {
        const curInt = represented[s[i]];
        const prevInt = represented[s[i - 1]];
        result += prevInt < curInt ? curInt - 2 * prevInt : curInt;
    }

    return result;
}
