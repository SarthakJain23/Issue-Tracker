import prisma from "@/prisma/client";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./LatestIssues";
import { Flex } from "@radix-ui/themes";

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const close = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <Flex direction="column" gap="3">
      <LatestIssues />
      <IssueSummary open={open} inProgress={inProgress} closed={close} />
    </Flex>
  );
}
