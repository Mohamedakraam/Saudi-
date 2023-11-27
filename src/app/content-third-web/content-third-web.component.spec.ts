import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentThirdWebComponent } from './content-third-web.component';

describe('ContentThirdWebComponent', () => {
  let component: ContentThirdWebComponent;
  let fixture: ComponentFixture<ContentThirdWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentThirdWebComponent]
    });
    fixture = TestBed.createComponent(ContentThirdWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
