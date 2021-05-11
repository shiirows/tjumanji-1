import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMajeurComponent } from './espace-majeur.component';

describe('EspaceMajeurComponent', () => {
  let component: EspaceMajeurComponent;
  let fixture: ComponentFixture<EspaceMajeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceMajeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceMajeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
