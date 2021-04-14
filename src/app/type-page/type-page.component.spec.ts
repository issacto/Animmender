import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePageComponent } from './type-page.component';

describe('TypePageComponent', () => {
  let component: TypePageComponent;
  let fixture: ComponentFixture<TypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
