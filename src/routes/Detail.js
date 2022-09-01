import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, Tab } from "react-bootstrap";
function Detail(props) {
  let [탭, 탭변경] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimeClick(false);
    }, 2000);
  });
  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);
  let [TimeClick, setTimeClick] = useState(true);
  let { id } = useParams();

  let value = props.shoes.find((item) => item.id == id);
  console.log(value);
  return (
    <div className="container">
      {TimeClick == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{value.title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(0);
              }}
              eventKey="link0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(1);
              }}
              eventKey="link1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(2);
              }}
              eventKey="link2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>{탭}</div>

        <TabContent 탭={탭} />
      </div>
    </div>
  );
}

// function DDetail() {
//   let [탭, 탭변경] = useState(0);
//   return <TabContent 탭={탭} />;
// }

function TabContent(props) {
  if (props.탭 === 0) {
    return <div>내용1</div>;
  } else if (props.탭 === 1) {
    return <div>내용2</div>;
  } else if (props.탭 === 2) {
    return <div>내용</div>;
  }
}

export { Detail };
