import {
  Card,
  VStack,
  Image,
  Text,
  CardBody,
  Box,
  Grid,
} from "@chakra-ui/react";
import { SkillListProps } from "../service/skillInterFace";
const ImageURL = import.meta.env.VITE_IMAGE_URL;

const SkillCard: React.FC<SkillListProps> = ({ skill }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={3}>
      {skill.map((skill) => (
        <Card
          height={200}
          minW={300}
          bgColor={"#303030"}
          boxShadow="2xl"
          key={skill.id}
        >
          <CardBody>
            <VStack>
              <Box>
                <Image
                  justifyContent={"center"}
                  src={ImageURL + skill.attributes.techLogo}
                  height={115}
                />
                <Text fontWeight="bold" color={"white"} align={"center"}>
                  {skill.attributes.techName}
                </Text>
              </Box>
            </VStack>
            <Text align={"center"} color={"white"} alignItems={"center"} bg={"#007ef0"}>
              {skill.attributes.level}
            </Text>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

export default SkillCard;
