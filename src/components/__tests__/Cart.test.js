import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../mocks/restMenu.json';
import { Provider } from 'react-redux';
import appStore from '../../appStore'
import Header from '../Header';
import Cart from '../Cart';

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}));

it("Should load restaurant Menu component", async() => {
    await act(async () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>)
    })

    const accordionHeader = screen.getByText('Large Pizzas (4)');
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId('foodItems');

    expect(foodItems.length).toBe(4);

    const addToCartButton = screen.getAllByRole("button", {name : "Add +"});
    
    fireEvent.click(addToCartButton[0]);

    // expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();
    fireEvent.click(addToCartButton[1]);

    // expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(6);

    fireEvent.click(screen.getByRole('button', {name : 'Clear Cart'}));

    expect(screen.getAllByTestId('foodItems').length).toBe(4);

    expect(screen.getByText('Cart is empty')).toBeInTheDocument();

});
