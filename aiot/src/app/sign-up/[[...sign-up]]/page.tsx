import { SignUp } from "@clerk/nextjs";

import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center py-32">
      <SignUp />
    </div>
  );
};

export default page;
