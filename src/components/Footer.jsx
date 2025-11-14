export const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-black">
        <div className="mx-auto mt-2 px-6 max-w-6xl rounded-2xl lg:px-5 py-12">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-y-0 items-center justify-between gap-x-11 w-full">
            <h6 className="text-[16px] leading-6 md:text-2xl font-medium lg:leading-8 tracking-normal normal-case no-underline self-start text-white">Notre app gratuite pour faciliter chaque étape de votre voyage !</h6>
            <div className="flex gap-6 items-center ">
                <img
                    alt="apps qr code"
                    loading="lazy"
                    width={64}
                    height={64}
                    className="hidden md:flex"
                    src="https://rail.ninja/_next/image?url=https%3A%2F%2Fback.rail.ninja%2Fsites%2Fdefault%2Ffiles%2F2025-02%2Fonelinkto_f2qe6d_0.webp&w=128&q=100"
                />
                <a
                    href=""
                    target="_blank"
                    className="bg-[rgba(255,255,255,0.1)] w-[130px] lg:w-[180px] h-16 flex items-center justify-center rounded-lg"
                >
                    <img
                        src="https://back.rail.ninja/sites/default/files/2024-10/apple_0-1_1.svg"
                        data-src="https://back.rail.ninja/sites/default/files/2024-10/apple_0-1_1.svg"
                        alt="app store icon"
                        height={86}
                        width={86}
                    />
                </a>
                <a
                    href=""
                    target="_blank"
                    className="bg-[rgba(255,255,255,0.1)] w-[130px] lg:w-[180px] h-16 flex items-center justify-center rounded-lg"
                >
                    <img
                        src="https://back.rail.ninja/sites/default/files/2024-10/google_0_1.svg"
                        data-src="https://back.rail.ninja/sites/default/files/2024-10/google_0_1.svg"
                        alt="google store icon"
                        height={86}
                        width={86}
                    />
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(26,26,26)]">
        <div className="mx-auto px-6 max-w-6xl rounded-2xl lg:px-5 py-12">
          <div class="grid gap-12 md:grid-cols-4">
              <div class="md:col-span-2">
                  <a aria-label="go home" class="block size-fit" href="/"
                      ><svg
                          class="text-white h-6 w-full"
                          viewBox="0 0 797 220"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.9543 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.6923 220 96.1803 220C87.2442 220 80 212.756 80 203.82V100ZM28 20C23.5817 20 20 23.5817 20 28V72C20 76.4183 23.5817 80 28 80H80V28C80 23.5817 76.4183 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
                              fill="url(#paint_logo)"
                          ></path>
                          <path
                              d="M272.366 96.0719V150.886C272.366 154.6 273.205 157.296 274.884 158.973C276.682 160.531 279.679 161.309 283.874 161.309H296.461V178.383H280.278C271.048 178.383 263.975 176.226 259.06 171.913C254.145 167.599 251.688 160.59 251.688 150.886V96.0719H240V79.3582H251.688V54.7368H272.366V79.3582H296.461V96.0719H272.366ZM306.723 128.421C306.723 118.477 308.761 109.671 312.837 102.003C317.032 94.3346 322.666 88.4039 329.739 84.2105C336.932 79.8973 344.843 77.7407 353.474 77.7407C361.266 77.7407 368.039 79.2982 373.793 82.4133C379.667 85.4086 384.342 89.1827 387.818 93.7356V79.3582H408.497V178.383H387.818V163.646C384.342 168.318 379.607 172.212 373.613 175.327C367.62 178.442 360.787 180 353.115 180C344.604 180 336.812 177.843 329.739 173.53C322.666 169.097 317.032 162.987 312.837 155.199C308.761 147.291 306.723 138.365 306.723 128.421ZM387.818 128.78C387.818 121.951 386.38 116.021 383.503 110.988C380.746 105.956 377.09 102.122 372.534 99.4865C367.979 96.8507 363.064 95.5327 357.79 95.5327C352.515 95.5327 347.6 96.8507 343.045 99.4865C338.49 102.003 334.774 105.777 331.897 110.809C329.14 115.721 327.761 121.592 327.761 128.421C327.761 135.25 329.14 141.241 331.897 146.393C334.774 151.545 338.49 155.498 343.045 158.254C347.72 160.89 352.635 162.208 357.79 162.208C363.064 162.208 367.979 160.89 372.534 158.254C377.09 155.618 380.746 151.784 383.503 146.752C386.38 141.6 387.818 135.61 387.818 128.78ZM444.052 66.2388C440.336 66.2388 437.219 64.9807 434.702 62.4647C432.184 59.9487 430.926 56.8336 430.926 53.1194C430.926 49.4052 432.184 46.2901 434.702 43.7741C437.219 41.258 440.336 40 444.052 40C447.648 40 450.705 41.258 453.222 43.7741C455.74 46.2901 456.999 49.4052 456.999 53.1194C456.999 56.8336 455.74 59.9487 453.222 62.4647C450.705 64.9807 447.648 66.2388 444.052 66.2388ZM454.122 79.3582V178.383H433.623V79.3582H454.122ZM499.735 45.3915V178.383H479.236V45.3915H499.735ZM518.017 128.421C518.017 118.477 520.055 109.671 524.13 102.003C528.326 94.3346 533.96 88.4039 541.033 84.2105C548.225 79.8973 556.137 77.7407 564.768 77.7407C572.56 77.7407 579.333 79.2982 585.087 82.4133C590.961 85.4086 595.636 89.1827 599.112 93.7356V79.3582H619.791V178.383H599.112V163.646C595.636 168.318 590.901 172.212 584.907 175.327C578.913 178.442 572.08 180 564.408 180C555.897 180 548.105 177.843 541.033 173.53C533.96 169.097 528.326 162.987 524.13 155.199C520.055 147.291 518.017 138.365 518.017 128.421ZM599.112 128.78C599.112 121.951 597.674 116.021 594.797 110.988C592.04 105.956 588.383 102.122 583.828 99.4865C579.273 96.8507 574.358 95.5327 569.084 95.5327C563.809 95.5327 558.894 96.8507 554.339 99.4865C549.784 102.003 546.068 105.777 543.191 110.809C540.433 115.721 539.055 121.592 539.055 128.421C539.055 135.25 540.433 141.241 543.191 146.393C546.068 151.545 549.784 155.498 554.339 158.254C559.014 160.89 563.929 162.208 569.084 162.208C574.358 162.208 579.273 160.89 583.828 158.254C588.383 155.618 592.04 151.784 594.797 146.752C597.674 141.6 599.112 135.61 599.112 128.78ZM665.415 93.7356C668.412 88.7035 672.368 84.8096 677.283 82.0539C682.318 79.1784 688.251 77.7407 695.084 77.7407V98.9474H689.87C681.838 98.9474 675.724 100.984 671.529 105.058C667.453 109.131 665.415 116.2 665.415 126.264V178.383H644.917V79.3582H665.415V93.7356ZM751.328 128.96L797 178.383H769.309L732.627 135.789V178.383H712.129V45.3915H732.627V122.67L768.59 79.3582H797L751.328 128.96Z"
                              fill="currentColor"
                          ></path>
                          <defs>
                              <linearGradient id="paint_logo" x1="90" y1="0" x2="90" y2="220" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#9B99FE"></stop>
                                  <stop offset="1" stop-color="#2BC8B7"></stop>
                              </linearGradient>
                          </defs></svg>
                          </a>

                  <div class="flex flex-wrap  gap-6 text-sm py-6">
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                              ></path></svg></a>
                              <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                              ></path></svg></a>
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                              ></path></svg></a><a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="TikTok"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                              ></path></svg></a>
                  </div>
              </div>
              <div class="md:col-span-2 md:grid-cols-2 grid  gap-6">
                  <div class="space-y-4 text-sm">
                      <span class="block font-medium text-muted-foreground">Liens utiles</span>
                      <div className="grid gap-y-3 gap-x-4 grid-cols-4  md:flex md:flex-wrap md:w-full">
                      <a class="text-white hover:text-primary block duration-150"><span>Features</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Solution</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Customers</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Pricing</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Help</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>About</span></a>
                      </div>

                  </div>
                  <div class="space-y-4 text-sm">
                      <span class="block font-medium text-muted-foreground">Payment Methods</span>
                      <div className="payment-body grid gap-y-3 gap-x-4 grid-cols-5 md:flex md:flex-wrap md:w-full">
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/UNIONPAY-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/MC-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/VISA-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/AMEX-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/JCB-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/DINERS-76x52.png"
                          alt=""
                        />


                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/DISCOVER-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuThirdpay/APPLE-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuThirdpay/PAYPAL-76x52.png"
                          alt=""
                        />

                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/thirdpay/COINS-76x52.png"
                          alt=""
                        />
                      </div>
                  </div>
              </div>
          </div>
          <div class="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
    <small class="text-white order-last block text-center text-sm md:order-first">
        ©2025 kimiia, All rights reserved
    </small>
    <form action="">
        <div class="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.75rem"
                height="0.75rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevrons-up-down pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75"
            >
                <path d="m7 15 5 5 5-5"></path>
                <path d="m7 9 5-5 5 5"></path></svg>
                <select
                class="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                name="language"
            >
                <option value="1">English</option>
                <option value="2">Espanol</option>
                <option value="3">Français</option>
                <option value="4">Swahili</option>
                <option value="5">Lingala</option>
            </select>
        </div>
    </form>
</div>

        </div>
      </div>
    </footer>
  )
}
