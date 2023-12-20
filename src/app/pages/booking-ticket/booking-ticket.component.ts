import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChuyenBayService } from '../../shared/services/chuyenBay.service';
import { Router } from '@angular/router';
import { CookieService } from '../../shared/services/cookie.service';
import { TransferDataService } from 'src/app/shared/services/transfer-data.service';
export interface submitForm {
  fromPlace: string;
  toPlace: string;
  startDate: string;
}
@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss'],
})
export class BookingTicketComponent {
  form: FormGroup | any;
  fromPlace: string[] = [
    'VIETNAM',
    'THAILAN',
    'ANH',
    'NHATBAN',
    'HANQUOC',
    'MY',
    'PHAP',
    'NGA',
    'SINGAPORE',
    'HONGKONG',
  ];
  toPlace: string[] = [
    'VIETNAM',
    'THAILAN',
    'ANH',
    'NHATBAN',
    'HANQUOC',
    'MY',
    'PHAP',
    'NGA',
    'SINGAPORE',
    'HONGKONG',
  ];
  tickets: any[] = [];
  textError: string = '';
  inputStartDate: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private chuyenBayService: ChuyenBayService,
    private router: Router,
    private cookieService: CookieService,
    private transferDataService: TransferDataService
  ) {}
  data = this.transferDataService.getData();
  SubmitForm: submitForm = {
    fromPlace: '',
    toPlace: '',
    startDate: '',
  };
  ngOnInit() {
    if (this.data){
      this.SubmitForm.fromPlace = this.data.origin;
      this.SubmitForm.toPlace = this.data.destination;
      this.SubmitForm.startDate = this.data.date;
      this.chuyenBayService
      .filterChuyenBay(this.SubmitForm)
      .subscribe((data) => (this.tickets = data));
      this.transferDataService.clearData();
    }
    this.form = this.createForm();
    this.chuyenBayService.getAll().subscribe((data) => (this.tickets = data));
    console.log(this.data)
  }

  ngOnDestroy() {}

  createForm() {
    return this.formBuilder.group({
      fromPlace: this.formBuilder.control(['']),
      toPlace: this.formBuilder.control(['']),
      startDate: this.formBuilder.control(['']),
    });
  }
  selectedFromPlace: string | null = null;
  inputFromPlace(place: string) {
    this.form.get('fromPlace').setValue(place);
    this.SubmitForm.fromPlace = place;
  }
  inputToPlace(place: string) {
    this.form.get('toPlace').setValue(place);
    this.SubmitForm.toPlace = place;
  }

  onSubmit() {  
    this.SubmitForm.startDate = this.inputStartDate
    console.log(this.SubmitForm)
    this.chuyenBayService
      .filterChuyenBay(this.SubmitForm)
      .subscribe((data) => (this.tickets = data));
  }

  checkLogin(ma: string, bsn: number, eco: number) {
    if (this.cookieService.getCookie('access_token')) {
      this.router.navigate([`/booking-ticket-detail/${ma}`]);
    } else {
      this.router.navigate(['/login']);
    }
  }
  reloadValue() {
    // window.location.reload();
    // this.router.navigate(['/booking-ticket']);
    // this.ngOnInit();
    this.form = this.createForm();
    this.chuyenBayService.getAll().subscribe((data) => (this.tickets = data));
  }
}
