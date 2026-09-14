import { describe, it, expect } from 'vitest';
import { pickRandomIndex } from './photos';

describe('pickRandomIndex', () => {
  it('returns an integer within bounds', () => {
    for (let i = 0; i < 100; i++) {
      const result = pickRandomIndex(5);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(5);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('always returns 0 for a length-1 array', () => {
    for (let i = 0; i < 20; i++) {
      expect(pickRandomIndex(1)).toBe(0);
    }
  });
});
