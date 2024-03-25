import logo from "@/assets/logo.svg"
import { Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-[#E8E8EA] mt-20 font-jakarta_sans">
      <div className="max-w-[1216px] w-full m-auto mt-16 flex items-start justify-between">
        <div>
          <strong className="text-lg font-semibold">About</strong>
          <p className="text-[#696A75] mt-3 max-w-[280px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <p className="mt-6">
            <span className="font-semibold">Email: </span>info@jstemplate.net
          </p>
          <p>
            <span className="font-semibold">Phone: </span>880 123 456 789
          </p>
        </div>

        <div className="flex items-center justify-center gap-20 ">
          <div>
            <strong className="font-semibold text-lg">Quick Link</strong>
            <ul className="mt-6 text-[#3B3C4A] flex flex-col gap-2">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Archived</li>
              <li>Author</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Category</h3>
            <ul className="mt-6 text-[#3B3C4A] flex flex-col gap-2">
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
            <span className="text-xl text-[#181A2A] font-semibold leading-5">
              Weekly Newsletter
            </span>
            <p className="text-[#696A75] mt-2">
              Get blog articles and offers via email
            </p>
          </div>

          <div className="mt-[30px]">
            <label className="flex border-2 border-[#DCDDDF] rounded-md px-4 py-3 items-center h-[48px] gap-[10px] w-[320px]">
              <input
                type="email"
                placeholder="Your Email"
                className="outline-none flex-1"
              />

              <div className="text-secondary_500">
                <Mail size={20} />
              </div>
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
            <p className="text-xl">
              Meta<span className="font-extrabold">Blog</span>
            </p>
            <p>© JS Template 2023. All Rights Reserved.</p>
          </div>
        </div>

        <ul className="flex gap-8 text-secondary_600">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  )
}
