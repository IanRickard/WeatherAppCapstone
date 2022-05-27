import React from "react";

export function Activity(props) {
  const { activity, removeActivity } = props;

  const handleRemoveClick = () => {
    removeActivity(activity.id);
  };

  return (
    <li className="Activity">
      <button
        aria-label="Remove activity"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{activity.text}</div>
    </li>
  );
}