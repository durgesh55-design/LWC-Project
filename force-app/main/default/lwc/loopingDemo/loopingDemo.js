import { LightningElement , wire} from 'lwc';
import newCases from '@salesforce/apex/caseDetails.caseMethod';
export default class LoopingDemo extends LightningElement 
{
 @wire(newCases)
 getCases;
}