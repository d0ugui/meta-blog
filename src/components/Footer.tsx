import logo from "@/assets/logo.svg"
import { Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-[#E8E8EA] mt-20 font-jakarta_sans">
      <div className="max-w-[1200px] w-full m-auto mt-16 flex">
        <div>
          <strong className="text-lg font-semibold">About</strong>
          <p className="text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <p className="mt-6">
            <strong>Email: </strong>info@jstemplate.net
          </p>
          <p>
            <strong>Phone: </strong>880 123 456 789
          </p>
        </div>

        <div className="flex items-center justify-center gap-20 mx-[118px]">
          <div>
            <h3 className="font-semibold">Quick Link</h3>
            <ul className="mt-6">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Archived</li>
              <li>Author</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Category</h3>
            <ul className="mt-6">
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Sports</li>
            </ul>
          </div>
        </div>

        <div className="bg-white px-9 py-8 rounded-xl">
          <div className="text-center">
            <strong>Weekly Newsletter</strong>
            <p>Get blog articles and offers via email</p>
          </div>

          <div className="mt-[30px]">
            <label className="flex border-2 border-[#DCDDDF] rounded-md px-4 py-3 items-center h-[48px]">
              <input
                type="email"
                placeholder="Your Email"
                className="outline-none flex-1"
              />
              <Mail size={20} />
            </label>

            <button className="bg-primary text-white font-work_sans font-medium py-3 px-[120px] rounded-md mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] w-full m-auto flex items-center justify-between py-8 border-t-2 border-[#DCDDDF] mt-16">
        <div className="flex gap-2">
          <Image src={logo} alt="Logo" width={48} height={48} />

          <div>
            <p>
              Meta<span className="font-extrabold">Blog</span>
            </p>
            <p>© JS Template 2023. All Rights Reserved.</p>
          </div>
        </div>

        <ul className="flex gap-8">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  )
}
