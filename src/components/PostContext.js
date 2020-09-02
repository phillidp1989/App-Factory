import React, { useState, createContext } from 'react';

const posts = [
  {
    title: 'BURGER APP',
    tech: 'NodeJS - JS - Express - Handlebars - ORM - MySQL - Heroku',
    description:
      'Burger App is an application that allows one to order a specific burger and then devour it',
    details:
      'More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More'
  },
  {
    title: 'EMPLOYEE SUMMARY',
    tech: 'NodeJS - JS',
    description: "A CLI webapp to build a team's organization chart",
    details:
      'More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More'
  },
  {
    title: 'THE MUSIC APP',
    tech: 'jQuery - LastFM & audd.io API - Materialize',
    description:
      'A webapp to find every information you need on your favourite music',
    details:
      'More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More'
  },
  {
    title: 'WEATHER APP',
    tech: 'HTML - CSS - JavaScript - OpenWeather API',
    description: 'A webapp to quickly check the weather anywhere on the planet',
    details:
      'More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More About this Idea More About this Idea - More About this Idea- More'
  }
];

export const PostContext = createContext();

export default ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <PostContext.Provider value={{ posts, setPosts }}>
        {children}
      </PostContext.Provider>
    </div>
  );
};
