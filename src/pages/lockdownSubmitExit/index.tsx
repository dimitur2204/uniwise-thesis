import { WfModal } from '../lockdownAssignment/components/WfModal/WfModal';
import personUrl from '../../assets/landing-person.svg';
import { LinkButton } from '../../components/LinkButton';

export const LockdownSubmitExit = () => {
  
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
              <p>Congratulations!</p>
              <p>You have successfully submitted your assignment!</p>
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
