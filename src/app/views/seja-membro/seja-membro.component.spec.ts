import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejaMembroComponent } from './seja-membro.component';

describe('SejaMembroComponent', () => {
  let component: SejaMembroComponent;
  let fixture: ComponentFixture<SejaMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejaMembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SejaMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
