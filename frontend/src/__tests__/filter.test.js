import { FaAmazon, FaMicrosoft, FaApple, FaFacebook, FaGoogle, FaSnapchat, FaSalesforce} from 'react-icons/fa';
import {SiTesla, SiNvidia, SiSamsung, SiWalmart, SiMastercard, SiTencentqq, SiVisa, SiTwitter, SiNetflix, SiVerizon, SiAdobe, SiOracle, SiCisco} from 'react-icons/si'
import {filterData} from '../components/Grid.js'

// Test data
let all_companies = [
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
]

let allandVeryPoor = [
  { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', privacyIndex: -0.82, icon: FaAmazon,},
  { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', privacyIndex: -0.98, icon: FaApple}, 
  { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', privacyIndex: -0.69, icon: SiSamsung, },
  { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', privacyIndex: -0.59, icon: FaSnapchat, },
  { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', privacyIndex: -0.67, icon: FaSalesforce, },
  { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', privacyIndex: -1.00, icon: SiAdobe, },
]

let allandPoor = [
  { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T', privacyIndex: -0.27, icon: FaMicrosoft}, 
  { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', privacyIndex: -0.09, icon: SiNvidia, },
  { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', privacyIndex: -0.14, icon: SiOracle, },
  { name: 'Netflix', color: '#FF6961', marketCap: '$150B', privacyIndex: -0.09, icon: SiNetflix, },
]

let allandStrong = [
  { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', privacyIndex: 0.11, icon: FaFacebook }, 
  { name: 'Google', color: '#90EE90', marketCap: '$1.5T', privacyIndex: 0.05, icon: FaGoogle },
  { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', privacyIndex: 0.30, icon: SiTesla, },
  { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', privacyIndex: 0.39, icon: SiMastercard, },
  { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', privacyIndex: 0.36, icon: SiTencentqq, },
]

let allandVeryStrong = [
  { name: 'Walmart', color: '#D291BC', marketCap: '$400B', privacyIndex: 0.52, icon: SiWalmart, },
  { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', privacyIndex: 0.77, icon: SiCisco, },
  { name: 'Visa', color: '#F7B600', marketCap: '$500B', privacyIndex: 0.72, icon: SiVisa, },
  { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', privacyIndex: 0.78, icon: SiVerizon, },
  { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', privacyIndex: 0.90, icon: SiTwitter, },
]

let under$450BandAll = [
  { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', privacyIndex: -0.69, icon: SiSamsung, },
  { name: 'Walmart', color: '#D291BC', marketCap: '$400B', privacyIndex: 0.52, icon: SiWalmart, },
  { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', privacyIndex: 0.39, icon: SiMastercard, },
  { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', privacyIndex: 0.77, icon: SiCisco, },
  { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', privacyIndex: -0.59, icon: FaSnapchat, },
  { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', privacyIndex: -0.14, icon: SiOracle, },
  { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', privacyIndex: -1.00, icon: SiAdobe, },
  { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', privacyIndex: 0.78, icon: SiVerizon, },
  { name: 'Netflix', color: '#FF6961', marketCap: '$150B', privacyIndex: -0.09, icon: SiNetflix, },
  { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', privacyIndex: 0.90, icon: SiTwitter, },
]

let under$450BandVeryPoor = [
  { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', privacyIndex: -0.69, icon: SiSamsung, },
  { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', privacyIndex: -0.59, icon: FaSnapchat, },
  { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', privacyIndex: -1.00, icon: SiAdobe, },
]

let under$450BandPoor = [
  { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', privacyIndex: -0.14, icon: SiOracle, },
  { name: 'Netflix', color: '#FF6961', marketCap: '$150B', privacyIndex: -0.09, icon: SiNetflix, },
]

let under$450BandStrong = [
  { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', privacyIndex: 0.39, icon: SiMastercard, },
]

let under$450BandVeryStrong = [
  { name: 'Walmart', color: '#D291BC', marketCap: '$400B', privacyIndex: 0.52, icon: SiWalmart, },
  { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', privacyIndex: 0.77, icon: SiCisco, },
  { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', privacyIndex: 0.78, icon: SiVerizon, },
  { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', privacyIndex: 0.90, icon: SiTwitter, },
]

let over$450BandAll = [
  { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', privacyIndex: -0.82, icon: FaAmazon,},
  { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T', privacyIndex: -0.27, icon: FaMicrosoft},
  { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', privacyIndex: -0.98, icon: FaApple},
  { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', privacyIndex: 0.11, icon: FaFacebook },
  { name: 'Google', color: '#90EE90', marketCap: '$1.5T', privacyIndex: 0.05, icon: FaGoogle },
  { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', privacyIndex: 0.30, icon: SiTesla, },
  { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', privacyIndex: -0.09, icon: SiNvidia, },
  { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', privacyIndex: 0.36, icon: SiTencentqq, },
  { name: 'Visa', color: '#F7B600', marketCap: '$500B', privacyIndex: 0.72, icon: SiVisa, },
  { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', privacyIndex: -0.67, icon: FaSalesforce, },
]

let over$450BandVeryPoor = [
  { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', privacyIndex: -0.82, icon: FaAmazon,},
  { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', privacyIndex: -0.98, icon: FaApple},
  { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', privacyIndex: -0.67, icon: FaSalesforce, },
]

let over$450BandPoor = [
  { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T', privacyIndex: -0.27, icon: FaMicrosoft},
  { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', privacyIndex: -0.09, icon: SiNvidia, },
]

let over$450BandStrong = [
  { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', privacyIndex: 0.11, icon: FaFacebook },
  { name: 'Google', color: '#90EE90', marketCap: '$1.5T', privacyIndex: 0.05, icon: FaGoogle },
  { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', privacyIndex: 0.30, icon: SiTesla, },
  { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', privacyIndex: 0.36, icon: SiTencentqq, },
]

let over$450BandVeryStrong = [
  { name: 'Visa', color: '#F7B600', marketCap: '$500B', privacyIndex: 0.72, icon: SiVisa, },
]


// Testing sort filter functions (Sort from A-Z, Sort from Z-A, Sort from Highest to lowest Market Cap, Sort from Lowest to Highest Market Cap)
describe('filterOptions', () => {
    test('Filter Option 1', () => {
      const result = filterData(all_companies, "All", "All");
      expect(result).toEqual(all_companies);
    });
  
    test('Filter Option 2', () => {
      const result = filterData(all_companies, "All", "veryPoorIndex");
      expect(result).toEqual(allandVeryPoor);
    });
  
    test('Filter Option 3', () => {
      const result = filterData(all_companies, "All", "poorIndex");
      expect(result).toEqual(allandPoor);
    });
  
    test('Filter Option 4', () => {
      const result = filterData(all_companies, "All", "strongIndex");
      expect(result).toEqual(allandStrong);
    });

    test('Filter Option 5', () => {
      const result = filterData(all_companies, "All", "veryStrongIndex");
      expect(result).toEqual(allandVeryStrong);
    });

    test('Filter Option 6', () => {
      const result = filterData(all_companies, "under$450B", "All");
      expect(result).toEqual(under$450BandAll);
    });

    test('Filter Option 7', () => {
      const result = filterData(all_companies, "under$450B", "veryPoorIndex");
      expect(result).toEqual(under$450BandVeryPoor);
    });

    test('Filter Option 8', () => {
      const result = filterData(all_companies, "under$450B", "poorIndex");
      expect(result).toEqual(under$450BandPoor);
    });

    test('Filter Option 9', () => {
      const result = filterData(all_companies, "under$450B", "strongIndex");
      expect(result).toEqual(under$450BandStrong);
    });

    test('Filter Option 10', () => {
      const result = filterData(all_companies, "under$450B", "veryStrongIndex");
      expect(result).toEqual(under$450BandVeryStrong);
    });

    test('Filter Option 11', () => {
      const result = filterData(all_companies, "over$450B", "All");
      expect(result).toEqual(over$450BandAll);
    });

    test('Filter Option 12', () => {
      const result = filterData(all_companies, "over$450B", "veryPoorIndex");
      expect(result).toEqual(over$450BandVeryPoor);
    });

    test('Filter Option 13', () => {
      const result = filterData(all_companies, "over$450B", "poorIndex");
      expect(result).toEqual(over$450BandPoor);
    });

    test('Filter Option 14', () => {
      const result = filterData(all_companies, "over$450B", "strongIndex");
      expect(result).toEqual(over$450BandStrong);
    });

    test('Filter Option 15', () => {
      const result = filterData(all_companies, "over$450B", "veryStrongIndex");
      expect(result).toEqual(over$450BandVeryStrong);
    });
  });




