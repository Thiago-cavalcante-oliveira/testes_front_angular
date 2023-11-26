import { ComponentFixture, TestBed, waitForAsync,  } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IndexComponent, HeaderComponent, FooterComponent],
        imports: [RouterTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('componentes de header e footer', () => {
    const headerComponent = fixture.debugElement.nativeElement.querySelector('app-header');
    const footerComponent = fixture.debugElement.nativeElement.querySelector('app-footer');

    expect(headerComponent).toBeTruthy();
    expect(footerComponent).toBeTruthy();
  });

});
