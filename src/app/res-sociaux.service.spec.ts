import { TestBed } from '@angular/core/testing';

import { ResSociauxService } from './res-sociaux.service';

describe('ResSociauxService', () => {
  let service: ResSociauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResSociauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
