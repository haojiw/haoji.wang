export type Project = {
  title: string;
  description: string;
  slug: string;
  github: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Sifu Wellness Chatbot',
    description: 'A customized GPT that gives you life advice, like Master Oogway',
    slug: 'sifu',
    github: 'https://chatgpt.com/g/g-679a7291fe388191962bc6f2080a0e00-sifu',
  },
  {
    title: 'Gmail Inbox Summarizer',
    description: 'An AI-powered Gmail add-on that summarizes your daily emails',
    slug: 'gmail-summarizer',
    github: 'https://github.com/onehodge/email-summary',
  },
  {
    title: 'WhatsBruin Website',
    description: 'Tell us what you like to eat at UCLA, and get notified when they are served!',
    slug: 'whats-bruin',
    github: 'https://www.whats-bruin.com/',
  },
  {
    title: 'Sports Analytics Articles',
    description: 'Home Advantage in the UCL, and Finding the next Sergio Busquets',
    slug: 'bsa-articles',
    github: 'https://github.com/onehodge/BSA-Data-Projects',
  },
  {
    title: 'Machine Learning Projects',
    description: 'Predicting World Happiness, AirBnb Superhosts, and Handwritten Digits',
    slug: 'ml-projects',
    github: 'https://github.com/onehodge/World-Happiness-Report-Predictor',
  },
  {
    title: 'Business Plan Competitions',
    description: 'My experiences with Uphealth, GoldenAge.AI, and Startup Labs UCLA',
    slug: 'business-plans',
    github: 'https://github.com/onehodge/Business-Plan-Competitions',
  },
]; 