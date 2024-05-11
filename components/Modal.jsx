import { useId, useState } from "react";
import Comment from "./Comment";
import DropdownWithImages from "./DropdownWithImages";
import Dropdown from "./Dropdown";
import DateDropdown from "./DateDropdown";

const AssignedToOptions = [
  { value: "Charles", label: "Charles", image: "Charles.jpg" },
  { value: "Jane Smith", label: "Jane Smith", image: "Jane Smith.jpg" },
];

function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 5);
  return timestamp + randomStr;
}

function Modal() {
  const initialState = [
    {
      id: generateUniqueId(),
      name: "Jane Smith",
      comment:
        "Thanks for assigning me on the task. We’ll get the details ironed out.",
    },
    {
      id: generateUniqueId(),
      name: "Jane Smith",
      comment:
        "Thanks for assigning me on the task. We’ll get the details ironed out.",
    },
    {
      id: generateUniqueId(),
      name: "Charles",
      comment: "Thanks for assigning me on the task.",
    },
  ];

  const [taskAssignedTo, setTaskAssignedTo] = useState("Jane Smith");
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState(initialState);

  function submitButtonHandler() {
    if (comment === "") return;
    setAllComments((comments) => [
      ...comments,
      { id: generateUniqueId(), name: taskAssignedTo, comment: comment },
    ]);
    setComment("");
  }

  return (
    <>
      <div className="icons-container">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.11914 10.8359C6.79688 11.1582 6.29883 11.1582 5.97656 10.8359L4.10156 8.96094C3.7793 8.63867 3.7793 8.14062 4.10156 7.81836C4.42383 7.49609 4.92188 7.49609 5.24414 7.81836L6.5625 9.10742L9.72656 5.94336C10.0488 5.62109 10.5469 5.62109 10.8691 5.94336C11.1914 6.26562 11.1914 6.76367 10.8691 7.08594L7.11914 10.8359ZM15 8.375C15 12.5352 11.6309 15.875 7.5 15.875C3.33984 15.875 0 12.5352 0 8.375C0 4.24414 3.33984 0.875 7.5 0.875C11.6309 0.875 15 4.24414 15 8.375ZM7.5 2.28125C4.13086 2.28125 1.40625 5.03516 1.40625 8.375C1.40625 11.7441 4.13086 14.4688 7.5 14.4688C10.8398 14.4688 13.5938 11.7441 13.5938 8.375C13.5938 5.03516 10.8398 2.28125 7.5 2.28125Z"
            fill="#F28482"
          />
        </svg>

        <div className="inner-icons-container">
          <svg
            width="19"
            height="16"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.36398 1.3743C3.46164 1.15945 3.67648 1.02274 3.91086 1.02274H6.27414C6.50851 1.02274 6.72336 1.15945 6.82101 1.3743L6.97726 1.64774H8.85226C9.1843 1.64774 9.47726 1.9407 9.47726 2.27274C9.47726 2.6243 9.1843 2.89774 8.85226 2.89774H1.35226C1.0007 2.89774 0.727264 2.6243 0.727264 2.27274C0.727264 1.9407 1.0007 1.64774 1.35226 1.64774H3.22726L3.36398 1.3743ZM1.33273 3.52274H8.85226V9.77274C8.85226 10.4759 8.28586 11.0227 7.60226 11.0227H2.58273C1.89914 11.0227 1.33273 10.4759 1.33273 9.77274V3.52274ZM2.89523 5.08524V9.46024C2.89523 9.63602 3.05148 9.77274 3.20773 9.77274C3.38351 9.77274 3.52023 9.63602 3.52023 9.46024V5.08524C3.52023 4.92899 3.38351 4.77274 3.20773 4.77274C3.05148 4.77274 2.89523 4.92899 2.89523 5.08524ZM4.77023 5.08524V9.46024C4.77023 9.63602 4.92648 9.77274 5.08273 9.77274C5.25851 9.77274 5.41476 9.63602 5.41476 9.46024V5.08524C5.41476 4.92899 5.25851 4.77274 5.08273 4.77274C4.92648 4.77274 4.77023 4.92899 4.77023 5.08524ZM6.66476 5.08524V9.46024C6.66476 9.63602 6.80148 9.77274 6.97726 9.77274C7.13351 9.77274 7.28976 9.63602 7.28976 9.46024V5.08524C7.28976 4.92899 7.13351 4.77274 6.97726 4.77274C6.80148 4.77274 6.66476 4.92899 6.66476 5.08524Z"
              fill="#F28482"
            />
          </svg>

          <svg
            width="10"
            height="16"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.50922 5.82031C6.76313 6.05469 6.76313 6.46484 6.50922 6.69922C6.39204 6.81641 6.23579 6.875 6.07954 6.875C5.90376 6.875 5.74751 6.81641 5.63032 6.69922L3.57954 4.64844L1.50922 6.69922C1.39204 6.81641 1.23579 6.875 1.07954 6.875C0.903755 6.875 0.747505 6.81641 0.630318 6.69922C0.376411 6.46484 0.376411 6.05469 0.630318 5.82031L2.6811 3.75L0.630318 1.69922C0.376411 1.46484 0.376411 1.05469 0.630318 0.820312C0.864693 0.566406 1.27485 0.566406 1.50922 0.820312L3.57954 2.87109L5.63032 0.820312C5.86469 0.566406 6.27485 0.566406 6.50922 0.820312C6.76313 1.05469 6.76313 1.46484 6.50922 1.69922L4.45844 3.76953L6.50922 5.82031Z"
              fill="#F28482"
            />
          </svg>
        </div>
      </div>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Task name"
          defaultValue={"Flower Arrangement"}
        />
        <DateDropdown />
      </div>
      <div className="assign-container">
        <div className="inner-assign-container">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.96875 9.50125C10.8105 9.50125 13.125 11.8157 13.125 14.6575C13.125 15.1848 12.6855 15.595 12.1875 15.595H0.9375C0.410156 15.595 0 15.1848 0 14.6575C0 11.8157 2.28516 9.50125 5.15625 9.50125H7.96875ZM1.40625 14.1888H11.6895C11.4551 12.343 9.87305 10.9075 7.96875 10.9075H5.15625C3.22266 10.9075 1.64062 12.343 1.40625 14.1888ZM6.5625 8.095C4.48242 8.095 2.8125 6.42508 2.8125 4.345C2.8125 2.29422 4.48242 0.595001 6.5625 0.595001C8.61328 0.595001 10.3125 2.29422 10.3125 4.345C10.3125 6.42508 8.61328 8.095 6.5625 8.095ZM6.5625 2.00125C5.24414 2.00125 4.21875 3.05594 4.21875 4.345C4.21875 5.66336 5.24414 6.68875 6.5625 6.68875C7.85156 6.68875 8.90625 5.66336 8.90625 4.345C8.90625 3.05594 7.85156 2.00125 6.5625 2.00125Z"
              fill="#F28482"
            />
          </svg>
          <p className="option-text">Assign to:</p>
        </div>
        <DropdownWithImages
          setTaskAssignedTo={setTaskAssignedTo}
          options={AssignedToOptions}
        />
        {/* <DateTimePicker /> */}
      </div>
      <div className="note-container">
        <div className="inner-note-container">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.25 0.532501C13.2754 0.532501 14.125 1.38211 14.125 2.4075V9.23367C14.125 9.96609 13.8027 10.6692 13.2754 11.1966L11.6348 12.8372C11.1074 13.3645 10.4043 13.6575 9.67188 13.6575H2.875C1.82031 13.6575 0.970703 12.8372 1 11.7825V2.4075C1 1.38211 1.82031 0.532501 2.875 0.532501H12.25ZM2.52344 12.1341C2.58203 12.1927 2.69922 12.2513 2.875 12.2513H8.5V9.67313C8.5 8.79422 9.23242 8.0325 10.1406 8.0325H12.7188V2.4075C12.7188 2.17313 12.4844 1.93875 12.25 1.93875H2.875C2.61133 1.93875 2.40625 2.17313 2.40625 2.4368V11.7825C2.40625 11.9583 2.46484 12.0755 2.52344 12.1341ZM10.668 11.8411L12.2793 10.2298C12.5137 9.99539 12.6309 9.73172 12.6895 9.43875H10.1406C9.99414 9.43875 9.90625 9.55594 9.90625 9.67313V12.2513C10.1699 12.1927 10.4336 12.0755 10.668 11.8411Z"
              fill="#F28482"
            />
          </svg>
          <p className="option-text">Note:</p>
        </div>
        <textarea
          className="note-textarea"
          cols="22"
          rows="2"
          //   charswidth="23"
          name="text_body"
          defaultValue={"09382049832 www.flowervendor.com"}
        ></textarea>
      </div>
      <div className="status-container">
        <div className="inner-status-container">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            fill="#F28482"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="option-text">Status:</p>
          <div className="status-dropdown-container">
            <Dropdown options={["Not Completed", "Completed"]} />
          </div>
        </div>
      </div>
      <div className="comments-container">
        <h2 className="comments-title">Comments</h2>
        {allComments.map((comment, index) => {
          if (comment.name === taskAssignedTo) {
            return (
              <Comment
                allComments={allComments}
                setAllComments={setAllComments}
                index={index}
                name={comment.name}
                commentInput={comment.comment}
                key={comment.id}
                id={comment.id}
              />
            );
          }
        })}
        <div className="comment-box-container">
          <div>
            <img
              className="comment-box-image"
              src={`${taskAssignedTo}.jpg`}
              // src={`Jane Smith.jpg`}
              alt={`${taskAssignedTo} Image`}
              height={25}
              width={25}
            />
          </div>
          <div className="comment-box-input-container">
            <input
              type="text"
              placeholder="Write comment..."
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button
              className="comment-send-button"
              onClick={submitButtonHandler}
            >
              <svg
                className=""
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9856 5.04034C12.2668 5.15753 12.4309 5.43878 12.4543 5.72003C12.4543 6.02472 12.2668 6.30597 11.9856 6.42316L1.48557 10.9232C1.39182 10.97 1.29807 10.9935 1.20432 10.9935C0.993378 10.9935 0.78244 10.8997 0.641815 10.7357C0.430878 10.5247 0.384003 10.1732 0.524628 9.89191L2.70432 5.72003L0.524628 1.57159C0.384003 1.29034 0.430878 0.938782 0.641815 0.704407C0.78244 0.540344 0.993378 0.470032 1.20432 0.470032C1.29807 0.470032 1.39182 0.493469 1.48557 0.540344L11.9856 5.04034ZM2.00119 1.99347L3.66525 5.15753H9.43088L2.00119 1.99347ZM3.66525 6.28253L2.00119 9.47003L9.43088 6.28253H3.66525Z"
                  fill="#FF6250"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
