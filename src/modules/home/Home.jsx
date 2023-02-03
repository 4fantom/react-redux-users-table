import React from "react";
import { useNavigate } from "react-router-dom/dist";
import RoutePaths from "../../helpers/RoutePaths";
import { Button, Paper } from "../../components/StyledComponents";

const Home = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(RoutePaths.users);
  };
  return (
    <Paper>
      <Button onClick={onButtonClick}>Click me!</Button>
    </Paper>
  );
};

export default Home;
