import { User } from '@prisma/client';
import { useMatches } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

type CardDataType = {
  one: string;
  two: string;
  three: string;
  four: string;
};

const ioHost = 'http://localhost:4000';
const socket = io(ioHost);

function useCards() {
  const [cardData, setCardData] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });

  function receiveCardData(cards: CardDataType) {
    setCardData({ ...cards });
  }
  function emitCardData() {
    socket.emit('setCards', { cards: cardData });
  }

  return { cardData, setCardData, receiveCardData, emitCardData };
}

export default function CardsParent() {
  const { receiveCardData, cardData } = useCards();

  useEffect(() => {
    socket.on('newCards', (cards: CardDataType) => {
      receiveCardData(cards);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <>
      <Cards cardData={cardData} />
      <CardControls />
    </>
  );
}

function CardControls() {
  const { user } = useMatches()[0].data as { user: User };
  const { emitCardData, cardData, setCardData } = useCards();
  const formRef = useRef<HTMLFormElement>(null);
  const { one, two, three, four } = cardData;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCardData((prevData) =>
      Object.assign({}, prevData, { [event.target.name]: event.target.value }),
    );
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!user.isAdmin)
      throw new Error('You must be an administrator to perform this function');
    emitCardData();
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

function Cards({ cardData }: { cardData: CardDataType }) {
  const { one, two, three, four } = cardData;

  return (
    <div className="cards__container">
      <div className="cards__container-card">1 - {one && one}</div>
      <div className="cards__container-card">2 - {two && two}</div>
      <div className="cards__container-card">3 - {three && three}</div>
      <div className="cards__container-card">4 - {four && four}</div>
    </div>
  );
}
