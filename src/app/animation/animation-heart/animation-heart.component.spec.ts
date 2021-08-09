/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnimationHeartComponent } from './animation-heart.component';

describe('AnimationHeartComponent', () => {
  let component: AnimationHeartComponent;
  let fixture: ComponentFixture<AnimationHeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationHeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
