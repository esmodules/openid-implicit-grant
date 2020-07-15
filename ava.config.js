export default {
  require: ['esm'],
  files: ['./tests/**/*.test.js'],
  cache: true,
  concurrency: 4,
  failFast: true,
  failWithoutAssertions: false,
  tap: true,
  verbose: true
}
