import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

import {} from 'jasmine';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
