import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
import LightningModal from 'lightning/modal';

export default class AccountModal extends LightningModal{
    @wire(getAccountList) accounts;

    handleClose() {
        this.close('done');
    }

    handleRedirect(event) {
        const recordId = event.currentTarget.getAttribute('data-recordid');
        
        // Construct the URL to the record page
        const recordPageUrl = `/lightning/r/Account/${recordId}/view`;
        
        // Redirect to the record page
        window.location.href = recordPageUrl;
    }

    accountHandler(event) {
        this.handleRedirect(event);
    }

}
