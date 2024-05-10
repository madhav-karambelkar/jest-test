import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import mainApiService from "./Utilities/API/ApiService";

const consoleSpy = jest.spyOn(console, "log");

jest.mock("./Utilities/API/ApiService", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

const apiMockService = mainApiService as any

describe("Renders App Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should render sign up card with text Sign Up Form", () => {
    render(<App />);
    expect(screen).toBeTruthy();
  });

  test("on change of input field it should call the API to get the pokemon data", async () => {
    render(<App />);
    apiMockService.mockImplementationOnce(() => {
      return {
        data: {
          height: 10,
          weight: 85,
          name: "pikachu",
          sprites: {
            front_shiny: "https://www.google.com",
          },
          game_indices: [1, 2, 3],
        },
      };
    });

    const inp: any = screen.getByRole('textbox');
    userEvent.type(inp, "pikachu");

    expect(inp.value).toBe('pikachu')

    const btn: any = screen.getByRole('button', {name: 'Search'});
    fireEvent.click(btn);

    const name =  await screen.findByText("pikachu");
    const weight =  await screen.findByText("20 lbs");

    expect(name).toBeInTheDocument();
    expect(weight).toBeInTheDocument()
  });

  test("on change it should return error", async () => {
    render(<App />);

    apiMockService.mockImplementationOnce(() => {
      return {
        error: "No Data Found"
      }
    });

    const inp: any = screen.getByRole('textbox');
    userEvent.type(inp, "pikachu");

    expect(inp.value).toBe('pikachu')

    const btn: any = screen.getByRole('button');
    fireEvent.click(btn);

    const name =  await screen.findByText("No Data Found");

    expect(name).toBeInTheDocument();
  });

  test("if click on search without the name it should not call the API", async () => {
    render(<App />);
    apiMockService.mockImplementationOnce(() => {
      return {
        data: {
          height: 10,
          weight: 85,
          name: "pikachu",
          sprites: {
            front_shiny: "https://www.google.com",
          },
          game_indices: [1, 2, 3],
        },
      };
    });

    const btn: any = screen.getByRole('button');
    fireEvent.click(btn);

    expect(apiMockService).toBeCalledTimes(0);
  });
});



// import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import axios from "axios";
// import App from "./App";

// jest.mock("axios", () => jest.fn());

// const axiosMock = axios as any;

// const consoleSpy = jest.spyOn(console, "log");

// describe("Renders App Component", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("it should render sign up card with text Sign Up Form", () => {
//     render(<App />);
//     expect(screen).toBeTruthy();
//   });

//   test("on change of input field it should call the API to get the pokemon data", async () => {
//     render(<App />);

//     axiosMock.mockImplementationOnce(() => {
//       return {
//         data: {
//           height: 10,
//           weight: 85,
//           name: "pikachu",
//           sprites: {
//             front_shiny: "https://www.google.com",
//           },
//           game_indices: [1, 2, 3],
//         },
//       };
//     });

//     const inp: any = screen.getByRole("textbox");
//     userEvent.type(inp, "pikachu");

//     expect(inp.value).toBe("pikachu");

//     const btn: any = screen.getByRole("button");
//     fireEvent.click(btn);

//     const name = await screen.findByText("pikachu");
//     const weight = await screen.findByText("20 lbs");

//     expect(name).toBeInTheDocument();
//     expect(weight).toBeInTheDocument();
//   });

//   test("on error", async () => {
//     render(<App />);
//     axiosMock.mockRejectedValue(new Error('Not Found'));


//     const inp: any = screen.getByRole("textbox");
//     userEvent.type(inp, "pikachu");

//     expect(inp.value).toBe("pikachu");

//     const btn: any = screen.getByRole("button");
//     fireEvent.click(btn);


//     const error = await screen.findByText(/not found/i);
    
//     expect(error).toBeInTheDocument()

//   });
// });
