import { WfModal } from '../WfModal/WfModal';
import personUrl from '../../../../assets/landing-person.svg';
import { WfLinkButton } from '../../../../components/LinkButton';
import { useState } from 'react';
import { Checkbox, WfButton } from '@uniwise/flow-ui-react';
import { ExitButton } from '../ExitAndSubmitButtons';

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
            <WfButton content="Cancel"/>
          </WfModal.Close>
          <WfLinkButton to="/page/lockdownExit" content="Confirm" color="red" disabled={!checked}>
            Exit
          </WfLinkButton>
        </WfModal.Footer>
      </WfModal>
    </>
  );
};
