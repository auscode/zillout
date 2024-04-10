import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import Card from "../../components/Card.tsx";

interface Transaction {
  time: string;
  description: string;
}

const transactions: Transaction[] = [
  {
    time: "09:30 am",
    description: "Payment received from John Doe of $385.90",
  },
  { time: "10:00 am", description: "New sale recorded #ML-3467" },
  { time: "12:00 am", description: "Payment was made of $64.95 to Michael" },
  { time: "09:30 am", description: "New sale recorded #ML-3467" },
  { time: "09:30 am", description: "New arrival recorded" },
  { time: "12:00 am", description: "Payment Done" },
];

const getColor = (index: number): string => {
  // Calculate color transition from blue to green
  const totalTransactions: number = transactions.length;
  const transitionStep: number = 255 / totalTransactions;
  const blueValue: number = Math.floor(255 - index * transitionStep);
  const greenValue: number = Math.floor(index * transitionStep);
  return `rgb(${blueValue}, ${greenValue}, 0)`;
};

const timeStyle: React.CSSProperties = {
  fontWeight: "bold",
};

const TimelineChart: React.FC = () => {
  return (
    <Card>
      <Timeline position="outlined">
        <h1 className="items-left font-bold text-xl">Recent Transactions</h1>
        {transactions.map((transaction: Transaction, index: number) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent style={timeStyle}>
              {transaction.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                style={{ borderColor: getColor(index) }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {transaction.description.includes("#") ? (
                <strong>
                  {transaction.description.split("#")[0]}
                  <br />
                  <span style={{ color: "blue" }}>
                    #{transaction.description.split("#")[1]}
                  </span>
                </strong>
              ) : (
                transaction.description
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
};

export default TimelineChart;
