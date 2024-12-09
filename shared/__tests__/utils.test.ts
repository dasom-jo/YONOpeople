import { formatDate } from '../utils';

describe('formatDate', () => {
  it('should format a date object as YYYY-MM-DD', () => {
    const date = new Date('2023-12-09');
    const formatted = formatDate(date);
    expect(formatted).toBe('2023-12-09');
  });
});
