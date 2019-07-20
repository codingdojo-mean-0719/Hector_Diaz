import { TestBed } from '@angular/core/testing';

import { HectorsFavPokemService } from './hectors-fav-pokem.service';

describe('HectorsFavPokemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HectorsFavPokemService = TestBed.get(HectorsFavPokemService);
    expect(service).toBeTruthy();
  });
});
