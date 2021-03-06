const selectionSort = require("../src/selection-sort");

describe("Selection Sort", () => {
  let dataList;

  beforeEach(() => {
    dataList = [1, 5, 5, 2, 6, 8, 4, 20, 34, 50, 70, 75, 30, 11];
  });

  it("should be match", () => {
    expect(selectionSort(dataList)).toEqual([
      1, 2, 4, 5, 5, 6, 8, 11, 20, 30, 34, 50, 70, 75,
    ]);
  });

  it("is array is empty", () => {
    expect(selectionSort([])).toEqual([]);
  });
});
