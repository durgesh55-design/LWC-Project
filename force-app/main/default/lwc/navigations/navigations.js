import { LightningElement } from 'lwc';
import { navigationMixin } from 'lightning/navigation';
export default class Navigations extends navigationMixin(LightningElement) 
{
    //Account page navigation
    navigateToAccountPage()
    {
        this[NavigationMixin.Navigate](
            {
                type : 'standard__AccountPage',
                attributes : 
                {
                    objectApiName : 'Account',
                    actionName : 'new'
                }
            }
        );
    }

    //login salesforce page navigation
    navigateToSalesforceLoginPage()
    {
        this[NavigationMixin.Navigate](
            {
                type : 'standard__webPage',
                attributes : 
                {
                    url : 'https://login.salesforce.com/'
                }
            }
        );
    }

    //Bank page navigation
    navigateToBankPage()
    {
        this[NavigationMixin.Navigate](
            {
                type : 'custom__BankPage',
                attributes : 
                {
                    objectApiName : 'Bank__c',
                    actionName : 'new'
                }
            }
        );
    }


}