import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FooterComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(' o componente de navegação', () => {
    const navbar = fixture.debugElement.query(By.css('.navbar'));
    expect(navbar).toBeTruthy();

    const links = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(links.length).toBe(1);

  });

});
