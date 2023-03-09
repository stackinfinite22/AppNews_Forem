import {
  AttachmentIcon,
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  InfoOutlineIcon,
  LockIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";
import {
  Card,
  Box,
  Text,
  Grid,
  Avatar,
  Input,
  InputGroup,
  IconButton,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaComment, FaShare, FaSave, FaAward } from "react-icons/fa";

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

const cardsData: CardData[] = [
  {
    title: "Card 1",
    description:
      "Completing the Collection as a Gift (ISO High (Printable) quality ISS Pictures)",
    imageUrl:
      "https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    title: "Card 2",
    description:
      "i am not only one who would like to something like this right",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Card 3",
    description:
      "Completing the Collection as a Gift (ISO High (Printable) quality ISS Pictures)",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Card 4",
    description:
      "i am not only one who would like to something like this right",
    imageUrl:
      "https://media.istockphoto.com/id/1148091793/photo/technology-abstract.jpg?s=1024x1024&w=is&k=20&c=Q-tH-8QI959LcamRa50iCKV9UHcoBcZwh0bEPkeEzNE=",
  },
  {
    title: "Card 4",
    description:
      "Completing the Collection as a Gift (ISO High (Printable) quality ISS Pictures)",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Card 5",
    description:
      "i am not only one who would like to something like this right",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Card 6",
    description:
      "Completing the Collection as a Gift (ISO High (Printable) quality ISS Pictures)",
    imageUrl:
      "https://images.unsplash.com/photo-1631943406801-ba6ccfa4f682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    title: "Card 7",
    description:
      "i am not only one who would like to something like this right",
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAugMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAEcQAAEDAgMEBQcIBA8AAAAAAAEAAgMEEQUSYQYTIVEHMUFxwRQiMoGRsdEjQlJygpPh8BYzYsIVF0NFU1RVc3SEkqGi0tP/xAAZAQEBAQEBAQAAAAAAAAAAAAABAAIEAwX/xAAjEQEAAgICAwACAwEAAAAAAAAAAhEBEwNREjFBFCEyQmEE/9oADAMBAAIRAxEAPwD45a68Apdy7ZeqcHr04rtl2ytKTBZqnB6vE2yRthpntY5rnWcSeXtVQzlVAL1lPKpAHktULDsugKeUroaqhYdl6yLlXg1VIPKvWRcq7lVSsGy7lRcq9lVSsEhcsjZV7KqlYRHFcIRi1cyqpWDZeIKKWrhaE0rCsvImVcIRRsNeU8q5ZFG0gF0NUw1SDVpi0LKQvbqUg26mGpVhgLwaihqkGKoWEGqQYihimGJ8WbL5F3ImAwqW7TSsvkXsiZEalu1UrKZNF7Im92uGNNKypYuZE0Y1zdopWVyLmRNZCubsqpWVLQuZUzkXMiKNlsq5l4pgsXMnaqjZYtXMh5I7mrmUqpW8GqeRFDVIMuepWMM2GG8FIM4owjU2xppAhimIu1HbEURsRWsYBYRqYiTbYtERsN+xPiLJiJTESdbBoiNpzyW/EWQEJ5Lu50ViKc8lLyY8k0rVm50XtzzCs/JjyXDTnkrxVqzdKJiCszTnkoGDRZ8Vat3SiY9FYmHRQMOiKNq4x6KO7CsHRaKBi0RRIbtRLE8YihmJFIkWLmRNmO3Yo7tFFxsaI2NMtiv2IrIdFAu2JEbCmmQ6IzIdEgq2FGbAnGQaJiOnv2LQIMg49SOynv2KwjptEzHS6LQVrKbRGZSaK2jpNEcUwY0udYNAuU+WAyWKSvgduoGOzjiXC3D2qkqKqpJsJ5TJe4sbADtV5i0/lFSZGBhhykDj1i3b+fcqKclpJfGW+c0gZeHLq9nfxXzOXlzKfv8AT6XHxYjC6M4ZizKd8seISve24LeGa19fBaWKKOeISQnMw9Rt1rIyyQ7n5UONiWvLLW9X4/BbzZ0Mq8NBZ527cWF2UC9uo8NF08HJn+OXLzQ+kHUuiE+m0WjfSfsoD6TRdPk8KZ51NohOg0V++l0QX02iLKidAhGBXb6bRBdTaIsqd0KEYVcPp7diE6DRSVLodFDc6K0dBoh7nRSCYxGbGFjhita3qqX+wH3hGbjte3+UY4ftMHgubfh76ctlHGm44LrGRbUVjOuGB3qI8U7DtlOPSw+N3dKR4LW+LGmTXxwJqODRZOHbhgHyuHFv1Zr+ATkW3dALZ6OoHcWnxVvh2tM+mqipk5HTaLLR7e4SLXgqv9I+Kch6QMEuMzKsd0YPirfHsaZ9NPFTaI0tHnppW/SYRe9uxUcW3mz1rukqW6GA+CKOkHZ4cAat3dCB7ysZ5o17axwzxn0xLopyZW0rZHmPg2RpuXA8LDt59pQZRKckde10b6uO1K3IBmyuuR6/FbaPbfZZkjCykqWFly3LC0dfX1OSeNbW7NYnU4bM+GoLqasbM50kPFrbEG1j9XhouWMY4+uuUpy/qz5wKobRukFPdzPPa1zPSFrHv/ALbbF0G5wNo3LmZpHO89tj7lM7ZbJVkgdNWEFoNt5BK1o/42TeHbQ7MQwtp6LF6LJe7WunFx7V7wzGObxlzz88+8G30uiXkpdE47FcKIuMSoiOe/b8UF+K4T24lRfft+K9vN4+OSElOEvJTBNz4xg7RxxKj++b8VXy4/gjevFKP70J2Y7XjnKD6dAfT6Lj9pMC/tSm9T0rPtRgTGk/wgw/VY4+4K2Y7WuXQj4NEF8ASMm1+DfNlmd3QuHvsln7X4YfRbOfsj4q2x7OufSwfChbjRVFRtfTD9VSyO1c4NHilv0xf/Umfen4I3wx9OmfTJNjc70Wud3C6K2iqX8GU0x7mFbNrgjMcOZ9q88cH+vTdnpjo8HxJ/oUcvrsPeU3Ds3i8nDyQM+tK3wK10TwE3FNqtfj4Z3yZFmxuLPIuKYd8v4JyLYXEX2zVFM31k+C1scw5pqKoHNOiI3yZJnR7WO/nCmGmVyai6NKl1s2LQDugJ8VrYqgc03HUjmjRFb5MrF0YPI441Hf/Bn/ANERvRZL83GYj30pH75WxiqtUaWsEdPJISQGsJuO5ZlwRxi2sc879sV/FdUj0sYpm34cad3/AGStb0eS0UtGx2MQu8qqRBcUx83zXG/p6dXDrSAx+up5JX0tQXtYTuX2DiON7dqWrcXrsTqKerxGoLZsO+UYMmXO8mzXEX6+A5aWXLHXL46p7cfWwZ0Y0PFk+L1LuFy1jWN990em6NdnXMzb+rnbextOLH2BZ6faqqmpnOkJkmZ5kXDqv26+pbDY2tMmBR5i05XOF2tyg/HvXvCEM/rGHPOfJjF5yC7o52XAt5FMdTVSfFCPR1svxtRzD/MyfFaN9SOaXkqtV6448dPLZLtm5uj3ZsDzYKlvdUOSUmwGBjgw1YH99+C08lTf5yWkqBzTqj0tsu2YfsDhNuE9UPtA+CVl2BoA0hlbVA6hp8FqXzjmgPnVpj0ts+2Nl2CA/V4lYcnU9/3ku/YmZot5dE4axkeJWzfOOaA+Yc06IndNiZ9ka1o+Tkhf9ot8Er+jGJ/0A+8b8VuXzDmob4LP48TvkzbZUVkyrhJw61Nsmq9nktGTIzJ1VNlPNFbNqtYC4ZUWTEdTqqRk+qM2fVaC+jqdUzHVarOtqTzR2VJHamg0sdXqjPnbNC+N1rPaQbrOMq9UdtWfpJ8cZV5wqa+iloZxkiA805HkCx1HHr/3WfqJqipkvJJYXDcoNri9+HrWgxqWpN5rsfHltbKerXmstO5zXFwtYH0ers618mfHrnnD6UJ5nCx92cjQ55iaTfjdpb+fHVfQ9kyKPB2taXZJHl7MwtwP55DuWBw6gkxKaX5d0TGu48CR3X/PUtjSPFJTshbI54YLBzutdf8Az8f1y80vjRPrdUB9ZftVM+rv2oTqo/SXV4udbvq9Uu+q1VW6oP0kJ055oorN9VqgvqdVXOn1Q3TaqSwfU6oLqjVIum1QzNqonXT6oe+STptVDfaoSnD1MPS4JUgSvLGW8mWvRBIlASpgmy1bJxsqI2VJNJUw4rWEebKitmVeHFTDimxSxbPqitqNVVhx5qVzzK1YpaeUcyuOljcbuY1x5kBVuY81IPKfftLEVAbfKLdy55Sq/MV7MVWqPmoUDUJIuK4XFFmjZnKgZilsxUS4otGTMoOlKAXFQLjxQRzKhmRDcbKDii0IZNVzOgElcuUWn//Z",
  },

  {
    title: "Card 8",
    description:
      "Completing the Collection as a Gift (ISO High (Printable) quality ISS Pictures)",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
];

const Home = () => {
  return (
    <Grid
      bg="gray.100"
      h="auto"
      w="100%"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pt={3}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="385px"
        h="50px"
        bgColor="white"
        borderRadius="5px"
        padding={2}
        gap={3}
      >
        <Avatar
          name="John Doe"
          src="https://bit.ly/dan-abramov"
          width="40px"
          height="40px"
        />
        <InputGroup>
          <Input placeholder="Create Post.." gap={3} />
        </InputGroup>
        <Icon as={ExternalLinkIcon} boxSize={4} color="grey" />
        <Icon as={AttachmentIcon} boxSize={4} color="grey" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        width="385px"
        h="50px"
        bgColor="white"
        borderRadius="5px"
        padding={2}
        margin="20px"
        justifyContent="space-between"
      >
        <Grid display="flex" alignItems="center" gap={2.5}>
          <Icon as={ChatIcon} boxSize={4} color="gray" />
          <Text color="gray">Post</Text>
          <Icon as={LockIcon} boxSize={4} color="gray" />
          <Text color="gray">Hot</Text>
          <Icon as={BellIcon} boxSize={4} color="gray" />
          <Text color="gray">News</Text>
          <Icon as={InfoOutlineIcon} boxSize={4} color="gray" gap={4} />
          <Text color="gray">Award</Text>
        </Grid>
        <Grid display="flex" alignItems="center" gap={2}>
          <Icon as={PlusSquareIcon} boxSize={4} color="gray" gap={3} />
          <Icon as={ChevronDownIcon} boxSize={4} color="gray" gap={3} />
        </Grid>

      </Box>
      <Grid display="flex" flexDirection="column" alignItems="center">
        {cardsData.map((cardData) => (
          <Card key={cardData.title} maxWidth="sm" p={1} mt={2}>
            <Text fontSize="xl" fontWeight="bold">
              {cardData.title}
            </Text>
            <Text fontSize="md">{cardData.description}</Text>
            <Box
              height="300px"
              width="365px"
              margin="10px"
              bgImage={`url(${cardData.imageUrl})`}
              bgSize="cover"
              bgPosition="center"
            />
            <Box border="1px" borderColor="gray.200" p="4">
              <HStack spacing="4">
                <IconButton
                  aria-label="Share post"
                  icon={<FaShare />}
                  size="sm"
                />
                <IconButton
                  aria-label="Save post"
                  icon={<FaSave />}
                  size="sm"
                />
                <IconButton
                  aria-label="Comment on post"
                  icon={<FaComment />}
                  size="sm"
                />
                <IconButton
                  aria-label="Award post"
                  icon={<FaAward />}
                  size="sm"
                />
                <Text>...</Text>
              </HStack>
            </Box>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;