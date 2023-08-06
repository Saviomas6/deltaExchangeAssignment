import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { Paths } from "../../routes/path";
import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyles";
import { HomePageButtonWrapper, HomePageContainer } from "./style";
import { useAppSelector } from "../../logic/redux/store/hooks";

const HomeSection = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );
  return (
    <OpacityAnimation>
      <Container width="90%">
        <Wrapper>
          <HomePageContainer>
            {isLoggedIn ? (
              <h1>Hi! {isLoggedDetail[0].userName}</h1>
            ) : (
              <h1>Please login to add member!</h1>
            )}
            <HomePageButtonWrapper>
              <Button
                type="button"
                text="Add member"
                onClick={() => navigate(Paths.addMember)}
              />
            </HomePageButtonWrapper>
          </HomePageContainer>
        </Wrapper>
      </Container>
    </OpacityAnimation>
  );
};

export default HomeSection;
