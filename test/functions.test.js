import { stringLength, reverseString, capitalize } from '../functions';

describe(' stringLength', () => {
  it('Counts characters of the function', () => {
    const testy = stringLength('test');
    expect(testy).toEqual(4);
  });

  it('Throws errors if length is not correct', () => {
    expect(() => {
      stringLength('testAlotOfCharacters');
    }).toThrowError('required');
  });
});
describe(' reverseString', () => {
  it('Reverses a string', () => {
    const testystr = reverseString('test');
    expect(testystr).toEqual('tset');
  });
});

describe(' capitalize', () => {
  it('Capitalizes a string', () => {
    const testystrCap = capitalize('test');
    expect(testystrCap).toEqual('Test');
  });
});