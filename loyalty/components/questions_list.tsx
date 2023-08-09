import {
  Box, Button, FormControl, FormLabel, Heading, Modal, ModalBody, 
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, 
  Text, Textarea, useDisclosure 
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function RestaurantDetail({ onCommentChange = () => {} }) {
  const router = useRouter();
  const { id, name, timestamp } = router.query;
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  const [comments, setInputValue] = useState("");

  // handle text input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);      // set the state with the new input value
    onCommentChange(event.target.value);    // send the new value up to the parent
  };
  

  const handleSend = () => {
    console.log({
      //overallExperience, 
      //foodTaste, 
      // cleanliness, 
      //staffRating, 
      comments
    });
    onOpen();  // Open the Thank You modal
  };

  return (
    
    <Box p={5} minW="600px" borderRadius="md" boxShadow="md" bg="white">


            
    
     {/*  <Heading as="h1" mb={4}>Feedback for: {name}</Heading> */}

      <FormControl>
        <FormLabel fontSize="20px" fontWeight="bold">Any additional comments or suggestions?</FormLabel>
        <Textarea 
          value={comments} 
          // onChange={(e) => setComments(e.target.value)}
          onChange={handleInputChange}
          placeholder="Share your thoughts with us" 
          bgColor="gray.200" 
          fontSize="20px"
          color="grey.500" 
        />
      </FormControl>

      <Button 
        colorScheme="blue" 
        onClick={handleSend} 
        mt={4} 
        size="lg"
      >
        Submit Feedback
      </Button>

      {/* Thank You Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="gray.100" color="grey.500">
          <ModalHeader>Thank you!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>We appreciate your feedback.</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose} color="blue.500">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}