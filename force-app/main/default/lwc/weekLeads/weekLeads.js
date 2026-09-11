import { LightningElement , wire} from 'lwc';
import leadClass from '@salesforce/apex/currentWeekLead.weekMethod';
export default class WeekLeads extends LightningElement 
{
    @wire(leadClass)
    leadList;
}