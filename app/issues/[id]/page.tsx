import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();
  return (
    <Grid
      columns={{
        initial: "1",
        sm: "2",
      }}
      gap="5"
    >
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" className="my-2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card mt={"4"}>
          <ReactMarkdown className="prose">{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Link href={`/issues/${issue.id}/edit`}>
          <Button>
            <FaRegEdit />
            Edit Issue
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
