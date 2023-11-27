import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSecondWebComponent } from './content-second-web.component';

describe('ContentSecondWebComponent', () => {
  let component: ContentSecondWebComponent;
  let fixture: ComponentFixture<ContentSecondWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSecondWebComponent]
    });
    fixture = TestBed.createComponent(ContentSecondWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
