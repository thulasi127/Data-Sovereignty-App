import React from 'react';
import '../styles/components/AboutPage.css';
import PrivacyIndexScale from '../components/images/Privacy_Index_Scale.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Our App</h1>
      <p>Our Data Sovereignty app is designed to help users understand and visualize data privacy concerns in the Top 20 Tech Companies. Using a colour gradient visualization, the Privacy Index enables users to easily identify areas of concern related to data sovereignty. The legal concept of data sovereignty is critical in ensuring that data is protected in accordance with national laws and regulations, and our app empowers users to take control of their own data. For companies engaged in global commerce, navigating the complex and varying data protection laws across borders can be challenging, but our app provides valuable insights into potential risks and opportunities for improvement. By promoting greater transparency and accountability in data privacy practices, we aim to foster a safer and more secure digital ecosystem for all.</p>
      <h2>Functionality</h2>
      <h3>Privacy Index Scale:</h3>
      <img src={PrivacyIndexScale} alt="Privacy Index Scale (Very Poor to Very Strong)" />
      <h2>Our Team</h2>
      <ul>
        <li><strong>Sunveer Khunkhun</strong> - Developer</li>
        <li><strong>Thulasi Jothiravi</strong> - Developer</li>
        <li><strong>Harikrishan Singh</strong> - Developer</li>
        <li><strong>Yousif Jamal</strong> - Product Owner</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please don't hesitate to contact us at <a href="mailto:info@vizion.com">info@vizion.com</a>. We'd love to hear from you!</p>
    </div>
  );
}

export default AboutPage;
