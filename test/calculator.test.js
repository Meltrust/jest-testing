import { Calculator } from '../calculator';

const nums = new Calculator(6, 3);
const nums2 = new Calculator(10, 5);
const nums3 = new Calculator(100, 10);

describe(' add', () => {
  it('Sums 6 and 3', () => {
    expect(nums.add()).toEqual(9);
  });

  it('Sums 10 and 5', () => {
    expect(nums2.add()).toEqual(15);
  });
  it('Sums 100 and 10', () => {
    expect(nums3.add()).toEqual(110);
  });
});

describe(' substract', () => {
  it('Substracts 6 and 3', () => {
    expect(nums.substract()).toEqual(3);
  });

  it('Substracts 10 and 5', () => {
    expect(nums2.substract()).toEqual(5);
  });
  it('Substracts 100 and 10', () => {
    expect(nums3.substract()).toEqual(90);
  });
});

describe(' multiply', () => {
  it('multiplies 6 and 3', () => {
    expect(nums.multiply()).toEqual(18);
  });

  it('multiplies 10 and 5', () => {
    expect(nums2.multiply()).toEqual(50);
  });
  it('multiplies 100 and 10', () => {
    expect(nums3.multiply()).toEqual(1000);
  });
});

describe(' divide', () => {
  it('divides 6 and 3', () => {
    expect(nums.divide()).toEqual(2);
  });

  it('divides 10 and 5', () => {
    expect(nums2.divide()).toEqual(2);
  });
  it('divides 100 and 10', () => {
    expect(nums3.divide()).toEqual(10);
  });
});