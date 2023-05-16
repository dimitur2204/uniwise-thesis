import { Button, ButtonProps } from '@mui/material';
import { WfButton, WfButtonProps } from '@uniwise/flow-ui-react';
import { Link } from 'react-router-dom';
interface LinkButtonProps extends ButtonProps {
  to: string;
}

interface WfLinkButtonProps extends WfButtonProps {
  to: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ to, ...props }) => {
  return (
    <Link to={to}>
      <Button tabIndex={-1} {...props} />
    </Link>
  );
};

export const WfLinkButton: React.FC<WfLinkButtonProps> = ({ to, ...props }) => {
  return (
    <Link to={to}>
      <WfButton tabIndex={-1} {...props} />
    </Link>
  );
};
