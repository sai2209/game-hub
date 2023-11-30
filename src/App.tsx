import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSortOrder, setSelectedSortOrder] = useState("");
  const [searchText, setSearchText] = useState("");

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => {
            setSearchText(searchText);
          }}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack paddingLeft={5} spacing={5}>
          <PlatFormSelector
            onSelectPlatform={(platform) => {
              setSelectedPlatform(platform);
            }}
            selectedPlatform={selectedPlatform}
          ></PlatFormSelector>

          <SortSelector
            onSelectSortOrder={(sortOrder) => {
              setSelectedSortOrder(sortOrder);
              console.log(sortOrder);
            }}
            selectedSortorder={selectedSortOrder}
          ></SortSelector>
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedSortOrder={selectedSortOrder}
          searchText={searchText}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
