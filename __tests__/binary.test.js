const binarySearch = require("../src/binary");

describe("Binary Search", () => {
  let dataList;

  beforeEach(() => {
    dataList = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  });

  it("should be match", () => {
    expect(binarySearch(dataList, 10)).toBe(9);
  });

  it("is not exists on array", () => {
    expect(binarySearch(dataList, 21)).toBe(-1);
  });
});
