/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
// eslint-disable-next-line import/no-default-export
export default function instanceOf(value, constructor) {
  return value instanceof constructor;
};
