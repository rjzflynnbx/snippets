** The 'guest' object is implicitly available in all decision model programmables**


>  guest.email etc.


Use the print function to help debug, e.g.

>  print(guest.email) 


Anything returned from a progmmable node you can see in the test canva feature to help debug (make sure the programmable returns the correct type i.e. map for objects etc)

>  return value 


You can pass the guest into functions in this repo like 

> var mostRecentWebSession = getMostRecentWebSession(guest);
