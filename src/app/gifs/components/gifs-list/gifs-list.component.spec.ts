import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsListComponent } from './gifs-list.component';

describe('GifsListComponent', () => {
  let component: GifsListComponent;
  let fixture: ComponentFixture<GifsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsListComponent]
    });
    fixture = TestBed.createComponent(GifsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
