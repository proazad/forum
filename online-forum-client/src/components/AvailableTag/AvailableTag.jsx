import "./AvailableTag.css";

const AvailableTag = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-xl font-bold">Available tags..</h1>
      {/* search by tag card  */}
      <div className="grid grid-cols-2 gap-5 justify-items-center lg:grid-cols-6 md:grid-cols-4 mt-5">
        <div className="tagCard">
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Web Development</p>
            </div>
          </div>
        </div>
        <div className="tagCard">
          <div className="textBox">
            <div className="textContent">
              <p className="h1">React</p>
            </div>
          </div>
        </div>
        <div className="tagCard">
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Python</p>
            </div>
          </div>
        </div>
        <div className="tagCard">
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Mobile App Development</p>
            </div>
          </div>
        </div>
        <div className="tagCard">
          <div className="textBox">
            <div className="textContent">
              <p className="h1">JavaScript</p>
            </div>
          </div>
        </div>
        <div className="tagCard">
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Data Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTag;
