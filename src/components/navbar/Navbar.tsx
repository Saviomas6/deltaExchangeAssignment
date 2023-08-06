import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/sharedStyles";
import Button from "../button/Button";
import { useState } from "react";
import {
  NavbarButtonWrapper,
  NavbarHeading,
  NavbarLayout,
  NavbarMainContainer,
  UserProfileContainer,
} from "./style";
import { AiOutlineUser } from "react-icons/ai";
import { Paths } from "../../routes/path";
import { useAppDispatch, useAppSelector } from "../../logic/redux/store/hooks";
import LogoutModal from "../customModal/components/logoutModal/LogoutModal";
import { setLoggedDetail, setLoggedIn } from "../../logic/redux/action/action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    dispatch(setLoggedIn(false));
    dispatch(setLoggedDetail([]));
    setIsLogoutModalOpen(false);
    navigate(Paths.home);
  };

  return (
    <div>
      <NavbarLayout>
        <Container width="90%">
          <NavbarMainContainer>
            <NavbarHeading onClick={() => navigate(Paths.home)}>
              Delta Exchange
            </NavbarHeading>
            {isLoggedIn ? (
              <UserProfileContainer onClick={() => setIsLogoutModalOpen(true)}>
                <AiOutlineUser size={30} />
              </UserProfileContainer>
            ) : (
              <NavbarButtonWrapper>
                <Button
                  type="button"
                  text="SIGN IN"
                  onClick={() => {
                    navigate(Paths.signIn);
                  }}
                />
                <Button
                  type="button"
                  text="SIGN UP"
                  onClick={() => {
                    navigate(Paths.signUp);
                  }}
                />
              </NavbarButtonWrapper>
            )}
          </NavbarMainContainer>
        </Container>
      </NavbarLayout>
      {isLogoutModalOpen && (
        <LogoutModal
          modalOpen={setIsLogoutModalOpen}
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default Navbar;
