import React from 'react';
import './Blog.css'
import question from '../../../public/All Images/question.jpg'

const Blog = () => {
  return (
    <div className="blog">
      <div className="container-img">
        <img src={question}/>
      </div>
      <div className="container-question">
        <h3>Q-1. What is custom hooks?</h3>
        <p>Custom React JS hooks are reusable functions. It can be to add special and unique functionality to the React applications. A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Example-useContext, useState, useEffect, useFetch.  Custom React JS hooks can help to write clear, concise and clean code for react app.</p>

        <h3>Q-2. What is useRef?</h3>           
        <p>useRef hook is used to persist data between render. It returns a JavaScript object with a current property that can be used to read or modify the current value. It does not cause re-render during the update of DOM.<br></br>
        Overall, the useRef() Hook provides a way to reference and manipulate DOM elements in React, as well as store any other mutable value that persists between renders.</p>

        <h3>Q-3.What is useMemo?</h3>
        <p>useMemo is  build–in hooks in react js. It is used to enhance the performance of application. useMemo takes two arguments one is function and another is dependencies. Function is render when the dependencies are changed.</p>

        <h3>Q-4.When we should use context API?</h3>
        <p>Usually, props is used to share the data among the components.  It becomes complex when data need to share in deeper components. To make it hassle free, Context API can play an important role . </p>
                                                      

      </div>
    </div>
  );
};

export default Blog;