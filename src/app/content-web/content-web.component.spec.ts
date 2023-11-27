import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWebComponent } from './content-web.component';

describe('ContentWebComponent', () => {
  let component: ContentWebComponent;
  let fixture: ComponentFixture<ContentWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentWebComponent]
    });
    fixture = TestBed.createComponent(ContentWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
