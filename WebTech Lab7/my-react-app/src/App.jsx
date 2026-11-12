
function Header() {
  return <h1>Campus Card</h1>;
}

function Card() {
  return (
    <div className="card">
      <div className="avatar">MN</div>
      <h2>Maryam Nasir</h2>
      <p>Computer Science · Semester 1</p>
    </div>
  );
}

function Footer() {
  return (
    <p className="footer">GuTech · 2026</p>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
