import { FaAmazon, FaMicrosoft, FaApple, FaFacebook, FaGoogle, FaSnapchat, FaSalesforce} from 'react-icons/fa';
import {SiTesla, SiNvidia, SiSamsung, SiWalmart, SiMastercard, SiTencentqq, SiVisa, SiTwitter, SiNetflix, SiVerizon, SiAdobe, SiOracle, SiCisco} from 'react-icons/si'
import {sortAtoZ, sortZtoA, HighestToLowestMarketCap, LowestToHighestMarketCap } from '../components/Grid.js'

// Test data
let companies = [
    { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', icon: FaAmazon,},  
    { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T',  icon: FaMicrosoft},  
    { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', icon: FaApple},  
    { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', icon: FaFacebook },  
    { name: 'Google', color: '#90EE90', marketCap: '$1.5T', icon: FaGoogle },  
    { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', icon: SiTesla, },
    { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', icon: SiNvidia, },
    { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', icon: SiSamsung, },
    { name: 'Walmart', color: '#D291BC', marketCap: '$400B', icon: SiWalmart, },
    { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', icon: SiMastercard, },
    { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', icon: SiCisco, },
    { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', icon: FaSnapchat, },
    { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', icon: SiTencentqq, },
    { name: 'Visa', color: '#F7B600', marketCap: '$500B', icon: SiVisa, },
    { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', icon: FaSalesforce, },
    { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', icon: SiOracle, },
    { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', icon: SiAdobe, },
    { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', icon: SiVerizon, },
    { name: 'Netflix', color: '#FF6961', marketCap: '$150B', icon: SiNetflix, },
    { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', icon: SiTwitter, },
]


let testSortAtoZ = [
    { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', icon: SiAdobe, },
    { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', icon: FaAmazon,},  
    { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', icon: FaApple},
    { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', icon: SiCisco, },
    { name: 'Google', color: '#90EE90', marketCap: '$1.5T', icon: FaGoogle }, 
    { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', icon: SiMastercard, },
    { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', icon: FaFacebook },  
    { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T',  icon: FaMicrosoft},
    { name: 'Netflix', color: '#FF6961', marketCap: '$150B', icon: SiNetflix, },
    { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', icon: SiNvidia, },
    { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', icon: SiOracle, },
    { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', icon: FaSalesforce, },
    { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', icon: SiSamsung, },
    { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', icon: FaSnapchat, },
    { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', icon: SiTencentqq, },
    { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', icon: SiTesla, },
    { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', icon: SiTwitter, },
    { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', icon: SiVerizon, },
    { name: 'Visa', color: '#F7B600', marketCap: '$500B', icon: SiVisa, },
    { name: 'Walmart', color: '#D291BC', marketCap: '$400B', icon: SiWalmart, },
]

let testSortZtoA = [
    { name: 'Walmart', color: '#D291BC', marketCap: '$400B', icon: SiWalmart, },
    { name: 'Visa', color: '#F7B600', marketCap: '$500B', icon: SiVisa, },
    { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', icon: SiVerizon, },
    { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', icon: SiTwitter, },
    { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', icon: SiTesla, },
    { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', icon: SiTencentqq, },
    { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', icon: FaSnapchat, },
    { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', icon: SiSamsung, },
    { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', icon: FaSalesforce, },
    { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', icon: SiOracle, },
    { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', icon: SiNvidia, },
    { name: 'Netflix', color: '#FF6961', marketCap: '$150B', icon: SiNetflix, },
    { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T',  icon: FaMicrosoft},
    { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', icon: FaFacebook }, 
    { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', icon: SiMastercard, },
    { name: 'Google', color: '#90EE90', marketCap: '$1.5T', icon: FaGoogle }, 
    { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', icon: SiCisco, },
    { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', icon: FaApple},
    { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', icon: FaAmazon,}, 
    { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', icon: SiAdobe, },
]

let testHighestToLowest = [
    { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', icon: FaApple},  
    { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T',  icon: FaMicrosoft},  
    { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', icon: FaAmazon,}, 
    { name: 'Google', color: '#90EE90', marketCap: '$1.5T', icon: FaGoogle },  
    { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', icon: SiTesla, },
    { name: 'Visa', color: '#F7B600', marketCap: '$500B', icon: SiVisa, },
    { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', icon: SiTencentqq, },
    { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', icon: FaSalesforce, },
    { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', icon: SiNvidia, },
    { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', icon: FaFacebook }, 
    { name: 'Walmart', color: '#D291BC', marketCap: '$400B', icon: SiWalmart, },
    { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', icon: FaSnapchat, },
    { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', icon: SiMastercard, },
    { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', icon: SiCisco, },
    { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', icon: SiSamsung, },
    { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', icon: SiVerizon, },
    { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', icon: SiOracle, },
    { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', icon: SiAdobe, },
    { name: 'Netflix', color: '#FF6961', marketCap: '$150B', icon: SiNetflix, },
    { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', icon: SiTwitter, },
]

let testLowestToHighest = [
    { name: 'Twitter', color: '#C8E0F6', marketCap: '$40B', icon: SiTwitter, },
    { name: 'Netflix', color: '#FF6961', marketCap: '$150B', icon: SiNetflix, },
    { name: 'Verizon', color: '#F5DF8D', marketCap: '$200B', icon: SiVerizon, },
    { name: 'Oracle', color: '#FFC8C9', marketCap: '$200B', icon: SiOracle, },
    { name: 'Adobe', color: '#E0EBFD', marketCap: '$200B', icon: SiAdobe, },
    { name: 'Samsung', color: '#2fb7e5', marketCap: '$300B', icon: SiSamsung, },
    { name: 'Walmart', color: '#D291BC', marketCap: '$400B', icon: SiWalmart, },
    { name: 'Snapchat', color: '#F29496 ', marketCap: '$400B', icon: FaSnapchat, },
    { name: 'Mastercard', color: '#FEC8D8', marketCap: '$400B', icon: SiMastercard, },
    { name: 'Cisco', color: '#FFDFD3', marketCap: '$400B', icon: SiCisco, },
    { name: 'Visa', color: '#F7B600', marketCap: '$500B', icon: SiVisa, },
    { name: 'Tencent', color: '#D2F8B0', marketCap: '$500B', icon: SiTencentqq, },
    { name: 'Salesforce', color: '#D0D0E0', marketCap: '$500B', icon: FaSalesforce, },
    { name: 'Nvidia', color: '#E0BBE4', marketCap: '$500B', icon: SiNvidia, },
    { name: 'Meta', color: '#E6E6FA', marketCap: '$500B', icon: FaFacebook }, 
    { name: 'Tesla', color: '#FFA07A', marketCap: '$1.2T', icon: SiTesla, },
    { name: 'Google', color: '#90EE90', marketCap: '$1.5T', icon: FaGoogle },  
    { name: 'Amazon', color: '#FFC1C1', marketCap: '$1.6T', icon: FaAmazon,}, 
    { name: 'Microsoft', color: '#F0E68C', marketCap: '$2.2T',  icon: FaMicrosoft}, 
    { name: 'Apple', color: '#ADD8E6', marketCap: '$2.3T', icon: FaApple},
]

// Testing sort filter functions (Sort from A-Z, Sort from Z-A, Sort from Highest to lowest Market Cap, Sort from Lowest to Highest Market Cap)
describe('sortOptions', () => {
    test('Function should sort Company names from A to Z.', () => {
      const result = sortAtoZ(companies);
      expect(result).toEqual(testSortAtoZ);
    });
  
    test('Function should sort Company names from Z to A.', () => {
      const result = sortZtoA(companies);
      expect(result).toEqual(testSortZtoA);
    });
  
    test('Function should sort Company Market Cap from highest to lowest.', () => {
      const result = HighestToLowestMarketCap(companies);
      expect(result).toEqual(testHighestToLowest);
    });
  
    test('Function should sort Company Market Cap from lowest to highest.', () => {
      const result = LowestToHighestMarketCap(companies);
      expect(result).toEqual(testLowestToHighest);
    });
  });




