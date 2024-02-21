import React from "react";

// Function that displays the companies relavant data (article titles) when they click on the company card
const CompanyInformation = ({ company }) => {
    // console.log(company.data)
    return (
      <div style={{ margin: "0 auto", marginTop: "40px", maxWidth: "1000px" }}>
        <h2 style={{paddingTop: "40px"}}><company.icon size="80"></company.icon></h2>
        <h3>Market Cap: {company.marketCap}</h3>
      {/* Style the container for the header and the article titles */}
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h3>Relevant Articles:</h3>
          {company.data &&
            company.data.map((data, i) => (
              <a key={i} href={data.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit",}}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    marginRight: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <h3>{data.publisher.name}</h3>
                    <h4>{data.published_date}</h4>
                    <p>
                      {"📰 "}{data.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
        <div style={{ width: "50%" }}>
          <h3>Relevant Blogs:</h3>
          {company.blog &&
            company.blog.map((data, i) => (
              <a key={i} href={data.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit",}}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    marginLeft: "20px",
                  }}
                >
                  <img src={data.image_url} alt="" style={{ maxWidth: "100%", marginBottom: "20px" }}/>
                  <div style={{ marginBottom: "20px" }}>
                    <h3>{data.title}</h3>
                    <p>
                      {"✍️ "}
                      {data.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
    );
};

export default CompanyInformation;