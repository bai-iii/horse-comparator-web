import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Text, HStack, Collapse, VStack } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react-use-disclosure';
import { Horse } from '@/types';

interface DetailRowProps {
  label: string;
  value: string | number | null;
}

const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    <Text>
      <Text as="span" color="gray.600">
        {label}:{' '}
      </Text>
      <Text as="span">{value}</Text>
    </Text>
  );
};

interface HorseDetailCollapseProps {
  horse: Horse;
}

const HorseDetailsCollapse = ({ horse }: HorseDetailCollapseProps) => {
  const {
    name,
    profile: { favouriteFood, physical },
  } = horse;
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HStack justifyContent="space-between" gap={4} role="button" aria-label="Toggle Horse Details" onClick={onToggle}>
        <Text whiteSpace="normal" wordBreak="break-word" isTruncated={!isOpen} fontWeight={500}>
          {name}
        </Text>
        {isOpen ? <ChevronUpIcon boxSize={6} /> : <ChevronDownIcon boxSize={6} />}
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <VStack alignItems="flex-start" mt={2} fontSize="sm" gap={0}>
          <DetailRow label="Favourite Food" value={favouriteFood} />
          <DetailRow label="Height" value={physical.height} />
          <DetailRow label="Weight" value={physical.weight} />

          {/*<Text>*/}
          {/*  <Text as="span" color="gray.600">*/}
          {/*    Favourite Food:{' '}*/}
          {/*  </Text>*/}
          {/*  <Text as="span">{favouriteFood}</Text>*/}
          {/*</Text>*/}
          {/*<Text>*/}
          {/*  <Text as="span" color="gray.600">*/}
          {/*    Height:{' '}*/}
          {/*  </Text>*/}
          {/*  <Text as="span">{physical.height}</Text>*/}
          {/*</Text>*/}
          {/*<Text>*/}
          {/*  <Text as="span" color="gray.600">*/}
          {/*    Weight:{' '}*/}
          {/*  </Text>*/}
          {/*  <Text as="span">{physical.weight}</Text>*/}
          {/*</Text>*/}
        </VStack>
      </Collapse>
    </>
  );
};

export default HorseDetailsCollapse;
