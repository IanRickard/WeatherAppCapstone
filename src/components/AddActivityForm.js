import React, {useState} from 'react';
import generateId from '../data/utility';


export function AddActivityForm(props) {

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit= (event) => {
    event.preventDefault();

    const activity={
      id: generateId(),
      text: text
    };

    if(text.length > 0){
      props.addActivity(activity);
    }

    setText("");
  }

  return (
    <form className="AddActivityForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}