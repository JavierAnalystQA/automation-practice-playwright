import { BasePage } from "./BasePage";

export class AddressPage extends BasePage{
    // Constructor
    constructor(page) {
        super(page);

        this.infoAddressForm = page.locator('[class="info-title"]');
        this.inputCompany = page.locator("[id='company']");
        this.inputAddress1 = page.locator("[id='address1']");
        this.inputAddress2 = page.locator("[id='address2']");
        this.inputCity = page.locator("[id='city']");
        this.dropdownState = page.locator("[id='id_state']");
        this.inputPostCode = page.locator("[id='postcode']");
        this.dropdownCountry = page.locator("[id='id_country']");
        this.inputHomePhone = page.locator("[id='phone']");
        this.inputMobilePhone = page.locator("[id='phone_mobile']");
        this.imputAdditionalInformation = page.locator("[id='other']");
        this.inputAlias = page.locator("[id='alias']");
        this.buttonSubmitAddress = page.locator("[id='submitAddress']");
    }

    // Methods
    getInfoAddressForm = async () => {
        const specificInfoAddressForm = this.infoAddressForm;
        await specificInfoAddressForm.waitFor();
        return await specificInfoAddressForm.innerText();
    }

    fillCompany = async (company) => {
        const specificInputCompany = this.inputCompany;
        await specificInputCompany.waitFor();
        await specificInputCompany.fill(company);
    }

    fillAddress1 = async (address1) => {
        const specificInputAddress1 = this.inputAddress1;
        await specificInputAddress1.waitFor();
        await specificInputAddress1.fill(address1);
    }

    fillAddress2 = async (address2) => {
        const specificInputAddress2 = this.inputAddress2;
        await specificInputAddress2.waitFor();
        await specificInputAddress2.fill(address2);
    }

    fillCity = async (city) => {
        const specificInputCity = this.inputCity;
        await specificInputCity.waitFor();
        await specificInputCity.fill(city);
    }

    selectState = async (state) => {
        const specificDropdownState = this.dropdownState;
        await specificDropdownState.waitFor();
        await specificDropdownState.selectOption(state);
    }

    fillPostCode = async (postCode) => {
        const specificInputPostCode = this.inputPostCode;
        await specificInputPostCode.waitFor();
        await specificInputPostCode.fill(postCode);
    }

    selectCountry = async (country) => {
        const specificDropdownCountry = this.dropdownCountry;
        await specificDropdownCountry.waitFor();
        await specificDropdownCountry.selectOption(country);
    }

    fillHomePhone = async (homePhone) => {
        const specificInputHomePhone = this.inputHomePhone;
        await specificInputHomePhone.waitFor();
        await specificInputHomePhone.fill(homePhone);
    }

    fillMobilePhone = async (mobilePhone) => {
        const specificInputMobilePhone = this.inputMobilePhone;
        await specificInputMobilePhone.waitFor();
        await specificInputMobilePhone.fill(mobilePhone);
    }

    fillAdditionalInformation = async (additionalInformation) => {
        const specificImputAdditionalInformation = this.imputAdditionalInformation;
        await specificImputAdditionalInformation.waitFor();
        await specificImputAdditionalInformation.fill(additionalInformation);
    }

    fillAlias = async (alias) => {
        const specificInputAlias = this.inputAlias;
        await specificInputAlias.waitFor();
        await specificInputAlias.fill(alias);
    }

    clickOnSubmitAddressButton = async () => {
        const specificButtonSubmitAddress = this.buttonSubmitAddress;
        await specificButtonSubmitAddress.waitFor();
        await specificButtonSubmitAddress.click();
        await this.page.waitForURL("/index.php?controller=order?step=1");
    }
}