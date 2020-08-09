import {Injectable} from '@angular/core';
import {MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import { Md5 } from 'md5-typescript';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
import { PaymentParam } from '../Shared/Model/PaymentModel/PaymentParam';

@Injectable()
export class DialogService {
  dMessage: string;
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private toastyService: ToastaService,
    private dialog: MatDialog
  ) {}
  openDialog(newcomponent) {
    let dialogRef: MatDialogRef<any>;
    dialogRef = this.dialog.open(newcomponent);
    return dialogRef.afterClosed();
  }

  public confirmationPopup(message: string, newcomponent) {
    let confirmationPopup: MatDialogRef<any>;
    confirmationPopup = this.dialog.open(newcomponent);
    confirmationPopup.componentInstance.message = message;
    this.dMessage = message;

    return confirmationPopup.afterClosed();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
    });
  }

  encrypt_md5(password: string): string {
    return Md5.init(password);
  }

  toastErrorMessage(message: string, title: string) {
    const toastOption: ToastOptions = {
      title: title,
      msg: message,
      showClose: true,
      timeout: 9000,
      theme: 'material',
    };
    this.toastyService.error(toastOption);
  }

  generateURL(value: PaymentParam): string {
    console.log("value", value);
    let url = value.url;
    url +=
      'merchant_id=' +
      value.merchant_id +
      '&' +
      'merchant_key=' +
      value.merchant_key +
      '& return_url=' +
      value.redirectUrls.return_url +
      '& cancel_url=' +
      value.redirectUrls.cancel_url +
      '& notify_url=' +
      value.redirectUrls.notify_url +
      '& name_first' +
      value.paymentDetails.name_first +
      '& name_last=' +
      value.paymentDetails.name_last +
      '& email_address=' +
      value.paymentDetails.email_address +
      '& cell_number=' +
      value.paymentDetails.cell_number +
      '& amount=' +
      value.paymentDetails.amount +
      '& item_name=' +
      value.paymentDetails.item_name +
      '& m_payment_id=' +
      value.referenceDetails.m_payment_id;
    return url;
  }

}
