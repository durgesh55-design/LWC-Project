import { LightningElement } from 'lwc';
import { ShowTostEvent } from 'lightning/platformShowToastEvent';
export default class ToastNotification extends LightningElement
{
    showToastEventFunction()
   {
       const firstEvent = new ShowToastEvent(
           {
               title : "Show Toast Event",
               message : "This is Show Toast Event Message",
               variant : "Success"
              
           }
       );
       this.dispatchEvent(firstEvent);
   }

    
    
}