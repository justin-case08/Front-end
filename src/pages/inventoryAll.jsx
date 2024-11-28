import React from 'react';
import InventoryTable from '../components/InventoryTable';
import AddInv from '../modals/modalAddInv';

function Inventory() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="h1nglahat">Inventory</h1>
      </div>
      <InventoryTable />
    </div>
  );
}

export default Inventory;
