import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const TextEditor = ({ initialValue, getValue }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      config={config}
      tabIndex={1}
      //   onBlur={(newContent) => getValue(newContent)}
      onChange={(newContent) => getValue(newContent)}
    />
  );
};

export default TextEditor;

//! Main content stuff, add it later
  // useEffect(() => {
  //   let history = [];
  // let currentIndex = -1;
  //   const handleKeyDown = (event) => {
  //     if (event.key === "a" && event.ctrlKey) {
  //       // select all the text in the textarea when Ctrl + A is pressed
  //       textareaRef.current.select();
  //     } else if (event.key === "c" && event.ctrlKey) {
  //       // copy the selected text to the clipboard when Ctrl + C is pressed
  //       navigator.clipboard.writeText(textareaRef.current.value);
  //     } else if (event.key === "v" && event.ctrlKey) {
  //       // paste the text from the clipboard to the textarea when Ctrl + V is pressed
  //       navigator.clipboard.readText().then((text) => {
  //         textareaRef.current.value = text;
  //       });
  //     } else if (event.key === "x" && event.ctrlKey) {
  //       // cut the selected text from the textarea and copy it to the clipboard when Ctrl + X is pressed
  //       navigator.clipboard.writeText(textareaRef.current.value);
  //       textareaRef.current.value = "";
  //     } else if (event.key === "Backspace" && textareaRef.current.value !== "") {
  //       // prevent the default behavior of the backspace key when it is pressed in the textarea if the textarea is not empty
  //       event.preventDefault();
  //     }
  //     else if (event.key === "z" && event.ctrlKey) {
  //     // undo the last action if Ctrl + Z is pressed and the history is not empty
  //     if (currentIndex > 0) {
  //       currentIndex--;
  //       textareaRef.current.value = history[currentIndex];
  //     }
  //   } else if (event.key === "y" && event.ctrlKey) {
  //     // redo the last undone action if Ctrl + Y is pressed and the history has an action to redo
  //     if (currentIndex < history.length - 1) {
  //       currentIndex++;
  //       textareaRef.current.value = history[currentIndex];
  //     }
  //   } else {
  //     // add the current value of the textarea to the history if a key other than Ctrl + Z or Ctrl + Y is pressed
  //     history = [...history.slice(0, currentIndex + 1), textareaRef.current.value];
  //     currentIndex++;
  //   }
  //   };
  
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);