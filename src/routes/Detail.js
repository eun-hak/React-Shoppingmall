import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Detail(props) {
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
  let [TimeClick, setTimeClick] = useState("");
  let { id } = useParams();

  let value = props.shoes.find((item) => item.id == id);
  console.log(value);
  return (
    <div className="container">
      {TimeClick == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange
            {...(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{value.title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export { Detail };
