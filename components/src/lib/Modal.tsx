import styled from 'styled-components';
import { ReactNode } from 'react';
import ModalHeader from './ModalHeader';
import { SIZE } from './constant/size';
import POSITION from './constant/position';
import ModalDimmed from './ModalDimmed';
import ModalTitle from './ModalTitle';
import Button from './Button';
import ModalFooter from './ModalFooter';
import ModalBody from './ModalBody';

type Size = 'small' | 'medium' | 'large';

type Position = 'bottom' | 'center';

interface Props {
  position?: Position;
  size?: Size;
  children?: ReactNode;
  dimmed?: string;

  onDimmedClick?: (e: React.MouseEvent) => void;
}
const ModalMain = ({
  position = 'center',
  size = 'medium',
  dimmed,
  onDimmedClick,
  children,
}: Props) => {
  return (
    <>
      <ModalDimmed
        color={dimmed}
        onClick={onDimmedClick}
      />
      <ModalWrapper
        style={POSITION[position]}
        $minWidth={position === 'bottom' ? '100%' : '300px'}
        $size={SIZE[size]}
      >
        <ModalFrame>{children}</ModalFrame>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div<{
  $size: string;
  $minWidth: string;
}>`
  min-width: ${(props) => props.$minWidth};
  width: ${(props) => props.$size};
  max-width: ${(props) => props.$size};
  max-height: 90%;
  @media (max-width: ${(props) => props.$size}) {
    width: 90%;
  }
`;

const ModalFrame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px 32px;
  gap: 5px;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Modal = Object.assign(ModalMain, {
  Dimmed: ModalDimmed,
  Header: ModalHeader,
  Title: ModalTitle,
  Body: ModalBody,
  Button: Button,
  Footer: ModalFooter,
});
export default Modal;
