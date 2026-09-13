public with sharing class caseDetails
{
    //select case record data  case status is new and send LWC. 

    @AuraEnabled (cacheable=true)
    public static List<Case> caseMethod() 
    {
        List<Case> caseList = [SELECT Id, CaseNumber, Subject, Status, Priority FROM Case WHERE Status = 'NEW'];
        return caseList;
    }
}