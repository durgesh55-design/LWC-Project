import { LightningElement } from 'lwc';
import HtmlLogo from '@salesforce/resource/html';
import Csslogo from '@salesforce/resource/css';
import Jslogo from '@salesforce/resource/js';

export default class Tabset extends LightningElement
{
    Image1 = HtmlLogo;
    Image2 = Csslogo;
    Image3 = Jslogo;
}