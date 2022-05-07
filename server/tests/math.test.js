import {sum} from "../tests.js";

test('adds args', () => {
    const res = sum(1, 2);
    console.log('Result: ---> ', res);
    expect(res).toBe(3);
})
