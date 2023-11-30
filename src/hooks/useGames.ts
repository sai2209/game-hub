import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform:Platform}[] ;
    metacritic:number;
  }
  

const useGames = (selectedGenre: Genre | null, selectedPlatform : Platform | null, sortOrder: string)=>{
    return useData<Game>("/games", {
        params: {
            genres:selectedGenre?.id, 
            platforms: selectedPlatform?.id,
            ordering: sortOrder
        }}, 
        [selectedGenre?.id, selectedPlatform?.id,sortOrder]);
    
}

export default useGames