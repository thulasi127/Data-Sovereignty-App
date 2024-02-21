import React from 'react'

// Function that creates each company card given the company
const CompanyCard = ({ company, checked }) => {
    return (
        <div style={{ // Style the card
        width: '200px',
        height: '200px',
        backgroundColor: company.color,
        borderRadius: '10px',
        boxShadow: '0px 0px 10px #ccc',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

        }}>
        {/* Add the company title, icon, and market cap values */}
        <h3 style={{ fontWeight: 'bold' }}>{company.name}</h3>
        <company.icon size="40"></company.icon>
        <p style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '15px', marginBottom: "0px" }}>Market Cap: {company.marketCap}</p>
        {checked && (
          <p style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '5px' }}>Score: {company.privacyIndex}</p>
        )}
        </div>
    );
};

export default CompanyCard;