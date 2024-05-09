import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const consoleSpy = jest.spyOn(console, "log")

describe('Renders App Component', ()=>{
  afterEach(()=>{
    jest.clearAllMocks()
  })

  test('it should render sign up card with text Sign Up Form', () => {
    render(<App />);
    const titleText = screen.getByText('Sign Up Form')
    expect(screen).toBeTruthy();
    expect(titleText).toBeInTheDocument()
  });

  test('it should render email input inside sign up card with its properties', () => {
    render(<App />);

    const inp = screen.getByLabelText(/email address/i)
    
    expect(inp).toBeInTheDocument()
    expect(inp).toHaveAttribute('name', 'email')
    expect(inp).toHaveAttribute('id', 'email')
    expect(inp).toHaveAttribute('type', 'text')
    expect(inp).toHaveAttribute('placeholder', 'Email Address')

  });

  test('it should render fullname input inside sign up card with its properties', () => {
    render(<App />);

    const inp = screen.getByLabelText('Name')

    expect(inp).toBeInTheDocument()
    expect(inp).toHaveAttribute('name', 'name')
    expect(inp).toHaveAttribute('id', 'name')
    expect(inp).toHaveAttribute('type', 'text')
    expect(inp).toHaveAttribute('placeholder', 'Full Name')
    
  });

  test('it should render password input inside sign up card with its properties', () => {
    render(<App />);

    const inp = screen.getByLabelText('Password')

    expect(inp).toBeInTheDocument()
    expect(inp).toHaveAttribute('name', 'password')
    expect(inp).toHaveAttribute('id', 'password')
    expect(inp).toHaveAttribute('type', 'password')
    expect(inp).toHaveAttribute('placeholder', 'Password')
    
  });

  test('it should render city input inside sign up card with its properties', () => {
    render(<App />);

    const inp = screen.getByLabelText('City')

    expect(inp).toBeInTheDocument()
    expect(inp).toHaveAttribute('name', 'city')
    expect(inp).toHaveAttribute('id', 'city')
    expect(inp).toHaveAttribute('type', 'text')
    expect(inp).toHaveAttribute('placeholder', 'City')

  });

  test('it should render submit button inside sign up card with its properties', () => {
    render(<App />);

    const btn = screen.getByRole('button')

    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('class', 'btn btn-primary w-100 mt-5')
    expect(btn).toHaveAttribute('type', 'submit')
  });

  test('it should submit the form while clicking on submit button', () => {

    render(<App />);
    const btn = screen.getByRole('button', {name: 'Submit'})

    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)

    expect(consoleSpy).toReturn()
    expect(consoleSpy).toBeCalledWith('Form Submitted')
    
  });

  test('it should check on change method', () => {

    render(<App />);
    const inp: any = screen.getByLabelText('City')
    fireEvent.change(inp, {target: {value: 'Indore'}})
    // userEvent.type(inp, 'Indore')


    expect(inp.value).toBe('Indore')
    
  });

  test('it should match snapshot', () => {

   const {container} = render(<App />);
   
   expect(container).toMatchSnapshot()
    
 });
})
