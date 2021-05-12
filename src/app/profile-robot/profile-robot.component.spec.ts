import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRobotComponent } from './profile-robot.component';

describe('ProfileRobotComponent', () => {
  let component: ProfileRobotComponent;
  let fixture: ComponentFixture<ProfileRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
