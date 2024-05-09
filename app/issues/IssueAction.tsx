import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const IssueAction = () => {
  return (
    <div className="mb-5">
      <Button>
        <FaPlus />
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueAction;
