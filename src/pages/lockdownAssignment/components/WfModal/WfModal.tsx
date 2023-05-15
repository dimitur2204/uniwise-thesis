import React, { useLayoutEffect } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import  './WfModal.css';

type DivWithChildren<T = {}> = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & T
>;

const Title: React.FC<DivWithChildren> = ({ children, ...props }) => (
  <RadixDialog.Title className="WfModalTitle" {...props}>
    {children}
  </RadixDialog.Title>
);

const Description: React.FC<DivWithChildren> = ({ children, ...props }) => (
  <RadixDialog.Description
    className="WfModalDescription"
    {...props}
  >
    {children}
  </RadixDialog.Description>
);

const Footer: React.FC<DivWithChildren> = ({ children, ...props }) => (
  <div className="WfModalFooter" {...props}>
    {children}
  </div>
);

const Close: React.FC<React.PropsWithChildren<RadixDialog.DialogCloseProps>> =
  ({ children, ...props }) => (
    <RadixDialog.Close asChild {...props}>
      {children}
    </RadixDialog.Close>
  );

const Trigger: React.FC<
  React.PropsWithChildren<RadixDialog.DialogTriggerProps>
> = ({ children, ...props }) => (
  <RadixDialog.Trigger asChild {...props}>
    {children}
  </RadixDialog.Trigger>
);

const Content: React.FC<DivWithChildren> = ({ children, ...props }) => (
  <div className="WfModalContent" {...props}>
    {children}
  </div>
);

export interface WfModalProps
  extends React.PropsWithChildren<RadixDialog.DialogProps> {
  /** Element to be rendered in-place where the modal is defined.
   *  The trigger needs to use the `WfModal.Trigger` as a wrapper over the
   *  element that is going to act as a trigger
   */
  trigger?: React.ReactNode;

  /** The size of the modal. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';

  /** The node where the modal should mount. The 'container' prop in the WfModal.Portal handles the default mount to the document.body */
  mountNode?: HTMLElement | null;

  /**
   * Called when a close event happens.
   *
   * @param {object} data - All props.
   */
  onClose?: (data: WfModalProps) => void;

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {object} data - All props.
   */
  onMount?: (data: WfModalProps) => void;

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {object} data - All props.
   */
  onUnmount?: (data: WfModalProps) => void;

  /**
   * Called when an open event happens.
   *
   * @param {object} data - All props.
   */
  onOpen?: (data: WfModalProps) => void;

  styles?: {
    overlayStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
  };
}

const FlowDialogChildren: React.FC<WfModalProps> = React.forwardRef<
  HTMLDivElement,
  WfModalProps
>(({ children, styles, size, onMount, onUnmount, ...props }, ref) => {
  useLayoutEffect(() => {
    onMount?.(props);
    return () => {
      onUnmount?.(props);
    };
  }, []);
  return (
    <>
      <RadixDialog.Overlay
        className="WfModalOverlay"
        style={styles?.overlayStyle}
      />
      <RadixDialog.Content
        ref={ref}
        className={
          size
            ? "WfModalBox" + ' ' + size
            : "WfModalBox"
        }
        style={styles?.contentStyle}
      >
        {children}
      </RadixDialog.Content>
    </>
  );
});

const FlowDialog: React.FC<WfModalProps> = ({
  onOpen,
  onClose,
  onMount,
  trigger,
  children,
  size,
  styles,
  mountNode,
  ...props
}) => (
  <RadixDialog.Root
    onOpenChange={(openState) => {
      openState ? onOpen?.(props) : onClose?.(props);
    }}
    {...props}
  >
    {trigger}
    <RadixDialog.Portal container={mountNode}>
      <FlowDialogChildren
        onMount={onMount}
        size={size}
        styles={styles}
        children={children}
        {...props}
      />
    </RadixDialog.Portal>
  </RadixDialog.Root>
);

// Put the Title, Description, Close, Trigger and Content as WfModal.XXX
// so that we can use them as <WfModal.Title> etc.
export const WfModal = Object.assign(FlowDialog, {
  Title,
  Description,
  Close,
  Content,
  Footer,
  Trigger,
});