import { useState, useEffect } from "react";
import Title from "./Title.js";
import Info from "./Info.js";
import Entry from "./Entry.js";
import List2 from "./List2.js";
import "./App.css";
import AddEvent from "./AddEvent.js";
import Nav from "./Nav.js";
import { fetchArticles } from "./articleService.js";
import Article from "./Article.js";

export default function App() {
  const [name, setName] = useState("")
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)

  useEffect(() => {
    {
      fetchArticles().then(setArticles)
    }
  })

  return (
    <div className="App">
      <header>
        <Title text="Ticketmaster Data" />
      </header>
      <section id="test1">
        <List2 />
      </section>
      <section id="test2">
        <AddEvent action={setName}/>
      </section>
      <section>
        <Nav articles={articles} setArticle={setArticle} />
        <Article article={article} />
      </section>
      {/*
      <section>
        <Entry action={setName} />
        <Info name={name} data={data} />
      </section>
      */}
    </div>
  );
}
