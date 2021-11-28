import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formInformation } from './../../model/formInformation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shipping-data',
  templateUrl: './shipping-data.component.html',
  styleUrls: ['./shipping-data.component.css']
})
export class ShippingDataComponent implements OnInit {

  formShippingData: FormGroup;
  formData: formInformation = new formInformation("", "", "", "", undefined, "", "")

  constructor( ) {
    this.formShippingData = new FormGroup({
      'fullName': new FormControl(this.formData.fullname, [Validators.required]),
      'email': new FormControl(this.formData.email, [Validators.email, Validators.required]),
      'address': new FormControl(this.formData.address, [Validators.required]),
      'district': new FormControl(this.formData.district, [Validators.required]),
      'number': new FormControl(this.formData.number, [Validators.required]),
      'city': new FormControl(this.formData.city, [Validators.required]),
      'addComplement': new FormControl(this.formData.addComplement),
    })
  }

  
  ngOnInit(): void {
  }

  submit(): void{
    const fullName = this.formShippingData.get('fullname')?.value;
    const email = this.formShippingData.get('email')?.value;
    const address = this.formShippingData.get('address')?.value;
    const district = this.formShippingData.get('district')?.value;
    const number = this.formShippingData.get('number')?.value;
    const city = this.formShippingData.get('city')?.value;
    const addComplement = this.formShippingData.get('addComplement')?.value;

    const saveOrderInStorageSession =  [{fullName, email, address, district, number, city, addComplement}];
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!!',
      html: 'Your order is in the shipping process!!',
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        sessionStorage.setItem("Products", JSON.stringify(saveOrderInStorageSession))
        location.replace('/')
      }
    })
    localStorage.removeItem("Products")
  }

  get fullName() { return this.formShippingData.get('fullName')}
  get email() { return this.formShippingData.get('email')}
  get address() { return this.formShippingData.get('address')}
  get district() { return this.formShippingData.get('district')}
  get number() { return this.formShippingData.get('number')}
  get city() { return this.formShippingData.get('city')}
  get addComplement() { return this.formShippingData.get('addComplement')}

}
