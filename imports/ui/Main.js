import React, { useState } from 'react';

function Main() {
  //! Adding state to track data changes
  const [inputOne, setInputOne] = useState('5');
  const [inputTwo, setInputTwo] = useState('3');

  //! Creating an array
  var array = [];

  //! Filling an array with numbers from 1 to 100
  for (i = 1; i <= 100; i++) {
    array.push(i);
  }

  //! Below, after the inputs, there is a check for a string in the inputs,
  //! whether it is empty or not, after that, a check for division,
  //! if the check passes, then a certain text is displayed

  return (
    <main>
      <section>
        <form>
          First number:
          <input
            type="text"
            name="input1"
            value={inputOne}
            onChange={event => setInputOne(event.target.value)}
          />
          Second number
          <input
            type="text"
            name="input2"
            value={inputTwo}
            onChange={event => setInputTwo(event.target.value)}
          />
        </form>
      </section>
      <section>
        <ul>
          {array.map(function (num) {
            if (!inputOne == 0 && !inputTwo == 0) {
              if (num % inputOne == 0 && num % inputTwo == 0) {
                return <li>{num} - RobotICT</li>;
              } else if (num % inputOne == 0) {
                return <li>{num} - ICT</li>;
              } else if (num % inputTwo == 0) {
                return <li>{num} - Robot</li>;
              } else return <li>{num}</li>;
            } else {
              return <li>Введите число</li>;
            }
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
