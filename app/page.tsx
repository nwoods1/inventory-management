import { getInventory } from '../lib/getInventory';
import { CSSProperties } from 'react';
import Link from 'next/link'; // Import Link from Next.js

export default async function Home() {
  const inventory = await getInventory();

  return (
    <div style={{ backgroundColor: '#007acc', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
        Inventory Data
      </h1>
      <Link href="/add-inventory" style={{ color: '#fff', display: 'block', textAlign: 'center', marginBottom: '1rem' }}>
        Add New Inventory Item
      </Link>
      <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Category</th>
              <th style={tableHeaderStyle}>Room</th>
              <th style={tableHeaderStyle}>Quantity</th>
              <th style={tableHeaderStyle}>Supply Level</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} style={tableRowStyle}>
                <td style={tableDataStyle}>{item.id}</td>
                <td style={tableDataStyle}>{item.name}</td>
                <td style={tableDataStyle}>{item.category}</td>
                <td style={tableDataStyle}>{item.room}</td>
                <td style={tableDataStyle}>{item.quantity}</td>
                <td style={tableDataStyle}>{item.supply_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableStyle: CSSProperties = {
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  borderRadius: '8px',
  overflow: 'hidden',
};

const tableHeaderStyle: CSSProperties = {
  backgroundColor: '#004c8c',
  color: 'white',
  padding: '1rem',
  fontWeight: 'bold',
  textAlign: 'left',
  borderBottom: '2px solid #ddd',
};

const tableRowStyle: CSSProperties = {
  borderBottom: '1px solid #ddd',
};

const tableDataStyle: CSSProperties = {
  padding: '0.75rem',
  textAlign: 'left',
};
