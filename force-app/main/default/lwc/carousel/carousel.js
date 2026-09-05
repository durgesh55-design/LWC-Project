import { LightningElement } from 'lwc';
import HtmlLogo from '@salesforce/resourceUrl/HtmlLogo';
import Csslogo from '@salesforce/resourceUrl/css';
import Jslogo from '@salesforce/resourceUrl/js';
export default class Carousel extends LightningElement 
{
    Image1 = HtmlLogo;
    Image2 = Csslogo;
    Image3 = Jslogo;
}