import {
  Card,
  VStack,
  Flex,
  Image,
  Text,
  Divider,
  CardBody,
  CardFooter,
  Container,
  HStack,
} from "@chakra-ui/react";
import { SkillListProps } from "../service/skillInterFace";
const ImageURL = import.meta.env.VITE_IMAGE_URL;

const SkillCard: React.FC<SkillListProps> = ({ skill }) => {
  return (
    <Container>
      <HStack>
        {skill.map((skill) => (
          <Card boxSize={"250px"} bgColor={"#48a8ff"} key={skill.id}>
            <CardBody>
              <VStack>
                <Image src={ImageURL + skill.attributes.techLogo} />
                <Text textAlign="center" fontWeight="bold">
                  {skill.attributes.techName}
                </Text>
              </VStack>
            </CardBody>
            <Divider />
            <CardFooter justify="center">
              <Flex>
                <Text bg={"tomato"}>{skill.attributes.level}</Text>
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </HStack>
    </Container>
  );
};

export default SkillCard;
