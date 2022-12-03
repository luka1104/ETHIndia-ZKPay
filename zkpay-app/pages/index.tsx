import { useRouter } from "next/router";
import {
  Avatar,
  Button,
  Box,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Icon,
  Text,
  Flex,
  useColorMode,
  Wrap,
  WrapItem,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Tooltip,
} from "@chakra-ui/react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { LivepeerPlayer } from "components/LivepeerPlayer";

export default function Home() {
  const router = useRouter();

  const profiles = [
    {
      profileId: "1",
      videoUrl:
        "https://ipfs.io/ipfs/QmWY8DSGsqsiJYs3dab5mYFwTcp2YiUMecYn1h8iVqHwjB",
      profileName: "Luka",
      worldCoinVerify: true,
    },
    {
      profileId: "2",
      videoUrl:
        "https://ipfs.io/ipfs/QmWY8DSGsqsiJYs3dab5mYFwTcp2YiUMecYn1h8iVqHwjB",
      profileName: "Shun",
      worldCoinVerify: false,
    },
    {
      profileId: "3",
      videoUrl:
        "https://ipfs.io/ipfs/QmWY8DSGsqsiJYs3dab5mYFwTcp2YiUMecYn1h8iVqHwjB",
      profileName: "Yusuke",
      worldCoinVerify: true,
    },
    {
      profileId: "4",
      videoUrl:
        "https://ipfs.io/ipfs/QmWY8DSGsqsiJYs3dab5mYFwTcp2YiUMecYn1h8iVqHwjB",
      profileName: "Daisuke",
      worldCoinVerify: false,
    },
  ];
  return (
    <>
      <Box maxW="85%" mx="auto">
        <Wrap>
          {profiles.map((profile) => (
            <>
              <WrapItem>
                <Card maxW="sm">
                  <CardBody>
                    <LivepeerPlayer
                      url={
                        "https://ipfs.io/ipfs/QmWY8DSGsqsiJYs3dab5mYFwTcp2YiUMecYn1h8iVqHwjB"
                      }
                      autoPlay={true}
                    />
                    <Stack mt="6" spacing="3">
                      <Flex alignItems={"center"}>
                        <Heading size="md">{profile.profileName}</Heading>
                        {profile.worldCoinVerify && (
                          <Icon
                            color="#1C9BEF"
                            ml="10px"
                            fontSize="20px"
                            as={BsFillPatchCheckFill}
                          />
                        )}
                      </Flex>
                      <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      m="auto"
                      onClick={() =>
                        router.push(`/profile/${profile.profileId}`)
                      }
                    >
                      Learn More & Contact
                    </Button>
                  </CardFooter>
                </Card>
              </WrapItem>
            </>
          ))}
        </Wrap>
      </Box>
    </>
  );
}
