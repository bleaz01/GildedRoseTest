
import React, { useState } from 'react';
import items from '../../data/fakeData';
import { Shop } from "../../helper/gilded_rose"
import { v4 as uuidv4 } from 'uuid';

//component
import Board from '../items/Board/board';
import FormChoiseData from '../items/forms/formChoiseDate';
import '../../test/test_gilded_rose'
//style
import './homeStyle.css'
import { createPortal } from 'react-dom';

const Home = () => {
  const [input, setInput] = useState(0);

  const days = Number(input);
  const gildedRose = new Shop(items);

  const itemInBoard = [];
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setInput(evt.target.day.value)

  }
  console.log(input)
  // let id = uuidv4();

  //   for (let day = 0; day < days; day++) {

  //     itemInBoard.push(
  //       <span key={id} className='board-title'>---------day:{day}--------</span>,
  //       items.map((item, index) => (
  //         <Board
  //           key={`${index}-${id}`}
  //           id={`${index}-${id}`}
  //           name={item.name}
  //           sellIn={item.sellIn}
  //           quality={item.quality}
  //         />
  //       ))
  //     )
  //     gildedRose.updateQuality()
  //   }
  //   return itemInBoard;

  const createBoard = (day, items) => {
    let itemInBoard = []
    itemInBoard.push(
      <span className='board-title'>---------day:{day}--------</span>,
      items.map(item => <Board name={item.name} sellIn={item.sellIn} quality={item.quality} />)
    )
    return itemInBoard
  }
  const handleBoard = () => {
    let board = []
    for (let day = 0; day < days; day++) {


      board.push(createBoard(day, items))
      // gildedRose.updateQuality()
    }

    return board
  }


  return (
    <div className="container">
      <header className="header">
        <p className="title-header">
          Welcome Gilded Rose
        </p>
      </header>
      <div className="form-style">
        <FormChoiseData handleSubmit={handleSubmit} />
      </div>
      <div className="board-style">
        {/* {input
          ? createBoard()
          : <p className='text'>
            Choose the number of days to find out if your product is still good
            </p>
        } */}
        {handleBoard()}
      </div>
    </div>
  );
}

export default Home;