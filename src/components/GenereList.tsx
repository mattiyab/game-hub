import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";

const GenereList = () => {
  // const { genres } = useGeneres();
  //const { data } = useData<Genre>("/genres");
  const { data } = useGeneres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="20px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
