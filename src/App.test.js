import { render, fireEvent, screen, } from '@testing-library/react';
import ReservationForm from './component/ReservationForm';
import userEvent from '@testing-library/user-event';
// import ConfirmationPage from './component/ConfirmationPage';

describe('ReservationForm', () => {
    test('renders form with all fields', () => {
        render(<ReservationForm />);

        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);
        const submitButton = screen.getByRole('button', { name: /make your reservation/i });

        expect(dateInput).toBeInTheDocument();
        expect(timeSelect).toBeInTheDocument();
        expect(guestsInput).toBeInTheDocument();
        expect(occasionSelect).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('displays error message when date is not selected', async () => {
        render(<ReservationForm />);

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        fireEvent.click(submitButton);
        const errorMessage = await screen.findByText(/please choose a date/i);

        expect(errorMessage).toBeInTheDocument();
    });

    test('displays error message when time is not selected', async () => {
        render(<ReservationForm />);

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        fireEvent.click(submitButton);
        const errorMessage = await screen.findByText(/please choose a time/i);

        expect(errorMessage).toBeInTheDocument();
    });

    test('displays error message when number of guests is not specified', async () => {
        render(<ReservationForm />);

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        fireEvent.click(submitButton);
        const errorMessage = await screen.findByText(/please specify the number of guests/i);

        expect(errorMessage).toBeInTheDocument();
    });

    test('displays error message when occasion is not selected', async () => {
        render(<ReservationForm />);

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        fireEvent.click(submitButton);
        const errorMessage = await screen.findByText(/please select an occasion/i);

        expect(errorMessage).toBeInTheDocument();
    });

    test('shows confirmation message after form submission', async () => {
        render(<ReservationForm />);

        const dateInput = screen.getByLabelText('Choose date');
        const timeSelect = screen.getByLabelText('Choose time');
        const guestsInput = screen.getByLabelText('Number of guests');
        const occasionSelect = screen.getByLabelText('Occasion');
        const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });

        userEvent.type(dateInput, '2023-05-05');
        userEvent.selectOptions(timeSelect, '19:00');
        userEvent.type(guestsInput, '2');
        userEvent.selectOptions(occasionSelect, 'Birthday');
        fireEvent.click(submitButton);

        const confirmationMessage = await screen.findByText('Reservation Confirmation');
        const reservationInfo = screen.getByText('Your reservation information:');
        const selectDate = screen.getByText('Select Date: 2023-05-05');
        const selectTime = screen.getByText('Select Time: 19:00');
        const numberOfGuests = screen.getByText('Guests: 2');
        const occasion = screen.getByText('Occasion: Birthday');
        const thankYouMessage = screen.getByText('Thank you for your reservation!');

        expect(confirmationMessage).toBeInTheDocument();
        expect(reservationInfo).toBeInTheDocument();
        expect(selectDate).toBeInTheDocument();
        expect(selectTime).toBeInTheDocument();
        expect(numberOfGuests).toBeInTheDocument();
        expect(occasion).toBeInTheDocument();
        expect(thankYouMessage).toBeInTheDocument();
    });

    it('displays error message when user leaves input field without input', async () => {
        render(<ReservationForm />);

        // select input fields and simulate click and tab
        const dateInput = screen.getByLabelText('Choose date');
        userEvent.click(dateInput);
        userEvent.tab();

        const timeInput = screen.getByLabelText('Choose time');
        userEvent.click(timeInput);
        userEvent.tab();

        const guestsInput = screen.getByLabelText('Number of guests');
        userEvent.click(guestsInput);
        userEvent.tab();

        const occasionInput = screen.getByLabelText('Occasion');
        userEvent.click(occasionInput);
        userEvent.tab();

        // check that error messages are displayed for each input field
        expect(await screen.findByText('Please choose a date.')).toBeInTheDocument();
        expect(await screen.findByText('Please choose a time.')).toBeInTheDocument();
        expect(await screen.findByText('Please specify the number of guests.')).toBeInTheDocument();
        expect(await screen.findByText('Please select an occasion.')).toBeInTheDocument();
    });
});
