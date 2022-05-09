import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactezPage } from './contactez.page';

describe('ContactezPage', () => {
  let component: ContactezPage;
  let fixture: ComponentFixture<ContactezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
