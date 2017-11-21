import { TitleCase.Pipe.TsPipe } from './title-case.pipe.ts.pipe';

describe('TitleCase.Pipe.TsPipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCase.Pipe.TsPipe();
    expect(pipe).toBeTruthy();
  });
});
