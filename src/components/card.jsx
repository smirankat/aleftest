import React, { useRef, useState } from "react";
import cn from "classnames";

function Card({ image, discount, like, age, price, buy }) {
  const [condition, setCondition] = useState(false);

  const popupRef = useRef()
  const handleOutsideClick = (event, composedPath) => {
    const path = event.path || (event.composedPath && event.composedPath()) || composedPath(event.target)
    if (!path.includes(popupRef.current)) {
        setCondition(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="card">
      <div
        className={cn("card__top", {
          card__top_bg1: image === "photo1",
          card__top_bg2: image === "photo2",
          card__top_bg3: image === "photo3",
        })}
      >
        <div className={discount && "card__discount"}>{discount}</div>
        <div ref={popupRef} onClick={() => setCondition(!condition)} className="popup">
          <img className="card__like" src={like} alt="like" />
          <span className={`popuptext ${condition ? "show" : ""}`}>
            Добавлено в избранное!
          </span>
        </div>
      </div>
      <div className="card__name">Кот полосатый</div>
      <div className="card__spec">
        <div className="card__vl"></div>
        <div>
          Коричневый
          <br />
          окрас
        </div>
        <div>
          <span>
            <b>{age} мес.</b>
          </span>
          <br />
          Возраст
        </div>
        <div>
          <span>
            <b>4</b>
          </span>
          <br />
          Кол-во лап
        </div>
      </div>
      <div className="card__price">{price} руб.</div>
      <button
        className={cn("card__buy", {
          "card__buy-buy": buy === "Купить",
          "card__buy-sold": buy === "Продан",
        })}
      >
        {buy}
      </button>
    </div>
  );
}

export default Card;
