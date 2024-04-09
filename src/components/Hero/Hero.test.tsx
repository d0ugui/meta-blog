import { render, screen } from "@testing-library/react"
import { Hero } from "./"

describe("Hero component tests", () => {
  const mockPost = {
    id: "213",
    title: "Post One",
    content: "asdsadiuashdas",
    slug: "one",
    createdAt: new Date(),
    categoryId: "123sd",
    authorId: "123sd",
    thumbnail:
      "https://media.istockphoto.com/id/1314080931/photo/video-call-online-conference-over-shoulder-view-of-african-american-man-at-computer-screen.jpg?s=2048x2048&w=is&k=20&c=ZVQbj-rdIVO63vs8EgBp63bzdtSwLopNkRpOvFVRyPA=",
    user: {
      id: "213asd",
      name: "Douglas Oliveira",
      email: "douglas@douglas.com",
      userPhoto: "https://avatars.githubusercontent.com/u/63167055?v=4"
    }
  }

  test("should render hero component without error and with correclty infos", () => {
    render(<Hero post={mockPost} />)

    const title = screen.getByRole("heading", {
      name: "Post One"
    })

    // check if the element is on the page
    expect(title).toBeInTheDocument()
  })
})
