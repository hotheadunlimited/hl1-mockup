export default function HL1HomepageMockup() {
  const featuredProperties = [
    {
      island: 'O‘ahu',
      title: 'Lihiwai',
      price: '$32,000,000',
      status: 'Private Representation',
      note: 'Historic upper Nu‘uanu estate with architectural pedigree, restored presence, and rare private scale.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop'
    },
    {
      island: 'Kaua‘i',
      title: 'Anini Vista',
      price: '$27,500,000',
      status: 'Public Collection',
      note: 'Bluff-top architecture, reef orientation, and a land position that defines value over time.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop'
    },
    {
      island: 'Hawai‘i Island',
      title: 'Kohanaiki Estate',
      price: '$18,950,000',
      status: 'Current Offering',
      note: 'A private-club setting with ocean orientation and contemporary island architecture.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1800&auto=format&fit=crop'
    }
  ]

  const inventoryProperties = [
    {
      island: 'Kaua‘i',
      title: 'Hanalei Bay Residence',
      price: '$14,800,000',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop'
    },
    {
      island: 'Maui',
      title: 'South Maui Ocean Estate',
      price: '$21,000,000',
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop'
    },
    {
      island: 'O‘ahu',
      title: 'Kāhala Beach Estate',
      price: 'Upon Request',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      island: 'Hawai‘i Island',
      title: 'Kohanaiki Estate 23',
      price: '$16,750,000',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      island: 'Kaua‘i',
      title: 'North Shore Bluff Estate',
      price: '$19,500,000',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const intelligence = [
    ['Market Reports', 'Luxury Market Report'],
    ['Commentary', 'Privacy, Inventory, and the Hawai‘i Market'],
    ['Articles', 'Land, Architecture, and Island Context'],
    ['Press', 'Recognition']
  ]

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#171512] font-sans selection:bg-[#171512] selection:text-white">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2400&auto=format&fit=crop"
          alt="Hawai‘i landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-92"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/12 to-black/18" />

        {/* Navigation */}
        <header className="absolute top-0 left-0 right-0 z-30">
          <div className="px-6 md:px-12 py-6 flex items-center justify-between uppercase tracking-[0.22em] text-[10px] text-white">
            <div className="text-lg tracking-[0.04em] font-medium">HL1</div>
            <nav className="hidden md:flex items-center gap-9 text-white/72">
              <a href="#collection" className="hover:text-white transition">Collection</a>
              <a href="#intelligence" className="hover:text-white transition">Intelligence</a>
              <a href="#rentals" className="hover:text-white transition">Rentals</a>
              <a href="#representation" className="hover:text-white transition">Representation</a>
            </nav>
            <a href="#private" className="hidden md:block text-white/58 hover:text-white transition">Private Access</a>
          </div>
        </header>

        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="px-6 md:px-12 pb-8 md:pb-10">
            <div className="max-w-[1600px] mx-auto">
              <div className="grid grid-cols-12 gap-8 items-end">
                <div className="col-span-12 md:col-span-7">
                  <div className="uppercase tracking-[0.34em] text-[10px] text-white/58 mb-7">
                    HL1 / Hawai‘i Life
                  </div>

                  <h1 className="text-[13vw] md:text-[5.8vw] leading-[0.96] tracking-[-0.04em] font-light max-w-5xl text-white">
                    A distinct practice for Hawaiʻi’s upper-tier property market.
                  </h1>
                </div>

                <div className="col-span-12 md:col-span-3 md:col-start-10">
                  <p className="border-t border-white/18 pt-6 text-[15px] leading-8 text-white/70">
                    In Hawaiʻi, significant properties require representation informed by place and discretion. HL1 was built to provide it.
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
                <a href="#collection" className="inline-flex items-center justify-center border border-white/28 px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.22em] text-white/82 hover:bg-white hover:text-black transition">
                  View Collection
                </a>

                <a href="#private" className="inline-flex items-center justify-center border border-white/14 px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.22em] text-white/58 hover:border-white/35 hover:text-white transition">
                  Private Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Private Distinction */}
      <section id="collection" className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-28 uppercase tracking-[0.34em] text-[10px] text-black/42">Collection</div>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <h2 className="text-[9vw] md:text-[5.1vw] leading-[0.98] tracking-[-0.04em] font-light max-w-6xl">
              Not every important property is publicly offered.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-5xl text-[15px] leading-8 text-black/64">
              <p>
                Some properties are represented publicly through the Collection. Others remain more discreet, shared selectively through private relationships, controlled access, or direct introduction.
              </p>
              <p>
                For many clients, privacy, timing, and controlled visibility are part of the representation itself. Visibility is offered, not assumed.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[10px] uppercase tracking-[0.22em] text-black/70 hover:text-black transition">
                View the Collection <span>→</span>
              </a>
              <a href="#private" className="inline-flex items-center gap-3 border-b border-black/20 pb-2 text-[10px] uppercase tracking-[0.22em] text-black/48 hover:text-black transition">
                View Private Collection <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Sequence */}
      <section className="pb-0">
        <div className="space-y-px bg-black">
          {featuredProperties.map((item, index) => (
            <article
              key={item.title}
              className="relative min-h-screen overflow-hidden bg-black text-white group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-92 group-hover:scale-[1.015] transition duration-[1400ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-black/18" />

              <div className="relative z-10 min-h-screen flex items-end px-6 md:px-12 pb-10 md:pb-14">
                <div className="max-w-[1600px] mx-auto w-full">
                  <div className="grid grid-cols-12 gap-8 items-end">
                    <div className="col-span-12 md:col-span-7">
                      <div className="uppercase tracking-[0.28em] text-[10px] text-white/56 mb-5">
                        {item.island}
                      </div>

                      <h2 className="text-[12vw] md:text-[5.6vw] leading-[0.96] tracking-[-0.04em] font-light max-w-5xl">
                        {item.title}
                      </h2>
                    </div>

                    <div className="col-span-12 md:col-span-3 md:col-start-10">
                      <div className="border-t border-white/18 pt-6">
                        <div className="flex items-center justify-between gap-6 mb-5">
                          <div className="uppercase tracking-[0.22em] text-[10px] text-white/42">
                            {item.status}
                          </div>
                          <div className="text-white/56 text-sm tracking-[0.08em]">
                            {item.price}
                          </div>
                        </div>

                        <p className="text-[15px] leading-8 text-white/70 mb-8">
                          {item.note}
                        </p>

                        <a
                          href="#"
                          className="inline-flex items-center gap-3 border-b border-white/28 pb-2 text-[10px] uppercase tracking-[0.22em] text-white/62 hover:text-white transition"
                        >
                          View Property <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Inventory Layer */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#f6f1e8] overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-5">
              <div className="uppercase tracking-[0.34em] text-[10px] text-black/42 mb-8">
                Properties
              </div>
              <h2 className="text-[10vw] md:text-[5vw] leading-[0.98] tracking-[-0.04em] font-light max-w-4xl">
                Browse by the geography that defines the market.
              </h2>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="relative h-[260px] overflow-hidden">
                <div className="absolute left-[10%] top-[54%] w-[78%] border-t border-black/18 rotate-[-8deg]" />
                {[
                  ['Kaua‘i', '08', 'left-[9%] top-[22%]', 'w-20 h-12'],
                  ['O‘ahu', '11', 'left-[32%] top-[50%]', 'w-16 h-16'],
                  ['Maui', '07', 'left-[58%] top-[38%]', 'w-24 h-14'],
                  ['Hawai‘i', '09', 'left-[79%] top-[60%]', 'w-30 h-20']
                ].map(([name, count, pos, size]) => (
                  <button key={name} className={`absolute ${pos} group text-left`}>
                    <div className={`${size} rounded-[54%_46%_58%_42%] border border-black/20 bg-black/[0.03] rotate-[-18deg] group-hover:bg-black/[0.08] transition`} />
                    <div className="mt-3 uppercase tracking-[0.2em] text-[9px] text-black/42 group-hover:text-black transition">
                      {name} · {count}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {['All Islands', 'Kaua‘i', 'O‘ahu', 'Maui', 'Hawai‘i Island', 'Private'].map((filter, index) => (
              <button
                key={filter}
                className={`${index === 0 ? 'bg-black text-white border-black' : 'border-black/18 text-black/52 hover:border-black/35 hover:text-black'} border px-5 py-3 rounded-full text-[10px] uppercase tracking-[0.22em] transition`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="-mr-6 md:-mr-12 overflow-x-auto pb-4">
            <div className="flex gap-5 md:gap-6 min-w-max pr-6 md:pr-12">
              {inventoryProperties.map((item) => (
                <article key={item.title} className="w-[260px] md:w-[340px] group cursor-pointer">
                  <div className="relative h-[390px] md:h-[480px] overflow-hidden bg-black mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-92 group-hover:scale-[1.025] transition duration-[1000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>

                  <div className="border-t border-black/14 pt-4">
                    <div className="uppercase tracking-[0.22em] text-[10px] text-black/42 mb-3">
                      {item.island}
                    </div>
                    <h3 className="text-2xl md:text-3xl leading-[1] tracking-[-0.025em] font-light mb-3">
                      {item.title}
                    </h3>
                    <div className="text-sm text-black/50 tracking-[0.05em]">
                      {item.price}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-black/12 pt-6">
            <p className="text-sm text-black/46 max-w-md leading-7">
              The Collection includes public offerings, privately represented properties, and properties presented through controlled access.
            </p>
            <a href="#" className="hidden md:inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[10px] uppercase tracking-[0.22em] text-black/60 hover:text-black transition">
              View Full Collection <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Private Collection Feature */}
      <section id="private" className="bg-[#171512] text-white px-6 md:px-12 py-28 md:py-36 overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="uppercase tracking-[0.34em] text-[10px] text-white/42 mb-10">Private</div>
            <h2 className="text-[11vw] md:text-[5.6vw] leading-[0.94] tracking-[-0.045em] font-light">
              Represented, not advertised.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="border-t border-white/18 pt-7">
              <p className="text-[16px] leading-8 text-white/68 mb-10">
                Off-market properties, pre-market inventory, and selectively shared offerings presented through direct relationships and controlled access.
              </p>
              <div className="grid grid-cols-3 gap-4 text-[10px] uppercase tracking-[0.22em] text-white/46">
                <div className="aspect-square border border-white/10 p-5 flex items-end bg-white/[0.01] hover:border-white/22 transition">
                  Off-Market
                </div>
                <div className="aspect-square border border-white/10 p-5 flex items-end bg-white/[0.01] hover:border-white/22 transition">
                  Pre-Market
                </div>
                <div className="aspect-square border border-white/10 p-5 flex items-end bg-white/[0.01] hover:border-white/22 transition">
                  By Introduction
                </div>
              </div>
              <a href="#" className="mt-10 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.22em] text-white/60 hover:text-white transition">
                Request Private Access <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Bar */}
      <section className="px-6 md:px-12 py-10 md:py-12 bg-[#f6f1e8] border-y border-black/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-3 uppercase tracking-[0.28em] text-[10px] text-black/38">
            Selected Recognition
          </div>

          <a href="#intelligence" className="col-span-12 md:col-span-9 group">
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-black/30 transition opacity-80">
              <span className="text-[18px] tracking-[0.08em]">WSJ</span>
              <span className="text-[15px] tracking-[0.12em]">Mansion Global</span>
              <span className="text-[17px] tracking-[0.06em]">Architectural Digest</span>
              <span className="text-[16px] tracking-[0.08em]">Robb Report</span>
              <span className="text-[15px] tracking-[0.1em]">Forbes Global Properties</span>
            </div>
          </a>
        </div>
      </section>

      {/* Intelligence */}
      <section id="intelligence" className="px-6 md:px-12 py-28 md:py-36 bg-[#e9e1d2]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-18 md:mb-24">
            <div className="col-span-12 md:col-span-3 uppercase tracking-[0.34em] text-[10px] text-black/42">Intelligence</div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <h2 className="text-[10vw] md:text-[5.7vw] leading-[0.88] tracking-[-0.075em] font-light max-w-6xl">
                Reporting, commentary, and perspective from the Hawaiʻi market.
              </h2>
            </div>
          </div>

          <div className="border-t border-black/16">
            {intelligence.map(([label, title], index) => (
              <a key={label} href="#" className="grid grid-cols-12 gap-8 py-8 md:py-10 border-b border-black/16 group cursor-pointer block">
                <div className="col-span-2 md:col-span-1 text-black/32 text-sm">0{index + 1}</div>
                <div className="col-span-10 md:col-span-3 uppercase tracking-[0.24em] text-[10px] text-black/42 pt-2">{label}</div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-3xl md:text-[3.8vw] leading-[0.98] tracking-[-0.035em] font-light group-hover:translate-x-3 transition duration-500">{title}</h3>
                </div>
                <div className="hidden md:block col-span-1 text-right text-black/32 pt-3">→</div>
              </a>
            ))}
          </div>
          <div className="mt-12">
            <a href="#" className="inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[10px] uppercase tracking-[0.22em] text-black/60 hover:text-black transition">
              View Intelligence Archive <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Editorial / Magazine Feature */}
      <section className="px-6 md:px-12 py-28 md:py-40 bg-[#171512] text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-7">
              <div className="uppercase tracking-[0.34em] text-[10px] text-white/42 mb-8">HL1 Magazine</div>
              <h2 className="text-[10vw] md:text-[5.2vw] leading-[0.96] tracking-[-0.04em] font-light max-w-5xl">
                Hawai‘i property, architecture, and island life in print.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-3 md:col-start-10">
              <p className="text-[15px] leading-8 text-white/62 border-t border-white/14 pt-6">
                HL1 Magazine is distributed privately to clients, peers, and select recipients, featuring stories, architecture, design, landscape, and the editorial perspectives surrounding Hawaiʻi property.
              </p>

              <a href="#" className="mt-8 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[10px] uppercase tracking-[0.22em] text-white/58 hover:text-white transition">
                Request the Magazine <span>→</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
            <article className="col-span-12 md:col-span-7 group cursor-pointer">
              <div className="relative h-[620px] overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2200&auto=format&fit=crop"
                  alt="Editorial feature"
                  className="absolute inset-0 w-full h-full object-cover opacity-88 group-hover:scale-[1.02] transition duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 right-6 md:right-10">
                  <div className="uppercase tracking-[0.26em] text-[10px] text-white/56 mb-5">
                    Featured from HL1 Magazine
                  </div>

                  <h3 className="text-4xl md:text-[4.4vw] leading-[0.94] tracking-[-0.04em] font-light max-w-4xl">
                    Architecture shaped by the land around it.
                  </h3>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-white/12 mt-6">
                <p className="text-white/60 text-sm leading-7 max-w-xl">
                  A look at architecture across the islands shaped by climate, material restraint, and continuity with the landscape.
                </p>

                <a href="#" className="hidden md:inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[10px] uppercase tracking-[0.22em] text-white/58 hover:text-white transition">
                  Read Featured Story <span>→</span>
                </a>
              </div>
            </article>

            <div className="col-span-12 md:col-span-5 grid gap-6 md:gap-8">
              <article className="group cursor-pointer">
                <div className="relative h-[300px] overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1800&auto=format&fit=crop"
                    alt="Editorial feature"
                    className="absolute inset-0 w-full h-full object-cover opacity-86 group-hover:scale-[1.02] transition duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute left-5 bottom-5 right-5">
                    <div className="uppercase tracking-[0.24em] text-[10px] text-white/56 mb-3">
                      From Intelligence
                    </div>
                    <h3 className="text-3xl leading-[0.96] tracking-[-0.03em] font-light max-w-sm">
                      Privacy, visibility, and the evolving upper market.
                    </h3>
                  </div>
                </div>
              </article>

              <article className="group cursor-pointer border border-white/10 p-8 md:p-10 min-h-[280px] flex flex-col justify-between bg-white/[0.02]">
                <div>
                  <div className="uppercase tracking-[0.24em] text-[10px] text-white/42 mb-8">Print Edition</div>
                  <h3 className="text-4xl md:text-[3vw] leading-[0.98] tracking-[-0.03em] font-light max-w-md">
                    A privately distributed publication centered around Hawai‘i property, architecture, and island life.
                  </h3>
                </div>

                <a href="#" className="inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[10px] uppercase tracking-[0.22em] text-white/58 hover:text-white transition w-fit">
                  About the Magazine <span>→</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Rentals + Representation */}
      <section className="px-6 md:px-12 pb-28 md:pb-40">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 border-t border-black/14">
          <article id="rentals" className="py-14 md:py-20 md:pr-16 border-b md:border-b-0 md:border-r border-black/14">
            <div className="uppercase tracking-[0.34em] text-[10px] text-black/42 mb-10">Rentals</div>
            <h2 className="text-5xl md:text-[5vw] leading-[0.98] tracking-[-0.04em] font-light max-w-xl">
              Private stays, residences, and the care surrounding them.
            </h2>
            <p className="mt-10 text-[15px] leading-8 text-black/62 max-w-lg">
              A selection of residences and estates across the islands, available for short stays, extended visits, and the periods between property decisions. Concierge coordination, estate management, and the same discretion HL1 is built on.
            </p>
            <a href="#" className="mt-10 inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[10px] uppercase tracking-[0.22em] text-black/60 hover:text-black transition">
              Rentals & Stewardship <span>→</span>
            </a>
          </article>
          <article id="representation" className="py-14 md:py-20 md:pl-16">
            <div className="uppercase tracking-[0.34em] text-[10px] text-black/42 mb-10">Representation</div>
            <h2 className="text-5xl md:text-[5vw] leading-[0.98] tracking-[-0.04em] font-light max-w-xl">
              Representation informed by place and discretion.
            </h2>
            <p className="mt-10 text-[15px] leading-8 text-black/62 max-w-lg">
              In Hawaiʻi, significant properties require thoughtful presentation, discretion, and representation grounded in Hawaiʻi itself. HL1 brings together a small group of Directors whose work reflects that standard throughout the islands.
            </p>
            <a href="#" className="mt-10 inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[10px] uppercase tracking-[0.22em] text-black/60 hover:text-black transition">
              Read the Standard <span>→</span>
            </a>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171512] text-white px-6 md:px-12 py-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-10 md:items-center justify-between">
          <div className="text-2xl tracking-[0.04em]">HL1</div>
          <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-[0.24em] text-white/46">
            <a href="#collection">Collection</a>
            <a href="#intelligence">Intelligence</a>
            <a href="#rentals">Rentals</a>
            <a href="#representation">Representation</a>
            <a href="#private">Private Access</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
