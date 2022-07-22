import { useMemo, useState, useDeferredValue } from "react";

import data from "./data";

function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState(data);

  const deferredValue = useDeferredValue(text);

  const filteredPosts = useMemo(() => {
    return posts.filter((item) =>
      item.name.toLowerCase().includes(deferredValue)
    );
  }, [deferredValue]);

  const onValueChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} type="text" onChange={onValueChange} />

      <hr />
      <div>
        {filteredPosts.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
