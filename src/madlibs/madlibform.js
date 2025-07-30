/**
 * MadlibForm Component
 * ---------------------
 * A controlled form for collecting user input for the Madlibs game.
 *
 * Responsibilities:
 * - Maintains local state for four input fields: noun, verb, adjective, place.
 * - Updates state on every keystroke (controlled inputs).
 * - Calls a parent-provided `handleSubmit` function with the current form data.
 * - Resets the form to initial state after submission.
 *
 * Props:
 * - handleSubmit: function(formData)
 *    -> Provided by parent (Madlib.js)
 *    -> Called on form submission with an object:
 *       { noun: string, verb: string, adjective: string, place: string }
 */

import React, { useState } from "react";

//Madlib Form function
function MadlibForm({ handleSubmit }) {
    // Initial form state for all fields
  const INITIAL_STATE = {
    noun: "",
    verb: "",
    adjective: "",
    place: ""
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  /**
   * handleChange
   * Updates the specific form field in state as the user types.
   *
   * @param {Event} evt - The input change event
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /**
   * submitForm
   * Prevents default form submission, passes data up to parent,
   * and resets the form fields to their initial state.
   *
   * @param {Event} evt - The form submission event
   */
  function submitForm(evt) {
    evt.preventDefault();
    handleSubmit(formData);
    setFormData(INITIAL_STATE);
  }

  // Madlibs form fields: Render controlled inputs and submit button
  return (
    <form onSubmit={submitForm}>

      <label htmlFor="noun">Noun:</label>
      <input name="noun" id="noun" value={formData.noun} onChange={handleChange} />

      <label htmlFor="verb">Verb:</label>
      <input name="verb" id="verb" value={formData.verb} onChange={handleChange} />

      <label htmlFor="adjective">Adjective:</label>
      <input name="adjective" id="adjective" value={formData.adjective} onChange={handleChange} />

      <label htmlFor="place">Place:</label>
      <input name="place" id="place" value={formData.place} onChange={handleChange} />

      <button type="submit">Generate Story</button>
    </form>
  );
}

export default MadlibForm;
