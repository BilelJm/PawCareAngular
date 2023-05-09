import { TestBed } from '@angular/core/testing';

import { TrainigService } from './trainig.service';

describe('TrainigService', () => {
  let service: TrainigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
