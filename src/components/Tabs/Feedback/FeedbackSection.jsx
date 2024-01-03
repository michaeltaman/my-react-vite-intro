import { useState, useRef, useEffect } from "react";
import Button from "../../Button/Button";
import CustomAlert from "../CustomAlert";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3 style={{ marginTop: "0.5rem" }}>Type and press Enter: {show && input.current.value}</h3>
      <input
        type="text"
        ref={input}
        onChange={() => setShow(false)}
        onKeyDown={handleKeyDown}
        className="control"
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertPosition, setAlertPosition] = useState({ x: 100, y: 100 });

  function handleNameChange(event) {
    const newName = event.target.value;
    const newHasError = newName.trim().length === 0;

    setForm({
      ...form,
      name: newName,
      hasError: newHasError,
    });
  }

  function handleReasonError() {
    const newHasError = form.name.trim().length === 0;
    setForm((prev) => ({
      ...prev,
      hasError: newHasError,
    }));
  }

  function toggleError() {
    setForm((prev) => ({ ...prev, hasError: !prev.hasError }));
  }

  //--------------------------For mobile version----------------------------------------------
  useEffect(() => {
    const handleResize = () => {
      const position = calculateCAPosition();
      // update the element's position...
      setAlertPosition(position);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateCAPosition = () => {
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;
    const centerX = isMobile && isPortrait ? window.innerWidth / 2 - 115 : window.innerWidth / 2 - 100;
    const centerY = window.innerHeight / 2;
    return { x: centerX, y: centerY };
  };
  //---------------------------------------------------------------------------------

const handleButtonClick = (event) => {
    event.preventDefault();
    if (!form.hasError) {
        setShowAlert(true);
        const center = calculateCAPosition();
        setAlertPosition(center);
    }
};

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleDocumentClick = (e) => {
    if (showAlert && e.target !== document.getElementById("custom-alert")) {
      handleAlertClose();
    }
  };

  if (showAlert) {
    document.addEventListener("click", handleDocumentClick);
  } else {
    document.removeEventListener("click", handleDocumentClick);
  }

  return (
    <section>
      <h3>Feedback</h3>

      <Button onClick={toggleError}>ToggleError</Button>

      <form style={{ marginBottom: "1rem" }} onSubmit={handleButtonClick}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Reason of application:</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
          onFocus={handleReasonError}
        >
          <option value="error">Error</option>
          <option value="help">Requires help</option>
          <option value="suggest">Suggest</option>
        </select>

        <pre>{JSON.stringify(form, null, 2)}</pre>
        <br />
        <Button
          disabled={form.hasError}
          isActive={!form.hasError}
          onMouseOver={handleReasonError}
          type="submit"
        >
          Submit
        </Button>
        {showAlert && (
            <CustomAlert
              message="Form submitted!"
              x={alertPosition.x}
              y={alertPosition.y}
              onClose={handleAlertClose} // Pass the onClose function here
              style={{
                width: "200px", // Set the desired width
                height: "70px", // Set the desired height
                // Add any other desired styles here
              }}
            />
        )}
      </form>

      <hr />
      <StateVsRef />
    </section>
  );
}
