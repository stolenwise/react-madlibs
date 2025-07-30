/**
 * Madlib Component
 * -----------------
 * This is the main game container component for the Madlibs app.
 *
 * Responsibilities:
 * - Holds state for the user's input words.
 * - Handles form submission and reset functionality.
 * - Conditionally renders either the input form or the completed story.
 *
 * Props: None (state is managed internally)
 *
 * Children:
 * - MadlibForm: Form for collecting user inputs (noun, verb, adjective, place).
 * - Story: Displays a completed story using the submitted words.
 */

import React, { useState } from "react";
import MadlibForm from "./madlibform";
import Story from "./story";

function Madlib() {
  const [words, setWords] = useState(null);

  //handleSubmit: called by MadlibForm on form submit - Updates the state with the words provided by the user
  function handleSubmit(formData) {
    setWords(formData);
  }

  //restartGame: resets state to show the form again
  function restartGame() {
    setWords(null);
  }


  return (
    <div>
      {words ? (
        <Story words={words} restartGame={restartGame} />
      ) : (
        <MadlibForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default Madlib;
