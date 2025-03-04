import { type Page, type Locator } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    genderMale: Locator;
    genderFemale: Locator;
    inputEmail: Locator;
    inputPassword: Locator;
    dropdownDay: Locator;
    dropdownMonth: Locator;
    dropdownYear: Locator;
    inputFirstname: Locator;
    inputLastname: Locator;
    inputAddress: Locator;
    dropdownCountry: Locator;
    inputState: Locator;
    inputCity: Locator;
    inputZipcode: Locator;
    inputMobile: Locator;
    buttonCreateAccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.genderMale = this.page.locator('#id_gender1');
        this.genderFemale = this.page.locator('#id_gender2');
        this.inputEmail = this.page.locator('[data-qa="email"]');
        this.inputPassword = this.page.locator('[data-qa="password"]');
        this.dropdownDay = this.page.locator('[data-qa="days"]');
        this.dropdownMonth = this.page.locator('[data-qa="months"]');
        this.dropdownYear = this.page.locator('[data-qa="years"]');
        this.inputFirstname = this.page.locator('[data-qa="first_name"]');
        this.inputLastname = this.page.locator('[data-qa="last_name"]');
        this.inputAddress = this.page.locator('[data-qa="address"]');
        this.dropdownCountry = this.page.locator('[data-qa="country"]');
        this.inputState = this.page.locator('[data-qa="state"]');
        this.inputCity = this.page.locator('[data-qa="city"]');
        this.inputZipcode = this.page.locator('[data-qa="zipcode"]');
        this.inputMobile = this.page.locator('[data-qa="mobile_number"]');
        this.buttonCreateAccount = this.page.locator('[data-qa="create-account"]');
    }

    async EnterAccountInformation(data: {
        gender: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string, 
        day: string, 
        month: string, 
        year: string,
        address: string, 
        country: string, 
        state: string, 
        city: string, 
        zipcode: string, 
        mobile: string
    }) {
        //await this.inputEmail.fill(data.email);
        await this.selectGender(data.gender);
        await this.inputFirstname.fill(data.firstName);
        await this.inputPassword.fill(data.password);
        await this.dropdownDay.selectOption(data.day);
        await this.dropdownMonth.selectOption(data.month);
        await this.dropdownYear.selectOption(data.year);
        await this.inputLastname.fill(data.lastName);
        await this.inputAddress.fill(data.address);
        await this.dropdownCountry.selectOption(data.country);
        await this.inputState.fill(data.state);
        await this.inputCity.fill(data.city);
        await this.inputZipcode.fill(data.zipcode);
        await this.inputMobile.fill(data.mobile);
    }

    async selectGender(gender: string) {
        switch(gender) {
            case 'male': 
            this.genderMale.click();
            break;
        
            case 'female':
            this.genderFemale.click();
            break;
        }
    }

    async clickCreateAccount() {
        await this.buttonCreateAccount.click();
    }
}

