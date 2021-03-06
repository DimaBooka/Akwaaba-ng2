import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicUploadComponent } from './music-upload.component';

describe('MusicUploadComponent', () => {
  let component: MusicUploadComponent;
  let fixture: ComponentFixture<MusicUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
