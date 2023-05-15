import { WfModal } from '../lockdownAssignment/components/WfModal/WfModal';
import personUrl from '../../assets/landing-person.svg';
import { LinkButton } from '../../components/LinkButton';
import "../lockdownSubmitExit/lockdownSubmit.css"

export const LockdownExit = () => {
  
  return (
    <>
      <WfModal
        size="small"
        open
        styles={{ overlayStyle: { backgroundColor:'#A9ABAF', opacity: '1' } }}
      >
        <WfModal.Title>Exit the flow</WfModal.Title>
        <WfModal.Content style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img src={personUrl} alt="person" style={{ width: '30%' }} />
          <div className="content">
            <WfModal.Description>
              <p>You have successfully exited the flow without submitting your assignment.</p>
              <p>You can still go back to the flow before the deadline!</p>
            </WfModal.Description>
          </div>
        </WfModal.Content>
        <WfModal.Footer>

          <LinkButton variant="contained" to="/" size="large">
            Go back to the home page
          </LinkButton>
        </WfModal.Footer>
      </WfModal>
    </>
  );
};
