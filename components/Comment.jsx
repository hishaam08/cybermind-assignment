import { useState } from "react";

function Comment({
  name,
  commentInput,
  index,
  setAllComments,
  allComments,
  id,
}) {
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState(commentInput);
  const [editCommentBox, setEditCommentBox] = useState("");

  function handleCancelButton() {
    setEditMode(false);
  }

  function handleEditButton() {
    setEditCommentBox(comment);
    setEditMode(true);
  }

  function handleSubmitButton() {
    if (editCommentBox === "") {
      setEditMode(false);
      return;
    }

    setComment(editCommentBox);
    setEditMode(false);
  }

  function deleteCommentHandler() {
    const arr = allComments.filter((comment) => {
      return comment.id !== id;
    });

    setAllComments(arr);
  }

  return (
    <>
      <div className="comment">
        <div className="comment-name-image-container">
          <div>
            <img
              width={25}
              height={25}
              className="comment-image"
              src={`${name}.jpg`}
              alt="Jane Smith Image"
            />
          </div>
          <div>
            <p className="comment-name">{name}</p>
            {editMode ? (
              <div>
                <textarea
                  name=""
                  id=""
                  className="comment-edit-text"
                  value={editCommentBox}
                  onChange={(e) => setEditCommentBox(e.target.value)}
                >
                  {comment}
                </textarea>
              </div>
            ) : (
              <p className="comment-text">{comment}</p>
            )}
          </div>
        </div>

        {!editMode ? (
          <div className="comment-option-container">
            <button className="comment-button" onClick={handleEditButton}>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                fill="#F28482"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button className="comment-button" onClick={deleteCommentHandler}>
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
            </button>
          </div>
        ) : (
          <div
            className="comment-option-container"
            onClick={handleSubmitButton}
          >
            <button className="comment-button" onClick={handleCancelButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
                  fill="#F28482"
                />
              </svg>
            </button>
            <button className="comment-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"
                  fill="#F28482"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Comment;
