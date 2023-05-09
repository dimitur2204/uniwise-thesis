import { ContainerProps, Container as MUIContainer } from '@mui/material';
export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <MUIContainer {...props}>{children}</MUIContainer>;
};
