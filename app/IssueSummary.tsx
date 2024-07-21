import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
    color: "green" | "yellow" | "red";
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN", color: "green" },
    {
      label: "In-progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
      color: "yellow",
    },
    { label: "Closed Issues", value: closed, status: "CLOSED", color: "red" },
  ];
  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex align="center" gap="2">
            <Text size="4" className="font-bold" color={container.color}>
              {container.value}
            </Text>
            <Link
              className="text-sm font-medium"
              href={`/issues/list/?status=${container.status}`}
            >
              {container.label}
            </Link>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
