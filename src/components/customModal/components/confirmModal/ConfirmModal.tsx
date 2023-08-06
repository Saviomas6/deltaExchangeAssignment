import { ModalHeading } from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
import CustomModal from "../../CustomModal";
import { ConfirmModalButtonWrapper, ConfirmModalDescription } from "./style";

interface I_Props {
  modalOpen(value: boolean): void;
  handleDelete(): void;
}

const ConfirmModal = ({ modalOpen, handleDelete }: I_Props) => {
  return (
    <CustomModal
      bgColor="rgba(0,0,0,0.7)"
      onClickClose={() => {
        modalOpen(false);
      }}>
      <div>
        <ModalHeading>ARE YOU SURE?</ModalHeading>
        <ConfirmModalDescription>
          Do you really want to delete these record?
        </ConfirmModalDescription>
        <ConfirmModalButtonWrapper>
          <Button
            type="button"
            text="CANCEL"
            onClick={() => {
              modalOpen(false);
            }}
            bgColor="#FFA500"
          />
          <Button
            type="button"
            text="DELETE"
            onClick={handleDelete}
            bgColor="#ff0000"
          />
        </ConfirmModalButtonWrapper>
      </div>
    </CustomModal>
  );
};

export default ConfirmModal;
