import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>How I downloaded React</h1>
      <p>
        As my most proficient web framework is React, I chose to use React for
        this problem
      </p>
      <ul>
        <li>
          I first downloaded Node.js from their website so that I could use npm,
          node package manager, for all the future downloads
        </li>
        <p></p>
        <li>
          I started by running the script{" "}
          <code>npm create vite@latest my-react-page</code>
        </li>
        <p className="subpoint">
          This let me use the Vite framework to build my React app under the
          title <code>my-react-page</code>
        </p>
        <li>
          Following this, using the CLI menu I chose <code>React</code>as the
          Framework, and then <code>Javascript</code> as the language
        </li>
        <p className="subpoint">
          Vite lets you use various frameworks like Svelte or Angular and one of
          TypeScript or JavaScript for the language
        </p>
        <li>
          Next, I ran the bash command <code> cd my-react-page</code> and{" "}
          <code>npm install</code>
        </li>
        <p className="subpoint">
          This changed my directory to be the newly created project and install
          all the dependencies
        </p>
        <li>
          Finally, I ran the command <code>npm run dev</code>
        </li>
        <p className="subpoint">
          This lets me view the development server so that I can view the
          changes in real time
        </p>
      </ul>
      <h1>How I created this page</h1>
      <ul>
        <li>
          I created this app by first deleting the default code inside the{" "}
          <code>App.jsx</code> file within the src directory
        </li>
        <p></p>
        <li>
          Then I added the text seen on screen using the basic HTML learned
          throughout the course
        </li>
        <p></p>
        <li>
          Styling was done using the <code>App.css</code> file
        </li>
      </ul>
      <h1>Difficulties and Solutions</h1>
      <ul>
        <li>
          Having been a while since starting a new project from scartch, there
          was difficulties in rememebring how to create a <br />
          new ReactJS project from scartch.
        </li>
        <li>
          However, I was able to utilize Vite's documentation to create the
          project properly
        </li>
        <hr />
        <li>
          Another struggle was trying to get Tailwind to work as that is my go
          to CSS framework.
        </li>
        <li>
          Although I was not able to solve it and get Tailwind to work, I was
          able to still style using the normal .css files
        </li>
      </ul>
    </div>
  );
}

export default App;
