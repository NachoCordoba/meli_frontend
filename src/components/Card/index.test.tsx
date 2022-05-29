import { render } from "@testing-library/react";
import Card from ".";

test("Render Card Component", async () => {
  render(<Card>Una Card de Prueba</Card>);
});
