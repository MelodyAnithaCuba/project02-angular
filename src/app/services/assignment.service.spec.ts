import { TestBed } from '@angular/core/testing';

import { assignmentService } from './assignment.service';

describe('assignmentService', () => {
  let service: assignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(assignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
