import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const SlateEditor = ({ value, onChange }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [content, setContent] = useState(value || []);

  const handleChange = (newValue) => {
    setContent(newValue);
    onChange(newValue);
  };

  return (
    <Slate editor={editor} value={content} onChange={handleChange}>
      <Editable
        placeholder="Enter your experience details..."
        className="p-2 border rounded bg-white"
      />
    </Slate>
  );
};

export default SlateEditor;
