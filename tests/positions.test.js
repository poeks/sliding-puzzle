const { calculateNeighbours } = require('../src/lib/positions');

casesWidthIs3AndHeightIs3 = [
  [1, new Set([2, 4])],
  [2, new Set([1, 3, 5])],
  [3, new Set([2, 6])],
  [4, new Set([1, 5, 7])],
  [5, new Set([2, 4, 6, 8])],
  [6, new Set([3, 5, 9])],
  [7, new Set([4, 8])],
  [8, new Set([5, 7, 9])],
  [9, new Set([6, 8])],
]

casesWidthIs3AndHeightIs3.boardWidth = 3;
casesWidthIs3AndHeightIs3.boardHeight = 3;

casesWidthIs4AndHeightIs3 = [
  [1, new Set([2, 5])],
  [2, new Set([1, 3, 6])],
  [3, new Set([2, 4, 7])],
  [4, new Set([3, 8])],
  [5, new Set([1, 6, 9])],
  [6, new Set([2, 5, 7, 10])],
  [7, new Set([3, 6, 8, 11])],
  [8, new Set([4, 7, 12])],
  [9, new Set([5, 10])],
  [10, new Set([6, 9, 11])],
  [11, new Set([7, 10, 12])],
  [12, new Set([8, 11])],
]

casesWidthIs4AndHeightIs3.boardWidth = 4;
casesWidthIs4AndHeightIs3.boardHeight = 3;

casesWidthIs3AndHeightIs4 = [
  [1, new Set([2, 4])],
  [2, new Set([1, 3, 5])],
  [3, new Set([2, 6])],
  [4, new Set([1, 5, 7])],
  [5, new Set([2, 4, 6, 8])],
  [6, new Set([3, 5, 9])],
  [7, new Set([4, 8, 10])],
  [8, new Set([5, 7, 9, 11])],
  [9, new Set([6, 8, 12])],
  [10, new Set([7, 11])],
  [11, new Set([8, 10, 12])],
  [12, new Set([9, 11])],
]

casesWidthIs3AndHeightIs4.boardWidth = 3;
casesWidthIs3AndHeightIs4.boardHeight = 4;

testSuite = [casesWidthIs3AndHeightIs3, casesWidthIs3AndHeightIs4, casesWidthIs4AndHeightIs3];

testSuite.forEach((testCase) => {
  test('test amount of positions in testcase', () => {
    expect(testCase.length)
    .toEqual(testCase.boardWidth * testCase.boardHeight)
  })
  
  describe(`calculateNeighbours of ${testCase.boardWidth}x${testCase.boardHeight} game board`, () => {
    test.each(testCase)('position %p should return neighbours %p', (position, expectedNeighbours) => {
      expect(calculateNeighbours(position, testCase.boardWidth, testCase.boardHeight))
      .toEqual(expectedNeighbours)
    })
  }
  )
}
)
