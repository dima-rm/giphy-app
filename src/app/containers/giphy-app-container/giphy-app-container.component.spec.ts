import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyAppContainerComponent } from './giphy-app-container.component';

describe('GiphyAppContainerComponent', () => {
  let component: GiphyAppContainerComponent;
  let fixture: ComponentFixture<GiphyAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyAppContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiphyAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
