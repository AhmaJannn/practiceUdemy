import { useMemo, useState, useTransition } from "react";

import data from "./data";

function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState(data);

  const [isPending, startTransition] = useTransition();

  const filteredPosts = useMemo(() => {
    return posts.filter((item) => item.name.toLowerCase().includes(text));
  }, [text]);

  const onValueChange = (e) => {
    startTransition(() => {
      setText(e.target.value);
    });
  };

  return (
    <>
      <input value={text} type="text" onChange={onValueChange} />

      <hr />
      <div>
        {isPending ? (
          <h4>Loading...</h4>
        ) : (
          filteredPosts.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
