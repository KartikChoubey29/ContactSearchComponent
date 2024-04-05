import { LightningElement, wire , track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
import accountModal from 'c/accountModal';

export default class Leads extends NavigationMixin(LightningElement) {
    @wire(getAccountList) accounts;
    showModal = false;

    accountHandler(event) {
        const accountId = event.currentTarget.dataset.recordid;
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
                objectApiName: "Account",
                actionName: "view",
                recordId: accountId
            }
        });
    }

    get limitedAccounts() {
        return this.accounts.data ? this.accounts.data.slice(0, 5) : [];
    }
   
  /*  handleViewAll() {
        this.showModal = true;
    }

    handleCloseModal() {
        this.showModal = false;
    }*/

    async handleViewAll() {
        const result = await accountModal.open({
            size: 'small',
            description: 'Accessible description of modal\'s purpose',
            content: 'Account Display',
        });
        console.log(result);
    }
}