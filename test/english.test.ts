import spacer from '../src';

describe('English Sentence', () => {
  it('Hello World!', () => {
    expect(spacer('Hello World!')).toEqual('H e l l o W o r l d !');
  });
});
