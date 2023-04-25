import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTeamComponent } from './tech-team.component';

describe('TechTeamComponent', () => {
  let component: TechTeamComponent;
  let fixture: ComponentFixture<TechTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
