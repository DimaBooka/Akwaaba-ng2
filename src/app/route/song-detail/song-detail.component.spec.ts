import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongdetailComponent } from './songdetail.component';

describe('SongdetailComponent', () => {
  let component: SongdetailComponent;
  let fixture: ComponentFixture<SongdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
