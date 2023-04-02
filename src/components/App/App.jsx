import React, { useEffect } from "react";
import Router from "../../Router";
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'domashka2';
  }, []);

  return (
    <main className="app">
      <div className="content">
        <Router />
      </div>
    </main>
  );
}

export default App;
