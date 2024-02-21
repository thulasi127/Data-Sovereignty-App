import React, { useState, useEffect, useRef } from 'react';
import { getPosts, getBlogs, getSentiment} from "../utils/api";
import { FaAmazon, FaMicrosoft, FaApple, FaFacebook, FaGoogle, FaSnapchat, FaSalesforce} from 'react-icons/fa';
import {SiTesla, SiNvidia, SiSamsung, SiWalmart, SiMastercard, SiTencentqq, SiVisa, SiTwitter, SiNetflix, SiVerizon, SiAdobe, SiOracle, SiCisco} from 'react-icons/si'
import "../styles/components/Sort.css";
import "../styles/components/Filter.css";
import { AiOutlineSortAscending } from 'react-icons/ai';
import { MdFilterList } from 'react-icons/md';
import ReactSwitch from "react-switch";
import CompanyCard from './CompanyCard';
import CompanyInformation from './CompanyInformation';


export const sortAtoZ = (companies) => {
  const sortedCompanies = companies.sort((a, b) => a.name.localeCompare(b.name)); // Sort the array by name
  return sortedCompanies;
}

export const sortZtoA = (companies) => {
  const sortedCompanies = companies.sort((a, b) => b.name.localeCompare(a.name)); // Sort the array by name in descending order
  return sortedCompanies;
}

export const convertMarketCapToNumber = (marketCap) => {
  let value = marketCap.replace('$', '');
  if (value.includes('T')) {
    value = value.replace('T', '') * 1000;
  } else if (value.includes('B')) {
    value = value.replace('B', '');
  }
  return Number(value);
}

export const HighestToLowestMarketCap = (companies) => {
  const sortedCompanies = companies.sort((a, b) => {
    const aMarketCap = convertMarketCapToNumber(a.marketCap);
    const bMarketCap = convertMarketCapToNumber(b.marketCap);
    return bMarketCap - aMarketCap;
  });
  return sortedCompanies;
}

export const LowestToHighestMarketCap = (companies) => {
  const sortedCompanies = companies.sort((a, b) => {
    const aMarketCap = convertMarketCapToNumber(a.marketCap);
    const bMarketCap = convertMarketCapToNumber(b.marketCap);
    return aMarketCap - bMarketCap;
  });
  return sortedCompanies;
}

export const filterData = (companies, marketCapFilter, privacyIndexFilter) => {
  const marketCapFiltered = companies.filter(item => {
    let value = convertMarketCapToNumber(item.marketCap);

    if (marketCapFilter === 'under$450B') {
      return value < 450;
    } else if (marketCapFilter === 'over$450B') {
      return value >= 450;
    } else {
      return true;
    }
  });

  const privacyIndexFiltered = marketCapFiltered.filter(item => {
    if (privacyIndexFilter === 'veryPoorIndex') {
      return item.privacyIndex >= -1.0 && item.privacyIndex < -0.5;
    } else if (privacyIndexFilter === 'poorIndex') {
      return item.privacyIndex >= -0.5 && item.privacyIndex < 0.0;
    } else if (privacyIndexFilter === 'strongIndex') {
      return item.privacyIndex >= 0.0 && item.privacyIndex < 0.5;
    } else if (privacyIndexFilter === 'veryStrongIndex') {
      return item.privacyIndex >= 0.5 && item.privacyIndex <= 1.0;
    } else {
      return true;
    }
  });

  return privacyIndexFiltered;
};


function Grid() {

    const [selectedCompany, setSelectedCompany] = useState(null);
    const [companies, setCompanies] = useState([
      { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', privacyIndex: -0.82, icon: FaAmazon,},
      { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T', privacyIndex: -0.27, icon: FaMicrosoft},
      { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', privacyIndex: -0.98, icon: FaApple},
      { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', privacyIndex: 0.11, icon: FaFacebook },
      { name: 'Google', color: '#90EE90', marketCap: '$1.5T', privacyIndex: 0.05, icon: FaGoogle },
      { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', privacyIndex: 0.30, icon: SiTesla, },
      { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', privacyIndex: -0.09, icon: SiNvidia, },
      { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', privacyIndex: -0.69, icon: SiSamsung, },
      { name: 'Walmart', color: '#D291BC', marketCap: '$400B', privacyIndex: 0.52, icon: SiWalmart, },
      { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', privacyIndex: 0.39, icon: SiMastercard, },
      { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', privacyIndex: 0.77, icon: SiCisco, },
      { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', privacyIndex: -0.59, icon: FaSnapchat, },
      { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', privacyIndex: 0.36, icon: SiTencentqq, },
      { name: 'Visa', color: '#F7B600', marketCap: '$500B', privacyIndex: 0.72, icon: SiVisa, },
      { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', privacyIndex: -0.67, icon: FaSalesforce, },
      { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', privacyIndex: -0.14, icon: SiOracle, },
      { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', privacyIndex: -1.00, icon: SiAdobe, },
      { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', privacyIndex: 0.78, icon: SiVerizon, },
      { name: 'Netflix', color: '#FF6961', marketCap: '$150B', privacyIndex: -0.09, icon: SiNetflix, },
      { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', privacyIndex: 0.90, icon: SiTwitter, },
      ])

  const [copyCompanies, setCopyCompanies] = useState([...companies]);

    const sortOptions = [
      { label: 'Companies from A to Z', value: 1 },
      { label: 'Companies from Z to A', value: 2 },
      { label: 'Highest to Lowest Market Cap', value: 3 },
      { label: 'Lowest to Highest Market Cap', value: 4 }
    ];

    const filter1options = [
      { label: 'All', value: 'All' },
      { label: 'Under $450B', value: 'under$450B' },
      { label: 'Over $450B', value: 'over$450B' }
    ];
    
    const filter2options = [
      { label: 'All', value: 'All' },
      { label: 'Very poor', value: 'veryPoorIndex' },
      { label: 'Poor', value: 'poorIndex' },
      { label: 'Strong', value: 'strongIndex' },
      { label: 'Very strong', value: 'veryStrongIndex' }
    ];

    const companyInfoRef = useRef(null);

    useEffect(() => {
      if (selectedCompany && companyInfoRef.current) {
        companyInfoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [selectedCompany]);

  const [checked, setChecked] = useState(false);

  const handleChange = (val) => {
    // getAverageIndex(val);
    setChecked(val);
    getUpdatedCompanies(val);
  };

  const getUpdatedCompanies = (val) => {
    if (val) {
      // Create a new array with the updated colors
      const newCompanies = companies.map((company) => {
        let newColor = "white";
        if (company.privacyIndex <= -0.5) {
          newColor = "#bf0e08";
        } else if (-0.5 < company.privacyIndex && company.privacyIndex < 0) {
          newColor = "#ec4c47";
        } else if (0 <= company.privacyIndex && company.privacyIndex <= 0.5)
          newColor = "#79E381";
        else {
          newColor = "#20AF24";
        }
        return { ...company, color: newColor };
      });
      setSelectedCompany(null);
      setCompanies(newCompanies);
    } else {
      // Revert to the original array
      const getCompanies = [];
      copyCompanies.forEach((copy) => {
        companies.forEach((company) => {
          if(copy.name === company.name){
            getCompanies.push(copy);
          }
        })
      })
      setSelectedCompany(null);
      setCompanies(getCompanies);
    }
  };
  
    
    const [sortIsOpen, setSortIsOpen] = useState(false);
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setSortIsOpen(false);
      selectSort(option)
      setSelectedCompany(null);
    };

    const [marketCapFilter, setMarketCapFilter] = useState('');
    const [privacyIndexFilter, setPrivacyIndexFilter] = useState('');

    const handleMarketCapFilterChange = event => {
      setMarketCapFilter(event.target.value);
    };

    const handlePrivacyIndexFilterChange = event => {
      setPrivacyIndexFilter(event.target.value);
    };
    
    useEffect(() => {
        companies.forEach((company) => {
            let keyPhrase = `${company.name} user privacy`;
            
            getPosts(company.name, keyPhrase).then((posts) => parseApi(posts));

            const addKeyValuePair = (company, key, value) => {
                company[key] = value
            };

            const parseApi = (data) => {
               addKeyValuePair(company, 'data', data)
            }
        })
        setCompanies(companies)
    }, []);

    useEffect(() => {
      companies.forEach((company) => {
        let phrase = `${company.name} privacy`;
        getBlogs(company.name, phrase).then((blog) => parseApi(blog[0].blogs));
  
        const addKeyValuePair = (company, key, value) => {
          company[key] = value;
        };
  
        const parseApi = (data) => {
          addKeyValuePair(company, "blog", data);
        };
      });
  
      setCompanies(companies);
    }, []);

    useEffect(() => {
      copyCompanies.forEach((company) => {
        if (company?.data) {
          let title = company.blog[0].title;
          getSentiment(title).then((score) => parseApi(score));

          const addKeyValuePair = (company, key, value) => {
            console.log(value);
            company[key] = value.toFixed(2);
          };
    
          const parseApi = (data) => {
            addKeyValuePair(company, "privacyIndex", data);
          };
        }
      })
    }, [companies[0]?.blog]);

  const selectSort = (option) => {

    if (option.value === 1) {
      const sorted = sortAtoZ(companies);
      setCompanies(sorted);
    } 
    else if (option.value === 2) {
      const sorted = sortZtoA(companies);
      setCompanies(sorted);
    }
    else if (option.value === 3) {
      const sorted = HighestToLowestMarketCap(companies);
      setCompanies(sorted);
    }
    else if (option.value === 4) {
      const sorted = LowestToHighestMarketCap(companies);
      setCompanies(sorted);
    }
    else {
      console.log('Invalid option');
    }
  }

  // const [unfilteredCompanies, setUnfilteredCompanies] = useState([...companies]);

  const selectFilter = (marketCapFilter,privacyIndexFilter) => {
    let filteredCompanies = filterData(copyCompanies, marketCapFilter, privacyIndexFilter);
    console.log(filteredCompanies);
    // Create a new array with the updated colors
    if(checked) {
      const newCompanies = filteredCompanies.map((company) => {
        let newColor = "white";
        if (company.privacyIndex <= -0.5) {
          newColor = "#bf0e08";
        } else if (-0.5 < company.privacyIndex && company.privacyIndex < 0) {
          newColor = "#ec4c47";
        } else if (0 <= company.privacyIndex && company.privacyIndex <= 0.5)
          newColor = "#79E381";
        else {
          newColor = "#20AF24";
        }
        return { ...company, color: newColor };
      });
      setSelectedCompany(null);
      setCompanies(newCompanies);
    } else{
      setCompanies(filteredCompanies);
    }
  }

  const applyFilter = (marketCapFilter, privacyIndexFilter) => {
    setFilterIsOpen(false);
    selectFilter(marketCapFilter,privacyIndexFilter);
    setSelectedCompany(null);
  };

    return (
        <div>
            <div className="dropdown-menu">
              <button style={{ position: 'absolute', left: '300px', top: '40px', display: 'flex', alignItems: 'center' }} className="dropdown-button" onClick={() => setSortIsOpen(!sortIsOpen)}>
                Sort <AiOutlineSortAscending />
              </button>
              {sortIsOpen && (
                <div className="dropdown-options">
                  {sortOptions.map((option) => (
                    <div
                      key={option.value}
                      className="dropdown-option"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="filter-dropdown-menu">
              <button
                style={{ position: 'absolute', left: '300px', top: '40px', display: 'flex', alignItems: 'center' }}
                className="filter-dropdown-button"
                onClick={() => setFilterIsOpen(!filterIsOpen)}
              >
                Filter <MdFilterList />
              </button>
              {filterIsOpen && (
                <div className="filter-dropdown-options">
                  <div className="filter-dropdown">
                    <label htmlFor="age-filter">Market Cap:</label>{' '}
                    <select
                      id="age-filter"
                      value={marketCapFilter}
                      onChange={handleMarketCapFilterChange}
                    >
                      {filter1options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="filter-dropdown">
                    <label htmlFor="gender-filter">Privacy Index:</label>{' '}
                    <select
                      id="gender-filter"
                      value={privacyIndexFilter}
                      onChange={handlePrivacyIndexFilterChange}
                    >
                      {marketCapFilter}
                      {privacyIndexFilter}
                      {filter2options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="filter-apply-button" onClick={() => applyFilter(marketCapFilter, privacyIndexFilter)}>
                    Apply
                  </button>
                </div>
              )}
            </div>
                
                
            {/* <h1 style={{maxWidth: '500px', margin: '0 auto', marginTop: '40px', textAlign: 'center'}}>Data Sovereignty Index</h1> */}
        
            <h2 style={{maxWidth: '500px', margin: '0 auto', marginTop: '20px', marginBottom: '10px', textAlign: 'center', paddingTop: '20px'}} >Top 20 Companies</h2>
            <div style={{ position: 'relative', top: '-50px', textAlign: 'center', marginLeft: '1000px' }}>
            <h4>Toggle Privacy Index View</h4>
            <ReactSwitch checked={checked} onChange={handleChange} />
          </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridGap: '20px',
                margin: '0 auto',
                maxWidth: '1200px'
            }}>
                {companies.map(company => (
                <div key={company.name} style={{ cursor: 'pointer' }} onClick={() => setSelectedCompany(company)}>
                    <CompanyCard company={company} checked={checked}/>
                </div>
                ))}
            </div>
            {selectedCompany && companies.length !== 0 ? (
              <div ref={companyInfoRef}>
                <CompanyInformation company={selectedCompany} />
              </div>
            ) : (
              companies.length === 0 ? (
                <h3>No Companies Available</h3>
              ) : (
                <h3>Select a Company to View Their Data</h3>
              )
            )}
        </div>
    );
}

export default Grid;
