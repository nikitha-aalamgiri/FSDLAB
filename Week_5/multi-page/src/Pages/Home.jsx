function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to Book N World</h1>

        <p>
          Discover stories, adventures and knowledge,
          all in one place.
        </p>

        <button>Explore Books</button>
      </div>

      <section className="featured">
        <h2>Why Book N World?</h2>

        <div className="features">
          <div>
            <h3> Wide Collection</h3>
            <p>Find books from different genres and authors.</p>
          </div>

          <div>
            <h3>For Every Reader</h3>
            <p>Something interesting for everyone.</p>
          </div>

          <div>
            <h3> Great Stories</h3>
            <p>Discover your next favourite book.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home