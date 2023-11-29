import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = ()=>{
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
          .get<FetchGamesResponse>("/games",{signal: controller.signal})
          .then((res) => {
            debugger;
            setGames(res.data.results);
          })
          .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
          });

          return ()=>{controller.abort()}
      },[]);

      return {games, error}
}

export default useGames