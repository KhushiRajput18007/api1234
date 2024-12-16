import React, { useState } from 'react';

const BankDetails = ({ ifsc }) => {
  const [bankDetails, setBankDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBankDetails = () => {
    if (!ifsc) return;

    // Convert the IFSC code to uppercase before making the request
    const upperCaseIfsc = ifsc.toUpperCase();
    const url = `https://bank-apis.justinclicks.com/API/V1/IFSC/MAHB0001012/`;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setBankDetails(null);
        } else {
          setBankDetails(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching bank details:', err);
        setError('Unable to fetch bank details.');
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={fetchBankDetails}>View Details</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bankDetails && (
        <div className="bank-details">
          <h3>Bank Details</h3>
          <p>
            <strong>Bank Name:</strong> {bankDetails.BANK}
          </p>
          <p>
            <strong>Branch:</strong> {bankDetails.BRANCH}
          </p>
          <p>
            <strong>IFSC:</strong> {bankDetails.IFSC}
          </p>
          <p>
            <strong>Address:</strong> {bankDetails.ADDRESS}
          </p>
          <p>
            <strong>City:</strong> {bankDetails.CITY}
          </p>
          <p>
            <strong>State:</strong> {bankDetails.STATE}
          </p>
        </div>
      )}
    </div>
  );
};

export default BankDetails;
