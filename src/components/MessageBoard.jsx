import { useState } from "react";

function MessageBoard() {
  const [inputMsg, setInputMsg] = useState("");
  const [listMsg, setListMsg] = useState([]);

  const addToMsgList = () => {
    const newMsgList = [...listMsg, inputMsg];
    setListMsg(newMsgList);
    setInputMsg("");
  };

  const removeFromMsgList = (index) => {
    const updatedMessageList = listMsg.filter((_, i) => i !== index);
    setListMsg(updatedMessageList);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMsg}
            onChange={(event) => {
              setInputMsg(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={addToMsgList}>
          Submit
        </button>
      </div>
      <div class="board">
                  {listMsg.map((message, index) => (
            <div className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  removeFromMsgList(index);
                }}
              >
                x
              </button>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default MessageBoard;
