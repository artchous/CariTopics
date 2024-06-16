import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTopicPageComponent } from './create-new-topic-page.component';

describe('CreateNewTopicPageComponent', () => {
  let component: CreateNewTopicPageComponent;
  let fixture: ComponentFixture<CreateNewTopicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewTopicPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewTopicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
