public with sharing class currentWeekLead {
    
    @AuraEnabled (cacheable=true)
    public static list<Lead> weekMethod()
    {
        List<lead> leadList = [SELECT id, Name, Company, Status, CreatedDate From Lead Where CreatedDate = THIS_WEEK];
        return leadList;
    }
}