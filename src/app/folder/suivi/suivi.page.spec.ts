import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuiviPage } from './suivi.page';

describe('SuiviPage', () => {
  let component: SuiviPage;
  let fixture: ComponentFixture<SuiviPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuiviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
