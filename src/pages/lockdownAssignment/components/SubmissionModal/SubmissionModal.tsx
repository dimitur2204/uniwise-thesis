import { WfModal } from '../WfModal/WfModal';
import personUrl from '../../../../assets/landing-person.svg';
import { WfLinkButton } from '../../../../components/LinkButton';
import { useState } from 'react';
import { Checkbox, WfButton } from '@uniwise/flow-ui-react';
import { SubmitButton } from '../ExitAndSubmitButtons';
import './SubmissionModal.css';

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
            <SubmitButton onClick={resetChange}>Submit</SubmitButton>
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
                  <b className='warning'>WARNING:</b> You have not answered all questions. If you submit now, you will
                  not be able to change your answers.
                </p>
              ) : (
                <p>INKY</p>
              )}
              <Checkbox
                label="I want to submit this FLOWmulti test with the answers I have given during test."
                onChange={handleChange}
              />
            </WfModal.Description>
          </div>
        </WfModal.Content>
        <WfModal.Footer>
          <WfModal.Close>
            <WfButton content="Cancel" onClick={resetChange}/>
          </WfModal.Close>
          <WfLinkButton to="/page/lockdownSubmitExit" content="Confirm" color="green" disabled={checked}>
            Confirm
          </WfLinkButton>
        </WfModal.Footer>
      </WfModal>
    </>
  );
};
