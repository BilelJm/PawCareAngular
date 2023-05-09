import { TestBed } from '@angular/core/testing';

import { CommentAdoptionService } from './comment-adoption.service';

describe('CommentAdoptionService', () => {
  let service: CommentAdoptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentAdoptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
