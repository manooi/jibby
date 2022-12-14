import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountActions } from "../../state/_Actions";
import { contactActions } from "../../state/_Actions";

function AccountApp() {

  const dispatch = useDispatch();

  const account = useSelector((state) => state.account);
  const { depositMoney, withdrawMoney } = bindActionCreators(accountActions, dispatch);
  // console.log(account);
  // console.log(depositMoney);


  // Lower order reducer [contact]
  const contact = useSelector((state) => state.contact);
  const { setContact, resetContact } = bindActionCreators(contactActions, dispatch);
  console.log(contact)

  // Higher order reducer [(contactReducer, "sender")] 
  const sender = useSelector((state) => state.sender)

  //

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1>{account}</h1>
      <button onClick={() => dispatch({ type: 'deposit', payload: 100 })}>Manual dispatch</button>
      <button onClick={() => depositMoney(100)}>bindActionCreators</button>
      {/* <input type="text" id="firstName" onChange={(e) => { console.log(e.target.value) }} /> */}

      <input value={contact.firstName} type="text" id="firstName" onChange={(e) => { setContact(e) }} />
      <input value={contact.lastName} type="text" id="lastName" onChange={(e) => { setContact(e) }} />
      <input value={contact.telephone} type="text" id="telephone" onChange={(e) => { setContact(e) }} />
      <input value={contact.postalCode} type="text" id="postalCode" onChange={(e) => { setContact(e) }} />
      <input value={contact.address} type="text" id="address" onChange={(e) => { setContact(e) }} />
      <button onClick={() => resetContact()}>Reset</button>
    </div>
  )
}



export default AccountApp

