import { LightningElement, track } from 'lwc';

export default class TrackProparties extends LightningElement 
{
    firstName = "john";

    @track details = { name : 'Leo' , age : 21};

    UpdateFunction()
    {
        this.firstName = "Smith";
        this.details.name = 'Jayesh';
        this.details.age = 22;
    }

     beforeFunction()
    {
        this.firstName = "john";
        this.details.name = 'Leo';
        this.details.age = 21;
    }
}