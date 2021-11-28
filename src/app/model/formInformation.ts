export class formInformation{
    fullname: string = '';
    email: string = '';
    address: string = '';
    district: string = '';
    number: undefined;
    city: string = '';
    addComplement: string = '';

    constructor(fullname: string, email: string, address: string, district: string, number: undefined, city: string, addComplement: string){
        this.fullname = fullname;
        this.email = email;
        this.address = address;
        this.district = district;
        this.number = undefined;
        this.city = city;
        this.addComplement = addComplement;
    }
}