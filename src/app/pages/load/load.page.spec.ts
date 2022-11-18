import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoadPage } from './load.page';

describe('LoadPage', () => {
  let component: LoadPage;
  let fixture: ComponentFixture<LoadPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPage ],
      imports: [IonicModule.forRoot(),
         AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  // it('should create', () => {
 
  //   expect(component).toBeTruthy();
    
  // });

  it('should go to home on login', () => {
    spyOn(router, 'navigate')

    component.home();
    expect(router.navigate).toHaveBeenCalledWith(['home'])
  });
});
