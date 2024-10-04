import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addHorse } from '@/services/request';
import { ChangeEvent, FormEvent, useState } from 'react';

const AddHorse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  // TODO: should handle more status
  const { isPending, mutate } = useMutation({
    mutationFn: addHorse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['horses'] });
      clearForm();
      onClose();
    },
  });

  // TODO: should use other form library for better management and validation
  // form inputs
  const [name, setName] = useState<string>('');
  const [favouriteFood, setFavouriteFood] = useState<string>('');
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const input = {
      name,
      profile: {
        favouriteFood,
        physical: {
          weight,
          height,
        },
      },
    };
    mutate({ ...input });
  };

  // set form values
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value.trim());
  };
  const handleFoodChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFavouriteFood(e.target.value.trim());
  };

  // TODO: should prevent "e" input
  const handleHeightChange = (_: string, valueNumber: number): void => {
    setHeight(isNaN(valueNumber) ? null : valueNumber);
  };
  const handleWeightChange = (_: string, valueNumber: number): void => {
    setWeight(isNaN(valueNumber) ? null : valueNumber);
  };

  // reset after creation
  const clearForm = () => {
    setName('');
    setFavouriteFood('');
    setHeight(null);
    setWeight(null);
  };

  return (
    <>
      <Button size="sm" onClick={onOpen}>
        New Horse
      </Button>
      {/*TODO: should split the modal and form*/}
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Horse</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="add-horse-form" onSubmit={handleSubmit}>
              <VStack gap="1rem">
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" value={name} onChange={handleNameChange} />
                </FormControl>
                <FormControl>
                  <FormLabel>Favourite Food</FormLabel>
                  <Input type="text" value={favouriteFood} onChange={handleFoodChange} />
                </FormControl>
                <FormControl>
                  <FormLabel>Height</FormLabel>
                  <NumberInput min={1} onChange={handleHeightChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel>Weight</FormLabel>
                  <NumberInput min={1} onChange={handleWeightChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </VStack>
            </form>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup justifyContent="flex-end" gap={2}>
              <Button type="submit" form="add-horse-form" isLoading={isPending} isDisabled={!name}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={onClose} isDisabled={isPending}>
                Cancel
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddHorse;
