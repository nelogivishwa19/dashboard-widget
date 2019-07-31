import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWigetComponent } from './create-wiget.component';

describe('CreateWigetComponent', () => {
  let component: CreateWigetComponent;
  let fixture: ComponentFixture<CreateWigetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWigetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWigetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
