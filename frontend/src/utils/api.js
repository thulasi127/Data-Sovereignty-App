import axios from "axios";
const schedule = require('node-schedule');

const companies = ['Amazon','Microsoft','Apple','Meta','Google','Tesla','Nvidia','Samsung','Walmart','Mastercard','Cisco','Snapchat','Tencent', 'Visa','Salesforce','Oracle','Adobe','Verizon','Netflix','Twitter'];

export default function getAPIBaseUrl() {
  let apiUrl = "";

  console.log(
    `REACT_APP_SERVER_BASE: ${process.env.REACT_APP_SERVER_BASE} + REACT_APP_SERVER_PORT: ${process.env.REACT_APP_SERVER_PORT}`
  );

  if (!process.env.REACT_APP_SERVER_BASE && !process.env.REACT_APP_SERVER_PORT) {
    apiUrl = "http://localhost:8080";
  } else {
    apiUrl = "/api";
  }

  return apiUrl;
}

// function that gets all of the tasks that are stored in the database
export async function getTasks() {
  let tasks = [];
  const BASE_URL = getAPIBaseUrl();

  try {
    const res = await fetch(`${BASE_URL}/tasks`);
    const data = await res.json();

    if (data.tasks) {
      tasks = data.tasks;
    }
  } catch (e) {
    console.error("Unable to fetch tasks");
    console.error(e);
  }

  return tasks;
}

// function that adds new tasks to the database
export function postNewTasks(text) {
  const BASE_URL = getAPIBaseUrl();

  return fetch(`${BASE_URL}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
}

// Refactor 3.1: Refactored function API call to use wrapper functions for News API data
async function fetchNewsApiData(keyPhrase, companyName) {
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_NEWS_API_URL,
    params: {q: keyPhrase, country: 'us', language: 'en', pageSize: '5'},
    headers: {
      'x-rapidapi-subscription': process.env.REACT_APP_NEWS_API_SUBSCRIPTION,
      'x-rapidapi-proxy-secret': process.env.REACT_APP_NEWS_API_PROXY_SECRET,
      'x-rapidapi-user': process.env.REACT_APP_NEWS_API_USER,
      'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_NEWS_API_HOST
    }
  };
  
  const res = await axios.request(options);
  return res.data.articles;
}

export async function getNewsApiPosts(keyPhrase, companyName) {
  try {
    const articles = await fetchNewsApiData(keyPhrase, companyName);

    const BASE_URL = getAPIBaseUrl();
    return fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ articles, companyName }),
    });
  } catch (e) {
    console.error("Unable to fetch posts");
    return -1;
  }
}

export async function getPosts(companyName, keyPhrase) {
  let posts = [];
  const BASE_URL = getAPIBaseUrl();

  try {
    const res = await fetch(`${BASE_URL}/getPosts?companyName=${companyName}`);
    const data = await res.json();
    if (data.posts.length === 0) {
      getNewsApiPosts(keyPhrase, companyName).then((posts) => console.log(posts))
      const resp = await fetch(`${BASE_URL}/getPosts?companyName=${companyName}`);
      const data1 = await resp.json();
      // blogs.push(data1.blogs)
      posts = data1.posts[0].articles;
      return posts;
    }

    if (data.posts) {
      posts = data.posts[0].articles;
    }
  } catch (e) {
    // console.error("Unable to fetch posts");
    return -1;
  }

  return posts;
}

// Variable to make code more readable
const BASE_URL = getAPIBaseUrl();

// Refactor 3.2: Refactored function API call to use wrapper functions for Medium Blogs API data
export async function getMediumApiBlogs(keyPhrase, companyName){
  
  const options = 
  {
    method: 'GET',
    url: 'https://medium2.p.rapidapi.com/search/articles',
    params: {query: `${keyPhrase}`},
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_MEDIUM_API_SECRET_KEY}`, 
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
      }
    };

  const res = await axios.request(options);
  console.log(res.data.articles[0]);
  const article = res.data.articles[0];

  const article_options = {
    method: 'GET', 
    url: `https://medium2.p.rapidapi.com/article/${article}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_MEDIUM_API_SECRET_KEY}`,
      'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
      } 
    }; 

    try {
      const response = await axios.request(article_options);
      // console.log(response.data);
      // const BASE_URL = getAPIBaseUrl();
  
      return await fetch(`${BASE_URL}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogs: response.data, companyName: companyName}),
      });
  
    } catch (e) {
      console.error("Unable to fetch posts");
      return -1;
    }
}

  export async function getBlogs(companyName, keyPhrase) {
    let blogs = [];
    const BASE_URL = getAPIBaseUrl();
  
    try {
      const res = await fetch(`${BASE_URL}/getBlogs?companyName=${companyName}`);
      const data = await res.json();
      
      if (data.blogs.length === 0) {
        getMediumApiBlogs(keyPhrase, companyName).then((blogs) => console.log(blogs))
        const resp = await fetch(`${BASE_URL}/getBlogs?companyName=${companyName}`);
        const data1 = await resp.json();
        // blogs.push(data1.blogs)
        return data1.blogs;
      }
      if (data.blogs) {
        // blogs.push(data.blogs);
        return data.blogs;
      }
    } catch (e) {
      console.error("Unable to fetch posts");
      return -1;
    }
  
    return blogs;
  }

  export async function getSentiment(title)
  {
    const options = {
      method: 'GET',
      url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/',
      params: {text: title},
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_SENTIMENT_API_KEY}`,
        'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
      }
    };
    const res = await axios.request(options);
    console.log(res.data.score)
    return res.data.score
  }

  async function Scheduler(){

    console.log("Scheduler Running...");

    // adds new blog posts to the database every 2 weeks
    companies.forEach((company) => {
      let keyPhrase = `${company} user privacy`;
      getMediumApiBlogs(company, keyPhrase);
    })
  }

  schedule.scheduleJob('0 0 * * 0' , Scheduler);