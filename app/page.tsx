import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

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
      <IssueChart open={open} inProgress={inProgress} closed={close} />
    </Flex>
  );
}
