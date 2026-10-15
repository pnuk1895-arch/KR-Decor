const reviews = [
  {
    name: "Aanya Sharma",
    project: "Bespoke Residence, South Delhi",
    review:
      "KR Decor transformed our bare apartment into a warm, inviting sanctuary with their exquisite full home interior and work. Their attention to detail was truly exceptional.",
  },
  {
    name: "Vikram Mehta",
    project: "Modern Kitchen, Gurugram",
    review:
      "The perfect balance of aesthetics and flawless modular work. They delivered our bespoke modular kitchen and TV units ahead of schedule without compromising on the luxury finish.",
  },
  {
    name: "Priya & Rohan",
    project: "Full Home Interior, Jasola",
    review:
      "A truly boutique experience from consultation to final handover. Their architecture design and quiet luxury approach reflect in every corner of our modular wardrobe and living space.",
  },
];

export default function ClientReviews() {
  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-18 sm:px-8 sm:py-22  lg:px-12 lg:py-25 2xl:px-14">
        {/* Section heading */}
        <div className="border-b border-[#0000000d] pb-7 sm:pb-9 lg:pb-10">
          <h2 className="font-heading text-[36px] font-normal leading-[1.08] tracking-[-0.055em] sm:text-[44px] md:text-[52px] lg:text-[64px]">
            Client Reviews
          </h2>
        </div>

        {/* Reviews grid: normal elements, no slider */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {reviews.map((item) => (
            <article
              key={item.name}
              className="flex min-w-0 flex-col bg-[#f5f5f5] px-6 py-10 sm:px-6 sm:py-8 lg:px-8 lg:py-9"
            >
              {/* Quote mark */}
              <span
                aria-hidden="true"
                className="font-serif text-[56px] leading-[0.8] text-[#c8c8c8]"
              >
                “
              </span>

              {/* Review text */}
              <p className="mt-2 text-[14px] leading-[1.65] tracking-[0.01em] text-[#666666] sm:text-[13px] lg:text-[14px]">
                {item.review}
              </p>

              {/* Reviewer details */}
              <div className="mt-7 border-t border-[#00000008] pt-6 sm:mt-8 lg:mt-auto lg:pt-7">
                <h3 className="font-heading text-[18px] font-normal leading-tight tracking-[-0.02em] sm:text-[19px]">
                  {item.name}
                </h3>

                <p className="mt-2 max-w-60 text-[9px] leading-[1.6] tracking-[0.12em] text-[#858585] uppercase">
                  {item.project}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
