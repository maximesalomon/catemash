import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <NavbarStyle>
      <LogoStyle><Link to="/">Animash</Link></LogoStyle>
      <LeaderboardStyle><Link to="/cats/leaderboard">Leaderboard</Link></LeaderboardStyle>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgray;
`;

const LogoStyle = styled.div`
  position: absolute;
  left: 24px;
  top: 24px;
`;

const LeaderboardStyle = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
`;

export default Navbar;