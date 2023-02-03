import React from "react";
import { useNavigate } from "react-router-dom/dist";
import RoutePaths from "../../helpers/RoutePaths";
import { Button } from "../../components/StyledComponents";

const Home = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(RoutePaths.users);
  };
  return <Button onClick={onButtonClick}>Users</Button>;
};

export default Home;
