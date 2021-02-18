/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
declare function instanceOf(
  value: mixed,
  constructor: mixed,
): boolean %checks(value instanceof constructor);

export default function instanceOf(value: mixed, constructor: mixed): boolean {
  return value instanceof constructor;
}
