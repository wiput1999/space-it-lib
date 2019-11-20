import spacer from '../src';

describe('Thai Sentence', () => {
  it('ทดสอบ', () => {
    expect(spacer('ทดสอบ')).toEqual('ท ด ส อ บ');
  });
});
