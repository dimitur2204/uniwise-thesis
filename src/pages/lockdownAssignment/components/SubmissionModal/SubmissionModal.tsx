import { useState } from 'react';
import { WfModal } from '../WfModal/WfModal';
import { Checkbox } from '@uniwise/flow-ui-react';
import personUrl from '../../../../assets/landing-person.svg';
import { LinkButton } from '../../../../components/LinkButton';
import { SubmitButton } from '../ExitAndSubmitButtons';
import './SubmissionModal.css';
import { Button } from '@mui/material';

interface Props {
  selectedOptionIndices: (number | null)[];
}

export const SubmitModal: React.FC<Props> = ({ selectedOptionIndices }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  const resetChange = () => {
    setChecked(true);
  };

  return (
    <>
      <WfModal
        size="small"
        trigger={
          <WfModal.Trigger>
            <SubmitButton variant='contained' onClick={resetChange}>Submit</SubmitButton>
          </WfModal.Trigger>
        }
      >
        <WfModal.Title>Submission</WfModal.Title>
        <WfModal.Content style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img src={personUrl} alt="person" style={{ width: '30%' }} />
          <div className="content">
            <WfModal.Description style={{ paddingLeft: '50px' }}>
              <p>
                When you have finished your submission, it can be submitted here. When it has been
                submitted, it cannot be withdrawn!
              </p>
              <p>
                Note that if the flow is using the lockdown browser, you will be able to close it
                and return to WISEflow in your normal browser when you have submitted.
              </p>
              {selectedOptionIndices.some((optionIndex) => optionIndex === null) ? (
                <p>
                  <b className="warning">WARNING:</b> You have not answered all questions. If you
                  submit now, you will not be able to change your answers.
                </p>
              ) : null}
              <Checkbox
                label="I want to submit this FLOWmulti test with the answers I have given during test."
                onChange={handleChange}
              />
            </WfModal.Description>
          </div>
        </WfModal.Content>
        <WfModal.Footer>
          <WfModal.Close>
            <Button variant="contained" color='secondary' onClick={resetChange}>
              Cancel
            </Button>
          </WfModal.Close>
          <LinkButton
            variant="contained"
            to="/page/lockdownSubmitExit"
            disabled={checked}
            sx={{ marginLeft: '5px' }}
          >
            Confirm
          </LinkButton>
        </WfModal.Footer>
      </WfModal>
    </>
  );
};
