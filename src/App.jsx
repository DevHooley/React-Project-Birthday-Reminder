import { Component, useState } from "react"
import reactLogo from "./assets/react.svg"
import data from "./components/Data"
import List from "./components/List"
import "./tailwind.css"

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="flex-box mt-20 flex justify-center">
      <main className="grid-row grid">
        <section className="container">
          <h3 className="">
            {people.length} birthday today
          </h3>
          <List people={people} />
          <button
            className="btn"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
