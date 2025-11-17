export const Header = () => {
    return(
        <div 
            className="
                min-h-[560px] pb-6 w-full relative
                before:content-['']
                before:absolute
                before:inset-0
                before:z-0
                before:bg-linear-to-b before:from-black before:to-transparent
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-0
                after:right-0
                after:h-1/2
                after:z-0
                after:bg-linear-to-t
                after:from-black
                after:to-transparent
            "
        >

            <div className="absolute inset-0 -z-20">
                <img
                    src="https://back.rail.ninja/sites/default/files/2025-08/rn_main_page_bg.webp"
                    alt="Home banner"
                    className="size-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="absolute inset-0 z-10 text-white mx-auto max-w-7xl px-6">
                <div className="flex justify-center flex-col h-full gap-y-14">
                    <h1 className="lg:ml-28 m-0 text-[32px] font-medium tracking-[0] leading-10">La façon la plus simple  <br /> de réserver des billets de train</h1>
                    <div className="
                        form-area grid
                        [grid-template-areas:'fields''footer']
                        grid-rows-[auto_32px]
                        items-start
                        gap-6
                        w-full
                        mx-auto
                        md:[grid-template-areas:'switcher''fields''footer']
                        md:grid-rows-[44px_auto_32px]
                    ">
                        <div className="[grid-area:switcher] md:block hidden w-fit bg-[#595959] rounded-[72px] text-[14px]">
                            <div className="flex">
                                <label 
                                    htmlFor="" 
                                    className="
                                    relative
                                    px-8 py-2
                                    cursor-pointer
                                    bg-white
                                    rounded-[72px]
                                    text-[#ffaf01]
                                    shadow-[0_1px_2px_0_rgba(0,0,0,0.03),0_1px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_0_rgba(0,0,0,0.02)]
                                    after:content-['']
                                    after:absolute
                                    after:-z-1
                                    after:w-full
                                    after:h-full
                                    after:top-0
                                    after:start-0
                                    after:rounded-inherit
                                    after:pointer-events-none
                                    after:transition-colors
                                    after:duration-200">
                                    <input 
                                        type="radio"
                                        className="absolute top-0 start-0 w-0 h-0 opacity-0 pointer-events-none" 
                                    />
                                    <div className="">One Way</div>
                                </label>

                                <label 
                                    htmlFor="" 
                                    className="
                                    relative
                                    px-8 py-2
                                    cursor-pointer
                                    rounded-[72px]
                                    shadow-[0_1px_2px_0_rgba(0,0,0,0.03),0_1px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_0_rgba(0,0,0,0.02)]
                                    after:content-['']
                                    after:absolute
                                    after:-z-1
                                    after:w-full
                                    after:h-full
                                    after:top-0
                                    after:start-0
                                    after:rounded-inherit
                                    after:pointer-events-none
                                    after:transition-colors
                                    after:duration-200">
                                    <input 
                                        type="radio"
                                        className="absolute top-0 start-0 w-0 h-0 opacity-0 pointer-events-none" 
                                    />
                                    <div className="">Round Trip</div>
                                </label>
                            </div>
                        </div>
                        
                        <div className="[grid-area:fields] flex gap-4 w-full h-[72px] text-[#191919]">
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export const FormLayout= ({ Switcher, Fields, Footer }) =>  {
  return (
    <div
      className="
        grid
        [grid-template-areas:'fields''footer']
        grid-rows-[auto_32px]
        items-start
        gap-6
        w-full
        mx-auto

        md:[grid-template-areas:'switcher''fields''footer']
        md:grid-rows-[44px_auto_32px]
      "
    >
      {/* Switcher */}
      <div className="[grid-area:switcher] md:block hidden w-fit">
        {Switcher}
      </div>

      {/* Fields */}
      <div className="[grid-area:fields]">
        {Fields}
      </div>

      {/* Footer */}
      <div className="[grid-area:footer]">
        {Footer}
      </div>
    </div>
  );
}
