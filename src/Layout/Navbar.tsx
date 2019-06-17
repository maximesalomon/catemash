import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <NavbarStyle>
      <Link to="/"><LogoStyle>Animash</LogoStyle></Link>
      <Link to="/cats/leaderboard"><LeaderboardStyle>Leaderboard</LeaderboardStyle></Link>
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

const LogoStyle = styled.a`
  position: absolute;
  text-decoration: none;
  left: 24px;
  top: 24px;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
`;

const LeaderboardStyle = styled.button`
  padding: 10px;
  position: absolute;
  right: 24px;
  top: 14px;
  text-decoration: none;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  background-repeat: no-repeat;
  border: solid 1px lightgray;
  cursor:pointer;
  overflow: hidden;
`;

export default Navbar;