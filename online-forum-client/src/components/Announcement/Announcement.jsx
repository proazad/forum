import { Link } from "react-router-dom";
import "./Announcement.css";

const Announcement = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <h1 className="text-xl font-bold">Announcement..</h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 justify-between">
        <div className="AnnouncementCard mt-5">
          <div className="content">
            <span className="title">Yeah, new blog publish</span>
            <div className="desc">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="actions">
              <div>
                <Link href="#" className="notnow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <button type="button" className="close">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="AnnouncementCard mt-5">
          <div className="content">
            <span className="title">Yeah, new blog publish</span>
            <div className="desc">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="actions">
              <div>
                <Link href="#" className="notnow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <button type="button" className="close">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="AnnouncementCard mt-5">
          <div className="content">
            <span className="title">Yeah, new blog publish</span>
            <div className="desc">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="actions">
              <div>
                <Link href="#" className="notnow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <button type="button" className="close">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="AnnouncementCard mt-5">
          <div className="content">
            <span className="title">Yeah, new blog publish</span>
            <div className="desc">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="actions">
              <div>
                <Link href="#" className="notnow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <button type="button" className="close">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
