import "./SearchComponent.css";

const SearchComponent = () => {
  return (
    <div>
      <div className="InputContainer">
        <input
          placeholder="Search by tag..."
          id="input"
          className="input"
          name="text"
          type="text"
        />
        <button className="bg-pink-200 px-5 searchBTN ">Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
