import { useState, useEffect, useRef } from "react";

const useFetch = (query, deps = false, queryParams) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const firstRender = useRef(true);
  const refresh = () => {
    setRefreshFlag(true);
  };

  useEffect(() => {
    if (deps && firstRender.current) {
      setIsPending(false);
    }
    if (
      (deps && name.length) ||
      (!deps && firstRender.current) ||
      refreshFlag
    ) {
      firstRender.current = false;
      const abortCont = new AbortController();
      const requestBody = {
        query: name.length ? query(name, queryParams) : query,
      };
      fetch("http://localhost:8000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log("from use fetch", data);
          setData(data);
          setIsPending(false);
          setRefreshFlag(false);
          setName('');
          setError(null);
        })
        .catch((err) => {
          if (err.name === "BortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setRefreshFlag(false);
            setName('');
            setError(err.message);
          }
        });
      //clean up side effects
      return () => abortCont.abort(); //pause the fetch
    }
  }, [name, refreshFlag]);
  return { data, isPending, error, setName, name, refresh };
};

export default useFetch;
