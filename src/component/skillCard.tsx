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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface skills {
  id: number;
  techLogo: any;
  techName: string;
  level: string;
}

const SkillCard :React.FC<skills> = ({ id, techLogo, techName, level}) =>{
  return (
    <Link to={`skills/${id}`}>
      <Container>
        <Card boxSize={"250px"} bgColor={"#48a8ff"}>
          <CardBody>
            <VStack>
              <Image src={techLogo} />
              <Text textAlign="center" fontWeight="bold">
                {techName}
              </Text>
            </VStack>
          </CardBody>
          <Divider />
          <CardFooter justify="center">
            <Flex>
              <Text bg={"tomato"}>{level}</Text>
            </Flex>
          </CardFooter>
        </Card>
      </Container>
    </Link>
  );
};

export default SkillCard;