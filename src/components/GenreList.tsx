import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
