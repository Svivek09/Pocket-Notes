import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeItem, setActiveItem] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [itemNotes, setItemNotes] = useState({});
  const [isLeftSideHidden, setIsLeftSideHidden] = useState(false);
  const [isRightSideVisible, setIsRightSideVisible] = useState(false);

  const colorButtons = [
    { id: 'purpleBtn', color: '#B38BFA' },
    { id: 'pinkBtn', color: '#FF79F2' },
    { id: 'skyblueBtn', color: '#43E6FC' },
    { id: 'orangeBtn', color: '#F19576' },
    { id: 'blueBtn', color: '#0047FF' },
    { id: 'violetBtn', color: '#6691FF' },
  ];

  const formatDate = () => {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date().toLocaleString("en-GB", options);
  };

  

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };


const handleAddText = () => {
  if (textInput.trim()) {
    const timestamp = formatDate(); 
    const noteWithTime = {
      text: textInput, 
      timestamp: timestamp, 
    };

   
    setItemNotes((prevNotes) => {
      const updatedNotes = {
        ...prevNotes,
        [activeItem.name]: [
          ...(prevNotes[activeItem.name] || []), 
          noteWithTime, 
        ],
      };

    
      localStorage.setItem('itemNotes', JSON.stringify(updatedNotes));

      return updatedNotes;
    });

    setTextInput(''); 
  }
};



  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setShowChat(true);
    if (window.innerWidth <= 768) {
      setIsLeftSideHidden(true);
      setIsRightSideVisible(true);
    }
  };

  const handleBackBtn = () => {
    setShowChat(false);
    setIsRightSideVisible(false);
    setIsLeftSideHidden(false);
  };

  const handleOkClick = () => {
    if (name.trim().split(' ').length >= 2) {
      const nameParts = name.split(' ');
      const circleContent = nameParts
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('');

      const newItem = { name, circleContent, color: selectedColor };
      setItems((prevItems) => {
        const updatedItems = [...prevItems, newItem];
        localStorage.setItem('items', JSON.stringify(updatedItems));
        return updatedItems;
      });

      setName('');
      setSelectedColor('');
      setIsModalOpen(false);
    } else {
      const circleContent = name
        .split(' ')
        .map((word) => word[0].toUpperCase())
        .join('');

      const newItem = { name, circleContent, color: selectedColor };
      setItems((prevItems) => {
        const updatedItems = [...prevItems, newItem];
        localStorage.setItem('items', JSON.stringify(updatedItems));
        return updatedItems;
      });

      setName('');
      setSelectedColor('');
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
  const savedNotes = localStorage.getItem('itemNotes');
  if (savedNotes) {
    setItemNotes(JSON.parse(savedNotes)); 
  }
}, []);


  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const storedNotes = JSON.parse(localStorage.getItem('itemNotes')) || {};
    setItems(storedItems);
    setItemNotes(storedNotes);
  }, []);

  return (
    <ErrorBoundary>
        <div className="main-pag" id="titles" style={{ display: "flex", height: "100vh" }}>
      <div className={`leftSide ${isLeftSideHidden ? "hidden" : ""}`}>
        <h1
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '2.5rem',
            position: 'sticky',
            top: 0,
            letterSpacing: 1,
            fontWeight: "bold",
            backgroundColor: 'white',
            width: '100%',
            height: 75,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 30,
            overflowX: 'none',
          }}
        >
          Pocket Notes
        </h1>
        <div className="noteDiv" style={{ marginTop: 30 }}>
          {items.map((item, index) => {
            return (
              <div
                className="noteItem"
                key={index}
                onClick={() => handleItemClick(item)}
                style={{
                  display: 'flex',
                  height: 90,
                  paddingLeft: 80,
                  backgroundColor: activeItem && activeItem.name === item.name ? '#CCCCCC' : '',
                  width: 'auto',
                  borderRadius: 10,
                }}
              >
                <div
                  onClick={() => handleItemClick(item)}
                  className="profileName"
                  style={{ backgroundColor: item.color }}
                >
                  {item.circleContent}
                </div>
                <div onClick={() => handleItemClick(item)} className="noteTitle" style={{ color: 'black', fontWeight: 'bolder' }}>
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <button
          id="addBtn"
          onClick={handleAddClick}
          style={{
            fontSize: 65,
            paddingBottom: 10,
            color: 'white',
            backgroundColor: '#16008B',
            width: '65px',
            height: '65px',
            borderRadius: '50%',
            bottom: 30,
            position: 'fixed',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          +
        </button>
      </div>
      {/* This is Right Side */}
      {!showChat ? (
        <div className="rightSide" id="rightCompo" style={{ backgroundColor: "#DAE5F5" }}>
          <img src="/image.png" alt="notes" style={{ width: '40vw', height: '40vh', marginLeft: 330, marginTop: '12%' }} />
          <h1 style={{ fontFamily: 'Roboto', letterSpacing: 1.5, marginLeft: 500, fontSize: '3rem' }}>Pocket Notes</h1>
          <p style={{ marginLeft: 350, fontSize: 23, letterSpacing: '2%', lineHeight: 1.3, paddingTop: 10, color: '#292929' }}>
            Send and receive messages without keeping your phone online. <br />Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
          <div style={{ marginLeft: 550, marginTop: 270 }}>
            <img src="/Vector.png" alt="" />
            <span style={{ paddingLeft: 10, paddingBottom: 20, fontSize: 26 }}>end-to-end encrypted</span>
          </div>
        </div>
      ) : (
        <div
          id="chat"
          className={`rightSide ${isRightSideVisible ? "visible" : ""}`}
          style={{ backgroundColor: "#DAE5F5", display: "flex", flexDirection: "column" }}
        >
          <header>
            <div
              style={{
                display: "flex",
                backgroundColor: "#001F8B",
                height: 90,
                position: "fixed",
                width: "100%",
                zIndex: 1000,
              }}
            >
              <i
                className="bi bi-arrow-left"
                style={{
                  marginLeft: 10,
                  color: 'white',
                  fontSize: 30,
                  paddingTop: 27,
                  fontWeight: 'bolder',
                  paddingRight: 10,
                }}
                onClick={handleBackBtn}
              ></i>
              <div className="profileName" style={{ backgroundColor: activeItem.color }}>
                {activeItem.circleContent}
              </div>
              <div className="noteTitle">{activeItem.name}</div>
            </div>
          </header>

          <div className="notes-div" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Notes Section */}
            <div className="notes-section" style={{ flex: 1, marginTop: '100px', padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
  {activeItem && itemNotes[activeItem.name] && itemNotes[activeItem.name].length > 0 ? (
    <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
      {itemNotes[activeItem.name].map((note, noteIndex) => (
        <li
          key={noteIndex}
          className="note-list"
          style={{
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '15px',
            backgroundColor: 'white',
          }}
        >
          <div>{note.text}</div> 
          <div
          className="timestamp-div"
            style={{
              fontSize: '0.9rem',
              color: '#787878', 
              marginTop: '5px',
              textWrap:'nowrap' 
            }}
          >
            {note.timestamp} 
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No notes yet!</p>
  )}
</div>


            {/* Text Area at the Bottom */}
            <div
              className="text-area-container"
              style={{
                position: 'fixed',
                bottom: 0,
                zIndex: 1000,
                backgroundColor: '#001F8B',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                padding: '10px 20px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <textarea
                placeholder="Here’s the sample text for sample work"
                value={textInput}
                onChange={handleTextInputChange}
                style={{
                  width: '100%',
                  marginLeft: 13,
                  height: '15vh',
                  resize: 'none',
                  fontSize: '1.2rem',
                  padding: '15px',
                  borderRadius: '10px',
                }}
              ></textarea>

              <button
                onClick={() => handleAddText(activeItem.name)}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  position: "absolute",
                  right: 30,
                  bottom: 30,
                }}
              >
                <img src="/enterBtn.png" alt="Save" />
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ textAlign: 'left', padding: 20 }} className="modal-title">
              Create New group
            </h2>
            <div style={{ display: 'flex' }}>
              <h2 style={{ textAlign: 'left', padding: 20 }}>
                <label htmlFor="" className="modal-label">Group Name</label>
              </h2>
              <input
                type="text"
                id="nameInput"
                placeholder="Enter group name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ border: '1px solid gray' }}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ textAlign: 'left', padding: 20 }} className="modal-color-label">
                Choose colour
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {colorButtons.map((button) => (
                    <button
                      key={button.id}
                      className="colorBtn"
                      id={button.id}
                      style={{
                        backgroundColor: button.color,
                        marginRight: '5px',
                        cursor: 'pointer',
                        opacity: selectedColor === button.color ? 1 : 0.7,
                      }}
                      onClick={() => setSelectedColor(button.color)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button
              id="okBtn"
              onClick={handleOkClick}
              disabled={!selectedColor}
              style={{ backgroundColor: '#0047FF', color: 'white' }}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
    </ErrorBoundary>
  );
}

export default MainPage;
