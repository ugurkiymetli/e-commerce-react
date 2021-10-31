import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
function Error404() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Error 404!</AlertTitle>
      <AlertDescription>This page doesn't exist!</AlertDescription>
    </Alert>
  );
}

export default Error404;
