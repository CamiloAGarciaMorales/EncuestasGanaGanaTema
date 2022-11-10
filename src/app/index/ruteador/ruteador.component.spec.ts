import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuteadorComponent } from './ruteador.component';

describe('RuteadorComponent', () => {
  let component: RuteadorComponent;
  let fixture: ComponentFixture<RuteadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuteadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
