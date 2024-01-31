import './App.css';

import { useState, useEffect } from 'react';
import { useGetArticlesQuery, useCreateArticleMutation } from './Services/API';

function Header() {

  let { data, isLoading } = useGetArticlesQuery()

  if (isLoading) {
    return <div></div>
  }

  return (
    <div>
      <h1>There is {data.length} article</h1>
      <hr />
    </div>
  )
}

function App() {

  let { data, isLoading } = useGetArticlesQuery()
  let [ createArticle ] = useCreateArticleMutation() 

  return (
    <div className="App">
      <header className="App-header">
       <Header />
       {
        !isLoading ?
          data.slice().reverse().map((article) => {
            return <div>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          }) :
          <span>Loading...</span>
       }
        {/* Créer 2 champs "Content" et "Title" lorsqu'on appuie sur Create */}
        {/* ça créer l'article avec le contenu des 2 champs */}
       <button onClick={() => {
        createArticle({ title: "Hello World Test", content: "Content of Hello World Test" })
       }}>
        Create Article
       </button>

      </header>
    </div>
  );
}

export default App;
