import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFourthWebComponent } from './content-fourth-web.component';

describe('ContentFourthWebComponent', () => {
  let component: ContentFourthWebComponent;
  let fixture: ComponentFixture<ContentFourthWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFourthWebComponent]
    });
    fixture = TestBed.createComponent(ContentFourthWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
