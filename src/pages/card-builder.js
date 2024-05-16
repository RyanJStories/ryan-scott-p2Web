import React from 'react';

const CardBuilderPage = () => {
  return (
    <div>
      <h1>Card Builder Page</h1>
      <form>
        <label htmlFor="nameOfCard">Name of Card:</label>
        <input type="text" id="nameOfCard" name="nameOfCard" required />
        <br />

        <label htmlFor="stats">Stats:</label>
        <input type="text" id="stats" name="stats" required />
        <br />

        <label htmlFor="cardDescription">Card Description:</label>
        <textarea id="cardDescription" name="cardDescription" rows="4" required />
        <br />

        <label htmlFor="imageForCard">Image for Card:</label>
        <input type="file" id="imageForCard" name="imageForCard" accept="image/*" required />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CardBuilderPage;
