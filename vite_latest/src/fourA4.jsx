import React, { useState, useEffect } from 'react';
import BankDetails from './bankdetails'; // Import the new component

const Api4 = () => {
  const [banks, setBanks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://indian-banks-api.onrender.com/banks')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data to check the response structure
        setBanks(data); // Ensure data is being set correctly
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  const filteredBanks = banks.filter((bank) =>
    bank.ifsc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Indian Banks</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by IFSC"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Filtered List */}
          {filteredBanks.length === 0 ? (
            <p>No banks found.</p>
          ) : (
            <ul>
              {filteredBanks.map((bank) => (
                <li key={bank.ifsc}>
                  {bank.bank_name} - {bank.branch} ({bank.city}){' '}
                  {/* Pass the IFSC to BankDetails Component */}
                  <BankDetails ifsc={bank.ifsc} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Api4;

