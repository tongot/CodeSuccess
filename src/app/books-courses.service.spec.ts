import { TestBed } from '@angular/core/testing';

import { BooksCoursesService } from './books-courses.service';

describe('BooksCoursesService', () => {
  let service: BooksCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
