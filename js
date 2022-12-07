import { LightningElement } from 'lwc';
import MANAGER from '@salesforce/schema/Property_KG__c.Manager__c'                                     
import LEASE_SIGNED_DATE from '@salesforce/schema/Property_KG__c.Lease_Signed_Date__c'
import OFFICE_MANAGER from '@salesforce/schema/Property_KG__c.Manager__c'
import CREATED_BY from '@salesforce/schema/Property_KG__c.CreatedById'

import property__c_Object from '@salesforce/schema/property__c'                              

export default class LightningRecordEditForm extends LightningElement {
    manager=MANAGER
   leaseSignedDate=LEASE_SIGNED_DATE
  officeManager=OFFICE_MANAGER
createdBy=CREATED_BY

 
}
