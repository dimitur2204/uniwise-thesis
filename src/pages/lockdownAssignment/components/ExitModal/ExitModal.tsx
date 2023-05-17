import { useState } from 'react';
import { Checkbox } from '@uniwise/flow-ui-react';
import personUrl from '../../../../assets/landing-person.svg';
import { WfModal } from '../WfModal/WfModal';
import { LinkButton } from '../../../../components/LinkButton';
import { ExitButton } from '../ExitAndSubmitButtons';
import { Button } from '@mui/material';

export const ExitModal = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const resetChange = () => {
    setChecked(false);
  };

  return (
    <>
      <WfModal
        size="small"
        trigger={
          <WfModal.Trigger>
            <ExitButton onClick={resetChange}>Exit</ExitButton>
          </WfModal.Trigger>
        }
      >
        <WfModal.Title>Exit without submitting</WfModal.Title>
        <WfModal.Content style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img src={personUrl} alt="person" style={{ width: '30%' }} />
          <div className="content">
            <WfModal.Description style={{ paddingLeft: '50px' }}>
              <p>
                By selecting Exit you will be leaving without having made a submission. If you
                attempt to resume at a later point, an invigilator password may be required.
              </p>
              <Checkbox
                label="I want to exit without completing my submission"
                onChange={handleChange}
                style={{ color: checked ? '' : 'red' }}
              />
            </WfModal.Description>
          </div>
        </WfModal.Content>
        <WfModal.Footer>
          <WfModal.Close>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </WfModal.Close>
          <LinkButton
            variant="contained"
            to="/page/lockdownExit"
            disabled={!checked}
            sx={{
              backgroundColor: '#B04545',
              marginLeft: '5px',
              '&:hover': { backgroundColor: '#9C3131' },
            }}
          >
            Exit
          </LinkButton>
        </WfModal.Footer>
      </WfModal>
    </>
  );
};
