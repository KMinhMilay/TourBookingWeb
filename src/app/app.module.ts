import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { AdminFlightManagementComponent } from './pages/admin-flight-management/admin-flight-management.component';
import { AdminTicketManagementComponent } from './pages/admin-ticket-management/admin-ticket-management.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { EditFlightComponent } from './pages/edit-flight/edit-flight.component';
import { AddFlightComponent } from './pages/add-flight/add-flight.component';
import { GuestManagementComponent } from './pages/guest-management/guest-management.component';
// import { AdminNaviComponent } from './components/admin-navi/admin-navi.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { StatisticalComponent } from './pages/statistical/statistical.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { PieChartsComponent } from './components/pie-charts/pie-charts.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LineChartsComponent } from './components/line-charts-eco/line-charts.component';
import { LineChartsBSNComponent } from './components/line-charts-bsn/line-charts-bsn.component';
import { ColumnChartsComponent } from './components/column-charts/column-charts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPassComponent } from './pages/forget-pass/forget-pass.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingTicketComponent } from './pages/booking-ticket/booking-ticket.component';
import { BookingTicketDetailComponent } from './pages/booking-ticket-detail/booking-ticket-detail.component';
import { FlightApiService } from './shared/services/flight-api.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { InvoicesComponent } from './pages/invoices/invoices.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { InvoiceDetailComponent } from './pages/invoice-detail/invoice-detail.component';

import { MailchimpService } from './shared/services/mailchimp.service';
import { RssFeedComponent } from './components/rss-feed/rss-feed.component';
import { RssFeedService } from './shared/services/rss.service';
import { PaymentResultComponent } from './pages/payment-result/payment-result.component';
import { FloatingIconComponent } from './components/floating-icon/floating-icon.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminNavigationComponent,
    AdminFlightManagementComponent,
    AdminTicketManagementComponent,
    AdminDashboardComponent,
    EditFlightComponent,
    AddFlightComponent,
    GuestManagementComponent,
    // AdminNaviComponent,
    NewAccountComponent,
    StatisticalComponent,
    LineChartsComponent,
    LineChartsBSNComponent,
    ColumnChartsComponent,
    HomeComponent,
    LoginComponent,
    ForgetPassComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    HeaderHomeComponent,
    NavbarComponent,
    AppComponent,
    ChangePassComponent,
    ViewProfileComponent,
    BookingHistoryComponent,
    BookingTicketComponent,
    BookingTicketDetailComponent,
    NotFoundComponent,

    InvoicesComponent,
    InvoiceDetailComponent,

    RssFeedComponent,
    PaymentResultComponent,
    FloatingIconComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    CanvasJSAngularChartsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgxPayPalModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [FlightApiService,MailchimpService,RssFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }