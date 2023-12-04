import { sum } from '../sum';
test('should sum', () => { 
    const sum1 = sum(1, 2);
    expect(sum1).toBe(3);
 })