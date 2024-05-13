import { Button } from "@radix-ui/themes";
import { MdDeleteOutline } from "react-icons/md";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <MdDeleteOutline />
      Delete Issue
    </Button>
  );
};

export default DeleteIssueButton;
