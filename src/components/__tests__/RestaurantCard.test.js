import { render, screen } from "@testing-library/react"
import MockData from "../mocks/resData.json"
import '@testing-library/jest-dom';
import RestaurantCard from "../RestaurantCard";

it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard restaurant={MockData} />);
    const name = screen.getByText("Cream and Fudge");
    expect(name).toBeInTheDocument();
});

// it("Should render RestaurantCard component with promotoed label", () => {
// 
// });