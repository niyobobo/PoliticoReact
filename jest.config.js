module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'text', 'lcov', 'html'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  verbose: true,
};