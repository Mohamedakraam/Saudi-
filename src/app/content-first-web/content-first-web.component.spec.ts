import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFirstWebComponent } from './content-first-web.component';

describe('ContentFirstWebComponent', () => {
  let component: ContentFirstWebComponent;
  let fixture: ComponentFixture<ContentFirstWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFirstWebComponent]
    });
    fixture = TestBed.createComponent(ContentFirstWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
