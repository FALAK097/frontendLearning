/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

export const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        padding: '10px',
        width: '200px',
        // we need to set the initial position of the note to the position we get from the props
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        position: 'absolute',
        border: '1px solid black',
        backgroundColor: 'lightyellow',
        cursor: 'move',
      }}
      // we need to spread the props to pass the event handlers to the Note component from the parent component (Notes)
      {...props}>
      📌{content}
    </div>
  );
});

export default Note;
