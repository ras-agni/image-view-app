function SearchBox({ input, setInput }) {
  function handleChange(event) {
    if (event.keyCode === 13) setInput(event.target.value);
  }

  function handleClick(event) {
    console.log(event);
    //setInput(event.target.dataset.value);
  }

  return (
    <div className="input-group mb-3 col-4">
      <input
        onKeyDown={handleChange}
        type="text"
        placeholder="Search the photo.."
        name="photo"
        className="form-control"
        defaultValue={input}
      />
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-secondary"
        data-input={input}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;
