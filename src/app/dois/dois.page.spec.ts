import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoisPage } from './dois.page';

describe('DoisPage', () => {
  let component: DoisPage;
  let fixture: ComponentFixture<DoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
