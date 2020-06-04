import React from "react"

import SiteLogo from "../assets/svg/logo.svg"
import UserIcon from "../components/UserIcon"

export default ({ Route }: { Route: () => JSX.Element | JSX.Element }) => {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
        <Header />
        <Route />
      </div>
    </>
  )
}

// #region Header
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        backgroundColor: "#fefefe",
        boxShadow: "0px 0px 4px 4px rgba(0,0,0,0.08)",
      }}
    >
      <img src={SiteLogo} alt="logo" width={60} height={60} />
      <span
        onClick={() => {
          console.log("user clicked")
        }}
      >
        <UserIcon className="touchable" />
      </span>
    </div>
  )
}
// #endregion
