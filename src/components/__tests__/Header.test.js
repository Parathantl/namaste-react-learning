import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../appStore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom';

test('Should load Header component with a Login button', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
    </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();

 })

 
test('Should load Header component with Cart Item', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart");
    expect(cartItems).toBeInTheDocument();

 })

 test('Should load Header component with Cart Item', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart");
    expect(cartItems).toBeInTheDocument();

 })


 test('Should load Header component with Cart', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();

 });

 it('Should change Login to Logout when user is logged clicked on it', () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();

 });