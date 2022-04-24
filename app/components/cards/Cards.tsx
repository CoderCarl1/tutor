import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

type SetCardData = React.Dispatch<
  React.SetStateAction<{
    one: string;
    two: string;
    three: string;
    four: string;
  }>
>;
type CardData = {
  one: string;
  two: string;
  three: string;
  four: string;
};

const socket = io('http://localhost:4000/');

export default function CardsParent() {
  const [cardData, setCardData] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });

  useEffect(() => {
    socket.on('newCards', (data) => {
      setCardData(data);
    });
  }, [cardData]);

  return (
    <>
      <Cards cardData={cardData} />
      <SetCards cardData={cardData} setCardData={setCardData} />
    </>
  );
}

type Props = {
  setCardData: SetCardData;
  cardData: CardData;
};

// TODO: put this behind an AUTH wall

function SetCards({ setCardData, cardData }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const { one, two, three, four } = cardData;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log({ event });

    setCardData((prevData) =>
      Object.assign({}, prevData, { [event.target.name]: event.target.value }),
    );
  }

  function emitCards() {
    socket.emit('setCards', cardData);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('form event => :', event);
    emitCards();
  }
  return (
    <form ref={formRef} className="input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="one">one</label>
      <input
        type="text"
        name="one"
        id="one"
        value={one}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="two">two</label>
      <input
        type="text"
        name="two"
        id="two"
        value={two}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="three">three</label>
      <input
        type="text"
        name="three"
        id="three"
        value={three}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="four">four</label>
      <input
        type="text"
        name="four"
        id="four"
        value={four}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">submit</button>
    </form>
  );
}

function Cards({ cardData }: { cardData: CardData }) {
  const { one, two, three, four } = cardData;

  return (
    <div className="Cards__container">
      <div className="Card">{one && one}</div>
      <div className="Card">{two && two}</div>
      <div className="Card">{three && three}</div>
      <div className="Card">{four && four}</div>
    </div>
  );
}
