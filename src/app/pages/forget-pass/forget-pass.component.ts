import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import Swal from 'sweetalert2';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss'],
})
export class ForgetPassComponent {
  email = new FormControl('');
  inputOtp = new FormControl('');
  request = {
    email: '',
    message: this.generateOTP(),
  };
  sentOtp: string = '';
  constructor(private authService: AuthService, private router: Router,    private meta: Meta,private title: Title,) {}

  ngOnInit() {
    this.email.valueChanges.pipe(debounceTime(500)).subscribe((data: any) => {
      if (this.email.dirty) {
        this.request.email = data;
      }
    });
    this.inputOtp.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data: any) => {
        if (this.inputOtp.dirty) {
          this.request.message = data;
        }
      });
      this.setMetaForForgetPassPage();
  }
  setMetaForForgetPassPage() {
    this.title.setTitle(`Quên mật khẩu - Flight Dot`);
    this.meta.updateTag({ property: 'og:image', content: 'assets/img/suport-hotline.png' });
    this.meta.updateTag({ property: 'og:image:width', content: '1000' });
    this.meta.updateTag({ property: 'og:image:height', content: '530' });
    this.meta.updateTag({ property: 'og:image:alt', content: 'Hình ảnh trang quên mật khẩu' });
    this.meta.updateTag({ name: 'description', content: 'Thông tin trang quên mật khẩu - Flight Dot' });
    this.meta.updateTag({ name: 'keywords', content: `vé máy bay, FlightDot,quên mật khẩu, đặt vé, du lịch` });
  }
  generateOTP() {
    // Declare a digits variable
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  resendCode() {
    this.authService.sendOtp(this.request).subscribe((data: any) => {
      if (data) {
        this.sentOtp += data;
        Swal.fire('Đã gửi mã OTP. Vui lòng kiểm tra email của bạn', '', 'success');
      } else {
        Swal.fire('Không tìm thấy email', 'Vui lòng nhập lại', 'error');
      }
    });
  }

  onSubmit() {
    if (this.sentOtp === this.inputOtp.value) {
      let requestChange = {
        email: this.request.email,
      };
      this.authService.changePassword(requestChange).subscribe((data) => {
        if (data) {
          Swal.fire('Khôi phục mật khẩu của bạn thành công', 'Mật khẩu mới của bạn đã được gửi qua email. Bạn sẽ được điều hướng trở lại trang đăng nhập.', 'success').then(() => {
            this.router.navigate(['/login']);
          });
        }
      }, (error) => {
        Swal.fire('Mã OTP không chính xác. Vui lòng thử lại', '', 'error');
      });
    }
    else {
      Swal.fire('Mã OTP không chính xác. Vui lòng nhập lại', '', 'error');
    }
  }
}
