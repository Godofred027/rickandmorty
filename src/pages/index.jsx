import NavBar from "@/components/Index/NavBar";
import Cards from "@/components/Index/Cards";
import Paginate from "@/components/Index/Paginate";
import SearchBar from "@/components/Index/SearchBar";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    };
    getCharacters();
  }, [characters]);

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <SearchBar />
      <Paginate page={page} setPage={setPage} />
      <Cards characters={characters} />
      <Paginate page={page} setPage={setPage} />
    </>
  );
}
