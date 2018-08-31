import { ArModule } from './ar.module';

describe('ArModule', () => {
  let arModule: ArModule;

  beforeEach(() => {
    arModule = new ArModule();
  });

  it('should create an instance', () => {
    expect(arModule).toBeTruthy();
  });
});
