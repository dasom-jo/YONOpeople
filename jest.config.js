module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/shared/__tests__', '<rootDir>/apps/web', '<rootDir>/apps/mobile'],
    moduleNameMapper: {
      '^@shared/(.*)$': '<rootDir>/shared/$1',
    },
  };
