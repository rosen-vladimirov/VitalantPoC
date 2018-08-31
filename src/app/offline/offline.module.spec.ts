import { OfflineModule } from './offline.module';

describe('OfflineModule', () => {
  let offlineModule: OfflineModule;

  beforeEach(() => {
    offlineModule = new OfflineModule();
  });

  it('should create an instance', () => {
    expect(offlineModule).toBeTruthy();
  });
});
