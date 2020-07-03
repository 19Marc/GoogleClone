import React, { useState, useEffect } from 'react'
import axios from 'axios';

export function usefetchApi(search) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    async function fetchSearchApi() {
      try {
        setLoading("true");
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=${search}`);

        const json = await response.json();
        console.log("json", json);
        
        setResult(
          json.items.map(item => {
            console.log("cacheID", item.cacheId)
            console.log("title", item.title);
            console.log("link", item.link);
            return item.title
          })
        );
      } catch (error) {
        setLoading("null");
      }
    }

    if (search !== "") {
      fetchSearchApi();
    }
  }, [search]);
  console.log("result", result)
  return [result, loading];
}