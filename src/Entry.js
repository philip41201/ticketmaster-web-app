import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function updateContent(e) {
    setContent(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <input
        value={content}
        onChange={updateContent}
        placeholder="Please Enter an Event"
        size="50"
      />
    </form>
  );
}
