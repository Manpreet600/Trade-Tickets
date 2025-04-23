import React from "react";
import PaymentSettings from "./PaymentSettings";
// import SocialProfile from "./SocialProfile";
import AccountDetails from "./AccountDetails";
import UserSettings from "./UserSettings";

function SettingsPanel({ user }) {
  return (
    <div className="flex flex-col gap-6">
      <PaymentSettings />
      {/* <SocialProfile /> */}
      <AccountDetails user={user} />
      <UserSettings />
    </div>
  );
}

export default SettingsPanel;
