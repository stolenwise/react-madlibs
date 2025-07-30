/**
 * Story Component
 * ----------------
 * Displays a completed Madlib story using the words provided by the user.
 * Also provides a button to restart the game.
 *
 * Props:
 * - words: Object containing user-submitted words:
 *     {
 *       noun: string,
 *       verb: string,
 *       adjective: string,
 *       place: string
 *     }
 * - restartGame: Function to reset the game state (provided by parent Madlib.js).
 */

import React from "react";

function Story({ words, restartGame }) {
   // Destructure the words object for easier access
  const { noun, verb, adjective, place } = words;

  return (
    <div>
      <p>
        Once upon a time, a {adjective} {noun} decided to {verb} in the {place}.
      </p>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
}

export default Story;
