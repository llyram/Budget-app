import Container from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <Container className="my-4">
      {/* Stack for the header with the heading and two buttons - add budget, add expese */}
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 classname="me-auto">Budgets</h1>
        <Button variant="primary" className="ms-auto">
          Add Budget
        </Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard name="Entertainment" gray amount={200} max={1000}></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
