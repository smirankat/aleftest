import React, { useEffect, useRef, useState } from "react";

import Card from "./components/card";
import logo from "./img/logo.png";
import like1 from "./img/like1.png";
import like2 from "./img/like2.png";

const items = [
  {
    id: 1,
    image: "photo1",
    discount: "-40%",
    like: like1,
    age: 5,
    price: 30000,
    buy: "Купить",
  },
  {
    id: 2,
    image: "photo2",
    discount: "",
    like: like2,
    age: 4,
    price: 40000,
    buy: "Продан",
  },
  {
    id: 3,
    image: "photo3",
    discount: "",
    like: like1,
    age: 3,
    price: 20000,
    buy: "Купить",
  },
  {
    id: 4,
    image: "photo1",
    discount: "",
    like: like1,
    age: 2,
    price: 25000,
    buy: "Купить",
  },
  {
    id: 5,
    image: "photo3",
    discount: "-40%",
    like: like1,
    age: 1,
    price: 30000,
    buy: "Купить",
  },
  {
    id: 6,
    image: "photo2",
    discount: "",
    like: like2,
    age: 1,
    price: 10000,
    buy: "Продан",
  },
];

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("age");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        price: "price",
        age: "age",
      };
      const sortProperty = types[type];
      const sorted = [...items].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  // scroll top
  const scrollRef = useRef();
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollRef.current.style.display = "block";
    } else {
      scrollRef.current.style.display = "none";
    }
  }

  //email validation
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const emailHandler = (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setEmailError("Email не может быть пустым");
      }
    } else {
      setEmailError("");
    }
  };
  const blurHandler = (e) => { e.target.name ==='email' && setEmailDirty(true)}


  return (
    <div className="app">
      <header className="header" id="home">
        <div className="header__wrapper">
          <div className="header__top">
            <div className="header__top_left">
              <img className="header__logo" src={logo} alt="logo" />
              <div className="header__nav">
                <a className="active" href="#main">
                  Main
                </a>
                <a href="#gallery">Gallery</a>
                <a href="#news">News</a>
                <a href="#profile">Profile</a>
              </div>
            </div>
            <div className="header__phone">
              <div className="header__phone-number">+544 3490 00000</div>
              <div className="header__phone-text">Звони скорее</div>
            </div>
          </div>
          <div className="title">Найдено 349 котов</div>
        </div>
      </header>
      <main>
        <div className="main__wrapper">
          <div className="main__top">
            <div className="main__sort">Сортировать по:</div>
            <button
              onClick={() => setSortType("price")}
              className={sortType === "price" ? "active" : ""}
            >
              Цене <span>&emsp;</span>
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0853 8.66685L14.7604 1.99166C14.9149 1.83727 15 1.63118 15 1.41142C15 1.19167 14.9149 0.985572 14.7604 0.831183L14.2689 0.339602C13.9487 0.0197263 13.4282 0.0197262 13.1084 0.339602L7.50311 5.94492L1.89157 0.333382C1.73706 0.178993 1.53109 0.0937494 1.31146 0.0937494C1.09158 0.0937494 0.885606 0.178993 0.730973 0.333382L0.239635 0.824963C0.0851249 0.979474 3.76698e-06 1.18545 3.75737e-06 1.4052C3.74777e-06 1.62496 0.0851249 1.83105 0.239635 1.98544L6.9208 8.66685C7.0758 8.82161 7.28275 8.90661 7.50275 8.90612C7.7236 8.90661 7.93042 8.82161 8.0853 8.66685Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              onClick={() => setSortType("age")}
              className={sortType === "age" ? "active" : ""}
            >
              Возрасту <span>&emsp;</span>
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0853 8.66685L14.7604 1.99166C14.9149 1.83727 15 1.63118 15 1.41142C15 1.19167 14.9149 0.985572 14.7604 0.831183L14.2689 0.339602C13.9487 0.0197263 13.4282 0.0197262 13.1084 0.339602L7.50311 5.94492L1.89157 0.333382C1.73706 0.178993 1.53109 0.0937494 1.31146 0.0937494C1.09158 0.0937494 0.885606 0.178993 0.730973 0.333382L0.239635 0.824963C0.0851249 0.979474 3.76698e-06 1.18545 3.75737e-06 1.4052C3.74777e-06 1.62496 0.0851249 1.83105 0.239635 1.98544L6.9208 8.66685C7.0758 8.82161 7.28275 8.90661 7.50275 8.90612C7.7236 8.90661 7.93042 8.82161 8.0853 8.66685Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="main__cards">
            {data.map((obj) => (
              <Card key={obj.id} {...obj} />
            ))}
          </div>
          <button className="show-more">Показать еще 20</button>
          <a href="#home">
            <div ref={scrollRef}>
              <div></div>
            </div>
          </a>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__title">Успей купить</div>
            <div className="footer__buttons">
              <div>
              {emailDirty && emailError && (
                    <div style={{ color: "red", fontSize: '14px', textAlign: 'center' }}>{emailError}</div>
                  )}
                <input
                  className="footer__email"
                  placeholder="Email"
                  onBlur={(e) => blurHandler(e)}
                  name="email"
                  onChange={(e) => emailHandler(e)}
                ></input>
                <div>
                </div>
              </div>
              <div>
              {emailDirty && emailError && (
                    <div style={{ height: "18px" }}></div>
                  )}
              <button className="footer__subscribe">Подписаться</button>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__subtitle">
              Подпишись и успей
              <br />
              словить все акции
            </div>
            <label className="container">
              Подписаться на новости
              <input type="checkbox" defaultChecked="defaultChecked" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
