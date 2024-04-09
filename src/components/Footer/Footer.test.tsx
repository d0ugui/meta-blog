import { render, screen } from "@testing-library/react"
import { Footer } from "./"

describe("Footer component tests", () => {
  test("should render the component without error", () => {
    render(<Footer />)

    const textAbout = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    )

    expect(textAbout).toBeInTheDocument()
  })
})
