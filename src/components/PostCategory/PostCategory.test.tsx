import { render, screen } from "@testing-library/react"
import { PostCategory } from "./"

describe("PostCategory component tests", () => {
  test("should render postCategory component without error and with correclty title", () => {
    render(<PostCategory title="Technology" />)

    const techCategory = screen.getByText("Technology")

    // check if the element is on the page
    expect(techCategory).toBeInTheDocument()
  })
})
