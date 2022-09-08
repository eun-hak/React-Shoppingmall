import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./img/bg.png";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./routes/Detail.js";
import axios from "axios";
import Cart from "./routes/Cart.js";

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">eun-hak</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <br></br>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url(" + bg + ")" }}
                ></div>
              </div>
              <div className="container">
                <div className="row">
                  {/* <Card shoes={shoes[0]} i={1}></Card>
            <Card shoes={shoes[1]} i={2}></Card>
            <Card shoes={shoes[2]} i={3}></Card> */}
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}

                  {/* {ThreeContents.map((a) => {
              return a;
            })} */}

                  {/* <Shoes1 />
            <Shoes2 />
            <Shoes3 /> */}
                </div>
              </div>

              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      let shoes2 = [...shoes];
                      shoes2.push(...결과.data);

                      setShoes(shoes2);

                      console.log(결과.data);
                    })
                    .catch(() => {
                      console.log("실패 ㅜ");
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <Detail shoes={shoes}></Detail>
            </>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<About />} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫주문 양배추즙</div>} />
          <Route path="two" element={<div>생일기념 쿠폰</div>} />
        </Route>

        <Route
          path="/cart"
          element={
            <div>
              <Cart></Cart>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트!</h4>
      <Outlet></Outlet>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
