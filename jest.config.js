module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.{ts,tsx}",
    "**/?(*.)(test).{ts,tsx}"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@contexts/(.*)': '<rootDir>/src/contexts/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '@mocks/(.*)': '<rootDir>/src/mocks/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@stores/(.*)': '<rootDir>/src/stores/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@themes/(.*)': '<rootDir>/src/themes/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1'

  },
  moduleDirectories: ['node_modules', '<rootDir>']
}
