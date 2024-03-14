import Image from "next/image"
import { PostCategory } from "./PostCategory"

export function Hero() {
  return (
    <section className="max-w-[1200px] mt-6">
      <div className="w-[1200px] h-[600px] relative">
        <Image
          src="https://www.zoomtecnologia.com.br/wp-content/uploads/2020/12/thumbnail-datacenter-inteligente-huawei-fusionmodule.jpeg"
          alt="Datacenter"
          width={1200}
          height={0}
          className="rounded-xl h-[600px]"
        />

        <div className="bg-white rounded-xl absolute p-10 h-[304px] max-w-[598px] border-1 shadow-lg shadow-secondary_100 border-[#E8E8EA] left-16 -bottom-16">
          <PostCategory />

          <h1 className="text-secondary_800 text-4xl mt-4 font-semibold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>

          <div className="mt-6 flex flex-col items-start">
            <div className="flex items-center gap-5">
              <div className="flex gap-3 items-center">
                <Image
                  src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
                  alt=""
                  width={0}
                  height={0}
                  className="rounded-full w-9 h-9"
                />
                <strong className="font-medium text-secondary_400 font-work_sans">
                  Jason Francisco
                </strong>
              </div>
              <p className="text-secondary_400 font-normal">August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
