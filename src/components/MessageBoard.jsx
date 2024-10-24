import { useState } from "react";

function MessageBoard() {

  const [messageBox, setMessageBox] = useState([]);
  const [messageText,setMessageText] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newMessageBox = [...messageBox,messageText];
    setMessageBox(newMessageBox);
    setMessageText('')
  }

  const deleteMessage = (index) => {
    const newMessageBox = [...messageBox]
    newMessageBox.splice(index,1);
    setMessageBox(newMessageBox)
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form onSubmit={handleSubmit}>
        <div class="message-input-container">
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
          </label>
          <button className="submit-message-button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div class="board">
        {messageBox.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button className="delete-button" onClick={()=>{deleteMessage(index)}}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
