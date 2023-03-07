import { developerStatus } from './index';

describe("Index tests", () => {

    it("Runs a simple, easy to break test", () => {
        expect(true).toBe(true);
    });

    it("Runs a series of tests on an imported function", () => {
        expect(developerStatus("Trevor")).toBe("Trevor is an awesome developer!");
        expect(developerStatus("A rock")).toBe("A rock is NOT an awesome developer!");
    });

});
