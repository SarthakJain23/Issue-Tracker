import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueAction = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button>
        <FaPlus />
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
