const linearSearch = require("../src/linear");

describe("Linear Search", () => {
  let dataList;

  beforeEach(() => {
    dataList = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  });

  it("should be match", () => {
    expect(linearSearch(dataList, 10)).toBe(9);
  });

  it("is not exists on array", () => {
    expect(linearSearch(dataList, 21)).toBe(-1);
  });
});
