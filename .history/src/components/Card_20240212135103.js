import { Box, Image, Badge } from "@chakra-ui/react";

const Card = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box
      maxW="350px"
      h="420px"
      borderRadius="5%"
      overflow="hidden"
      bg="#fff"
      cursor="pointer"
    >
      {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}
      <Box h="300px" bg="green"></Box>

      <Box p="5">
        <Box mt="2" fontWeight="bold" as="h3" lineHeight="tight" noOfLines={1}>
          {property.title}
        </Box>
        <Box mt="1" fontWeight="semibold">
          {property.formattedPrice}
        </Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {property.reviewCount} reviews
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
