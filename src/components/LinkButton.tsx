import { Button, ButtonProps } from '@mui/material';
import { Link } from 'react-router-dom';
interface LinkButtonProps extends ButtonProps {
  to: string;
}
export const LinkButton: React.FC<LinkButtonProps> = ({ to, ...props }) => {
  return (
    <Link to={to}>
      <Button tabIndex={-1} {...props} />
    </Link>
  );
};
