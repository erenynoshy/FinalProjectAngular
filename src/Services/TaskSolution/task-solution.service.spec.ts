import { TestBed } from '@angular/core/testing';

import { TaskSolutionService } from './task-solution.service';

describe('TaskSolutionService', () => {
  let service: TaskSolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
