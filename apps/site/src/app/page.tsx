import { Heading } from "ui";

export default function Web() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {/* [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] */}
      <div className="absolute h-full w-full bg-[url('/grid.svg')] bg-center">
        <div className="flex h-40 items-center justify-center">
          <Heading as="h1" size="6xl" weight="bold">
            Toolbelt
          </Heading>
        </div>
      </div>

      <div className="container relative grid gap-10 bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
        <HeadingSection />
        <TextSection />
        <ButtonSection />
        <IconButtonSection />
        <ToggleButtonSection />
      </div>
    </main>
  );
}

function HeadingSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        Heading
      </Heading>
      <hr />
      <div className="flex gap-10">
        <div>
          <small>size: 6xl</small>
          <Heading size="6xl">Lorem</Heading>
          <small>size: 5xl</small>
          <Heading size="5xl">Lorem</Heading>
          <small>size: 4xl</small>
          <Heading size="4xl">Lorem</Heading>
          <small>size: 3xl</small>
          <Heading size="3xl">Lorem</Heading>
          <small>size: 2xl</small>
          <Heading size="2xl">Lorem</Heading>
          <small>size: xl</small>
          <Heading size="xl">Lorem</Heading>
          <small>size: lg</small>
          <Heading size="lg">Lorem</Heading>
          <small>size: base</small>
          <Heading size="base">Lorem</Heading>
        </div>
        <div>
          <small>weight: normal</small>
          <Heading weight="normal" size="xl">
            Lorem
          </Heading>
          <small>weight: medium</small>
          <Heading weight="medium" size="xl">
            Lorem
          </Heading>
          <small>weight: semibold</small>
          <Heading weight="semibold" size="xl">
            Lorem
          </Heading>
          <small>weight: bold</small>
          <Heading weight="bold" size="xl">
            Lorem
          </Heading>
          <small>weight: extrabold</small>
          <Heading weight="extrabold" size="xl">
            Lorem
          </Heading>
          <small>weight: black</small>
          <Heading weight="black" size="xl">
            Lorem
          </Heading>
        </div>

        <div>
          <small>tracking: tighter</small>
          <Heading tracking="tighter" size="xl">
            Lorem
          </Heading>
          <small>tracking: tight</small>
          <Heading tracking="tight" size="xl">
            Lorem
          </Heading>
          <small>tracking: normal</small>
          <Heading tracking="normal" size="xl">
            Lorem
          </Heading>
          <small>tracking: wide</small>
          <Heading tracking="wide" size="xl">
            Lorem
          </Heading>
          <small>tracking: wider</small>
          <Heading tracking="wider" size="xl">
            Lorem
          </Heading>
          <small>tracking: widest</small>
          <Heading tracking="widest" size="xl">
            Lorem
          </Heading>
        </div>
        <div>
          <small>color: base</small>
          <Heading color="base" size="xl">
            Lorem
          </Heading>
          <small>color: dark</small>
          <Heading color="dark" size="xl">
            Lorem
          </Heading>
          <small>color: darker</small>
          <Heading color="darker" size="xl">
            Lorem
          </Heading>
        </div>
      </div>
    </section>
  );
}

function TextSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        Text
      </Heading>
      <hr />
      <div className="flex gap-10">@TODO</div>
    </section>
  );
}

function ButtonSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        Button
      </Heading>
      <hr />
      <div className="flex gap-10">@TODO</div>
    </section>
  );
}

function IconButtonSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        IconButton
      </Heading>
      <hr />
      <div className="flex gap-10">@TODO</div>
    </section>
  );
}

function ToggleButtonSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        ToggleButton
      </Heading>
      <hr />
      <div className="flex gap-10">@TODO</div>
    </section>
  );
}

/* <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-lg sm:rounded-xl sm:px-10"> */
/* </div> */

{
  /* <Image
        priority
        src="/beams.jpeg"
        alt="background light beams"
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
        height="900"
      /> */
}
{
  /* <div>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>
                An advanced online playground for Tailwind CSS, including
                support for things like:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    Customizing your
                    <code className="text-sm font-bold text-gray-900">
                      tailwind.config.js
                    </code>{" "}
                    file
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    Extracting classNamees with
                    <code className="text-sm font-bold text-gray-900">
                      @apply
                    </code>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">Code completion with instant preview</p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div> */
}
