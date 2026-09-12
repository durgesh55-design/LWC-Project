trigger ContactTrigger on Contact (before delete) 
{
    for(Contact con : Trigger.old)
    {
      if(con.AccountId != null)
      {
        con.addError('You cannot delete a contact that is associated with an account.');
      }
    }
}