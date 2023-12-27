import { BasePage } from "./BasePage";

export class MyAccountPage extends BasePage{
    //Constructor
    constructor(page){
        super(page);

        this.textAccountCreated = page.getByText('Your account has been created.');
    }

    //Methods    
    getTextAccountCreated = async () => {
        const specificTextAccountCreated = this.textAccountCreated;
        await specificTextAccountCreated.waitFor();
        return await specificTextAccountCreated.innerText();
    }
}