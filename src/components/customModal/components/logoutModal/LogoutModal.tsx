import CustomModal from "../../CustomModal";
import { ModalHeading } from "../../../../styles/sharedStyles";
import Button from "../../../button/Button";
import {
  ButtonWrapper,
  UserImage,
  UserImageContainer,
  UserNameDetail,
} from "./style";
import { AiOutlineUser } from "react-icons/ai";
import { useAppSelector } from "../../../../logic/redux/store/hooks";

interface I_Props {
  modalOpen(value: boolean): void;
  handleLogout?(): void;
}

const LogoutModal = ({ modalOpen, handleLogout }: I_Props) => {
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  return (
    <CustomModal
      bgColor="rgba(0,0,0,0.7)"
      onClickClose={() => {
        modalOpen(false);
      }}>
      <div>
        <ModalHeading>LOGOUT</ModalHeading>
        <UserImageContainer>
          <UserImage>
            <AiOutlineUser size={50} />
          </UserImage>
        </UserImageContainer>
        <UserNameDetail>{isLoggedDetail[0].userName}</UserNameDetail>
        <ButtonWrapper>
          <Button
            type="button"
            text="CANCEL"
            bgColor="#E02D30"
            onClick={() => {
              modalOpen(false);
            }}
          />
          <Button type="button" text="LOGOUT" onClick={handleLogout} />
        </ButtonWrapper>
      </div>
    </CustomModal>
  );
};

export default LogoutModal;
