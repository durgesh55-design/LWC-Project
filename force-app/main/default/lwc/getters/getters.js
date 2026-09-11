import { LightningElement } from 'lwc';

export default class Getters extends LightningElement 
{
    firstName = "Monalisa";
    lastName = "Sharma";

    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}