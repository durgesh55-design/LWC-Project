import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import HtmlImage from '@salesforce/resourceUrl/HtmlLogo';
export default class Conditions extends LightningElement
{
   isShow = false;


   img1 = HtmlImage;
  
   hideImage()
   {
       this.isShow = false;


   }
   showToastEventFunction()
   {
           this.isShow = true;
           const firstEvent = new ShowToastEvent(
               {
                   title : "Image Visible",
                   message : "This is an HTML Image",
                   variant : 'success'
                  
               }
           );
  
           this.dispatchEvent(firstEvent);
   }
  
}
