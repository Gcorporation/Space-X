import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { HttpServiceService } from '../http-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';

describe('DashboardComponent', () => {
  let httpService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HttpClient,HttpClientModule],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
    // httpService = new HttpServiceService();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('My Service', () => {
  it('should correctly add numbers', () => {
      expect(1 + 1).toBe(2);
  });
});
