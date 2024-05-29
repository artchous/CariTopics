import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariTopicPostComponent } from './cari-topic-post.component';

describe('CariTopicPostComponent', () => {
  let component: CariTopicPostComponent;
  let fixture: ComponentFixture<CariTopicPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CariTopicPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CariTopicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
