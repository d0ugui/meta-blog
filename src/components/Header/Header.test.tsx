import { render, screen } from "@testing-library/react"
import { Header } from "./"

describe("Header component tests", () => {
  test("should render the meta blog heading", () => {
    render(<Header />)

    const header = screen.getByRole("heading", {
      name: "Meta Blog"
    })

    expect(header).toBeInTheDocument()
  })

  it("should render correcly links", () => {
    render(<Header />)

    const homeLink = screen.getByText("Home")
    const contactLink = screen.getByText("Contact")
    const pagesLink = screen.getByText("Pages")

    expect(homeLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
    expect(pagesLink).toBeInTheDocument()
  })
})
