import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import IssueStatusFilter from "./list/IssueStatusFilter";

const IssueAction = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueStatusFilter />
      <Button>
        <FaPlus />
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
