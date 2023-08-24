import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>'],
    rootDir: './src',
  };
};
