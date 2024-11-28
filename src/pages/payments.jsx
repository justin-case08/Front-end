import React from 'react';
import PaymentsTable from '../components/PaymentsTable';
import AddPay from '../modals/modalAddPay';


function Payments() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className='h1nglahat'>Payments</h1>
      </div>
      <PaymentsTable />
    </div>
  );
}


export default Payments;