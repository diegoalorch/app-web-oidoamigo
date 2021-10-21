import { TestBed } from '@angular/core/testing';

import { CargarSidebarJsService } from './cargar-sidebar-js.service';

describe('CargarSidebarJsService', () => {
  let service: CargarSidebarJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarSidebarJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
