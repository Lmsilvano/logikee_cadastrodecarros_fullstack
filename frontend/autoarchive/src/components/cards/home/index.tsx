import { StyledHomeCardsContainer } from "./HomeCardsContainer.style";
import { Link } from "react-router-dom";
interface HomeCardsProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  buttontext: string;
}

const HomeCards: React.FC<HomeCardsProps> = ({
  icon,
  title,
  text,
  buttontext,
}) => {
  return (
    <StyledHomeCardsContainer>
      <div className="upperCardBody">
        <Link to={buttontext}>{icon}</Link>
        <h2>{title}</h2>
      </div>
      <div className="lowerCardBody">
        <p>{text}</p>
        <Link to={buttontext}>{buttontext}</Link>
      </div>
    </StyledHomeCardsContainer>
  );
};

export default HomeCards;
