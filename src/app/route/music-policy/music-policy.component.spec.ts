import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPolicyComponent } from './music-policy.component';

describe('MusicPolicyComponent', () => {
  let component: MusicPolicyComponent;
  let fixture: ComponentFixture<MusicPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
